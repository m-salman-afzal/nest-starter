import {Inject, Injectable} from "@nestjs/common";
import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";
import {Client} from "pg";

import {DATABASE_MODULE_OPTIONS_TOKEN} from "@infraModules/database.module-definition";

import * as models from "./drizzle/models";

import type {TDATABASE_CONFIG} from "@infraConfig/database.config";
import type {DatabaseModuleOptions} from "@infraModules/database.module-definition";

@Injectable()
export class DatabaseService {
    private readonly connectionOptions: TDATABASE_CONFIG;

    private readonly db: NodePgDatabase<typeof models>;

    constructor(@Inject(DATABASE_MODULE_OPTIONS_TOKEN) connectionOptions: DatabaseModuleOptions) {
        this.connectionOptions = connectionOptions;

        this.db = drizzle(this.createClient(), {schema: models, logger: this.connectionOptions.DB_LOG});
    }

    getConnectionOptions() {
        return this.connectionOptions;
    }

    getDatabase() {
        return this.db;
    }

    private createClient() {
        const dbConfig = this.getConnectionOptions();

        return new Client({
            host: dbConfig.DB_HOST,
            port: dbConfig.DB_PORT,
            user: dbConfig.DB_USERNAME,
            password: dbConfig.DB_PASSWORD,
            database: dbConfig.DB_NAME
        });
    }

    async connect() {
        await this.createClient().connect();
    }

    async disconnect() {
        await this.createClient().end();
    }
}
