import {Inject, Injectable} from "@nestjs/common";
import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";
import {Client, ClientBase} from "pg";

import {DATABASE_MODULE_OPTIONS_TOKEN} from "@infraModules/database.module-definition";

import {DI_TOKENS} from "@infraUtils/constants";

import * as models from "./drizzle/models";

import type {TDATABASE_CONFIG} from "@infraConfig/database.config";

@Injectable()
export class DatabaseService {
    // private readonly connectionOptions: TDATABASE_CONFIG;

    db: NodePgDatabase<typeof models>;

    constructor(@Inject(DI_TOKENS.DATABASE_CLIENT) private readonly client: Client) {
        // this.connectionOptions = connectionOptions;
        this.db = drizzle(this.client, {schema: models, logger: true});
    }

    // getConnectionOptions() {
    //     return this.connectionOptions;
    // }

    // getDatabase() {
    //     return this.db;
    // }

    // private createClient() {
    //     const dbConfig = this.getConnectionOptions();

    //     return new Client({
    //         host: dbConfig.DB_HOST,
    //         port: dbConfig.DB_PORT,
    //         user: dbConfig.DB_USERNAME,
    //         password: dbConfig.DB_PASSWORD,
    //         database: dbConfig.DB_NAME
    //     });
    // }

    // async connect() {
    //     await this.createClient().connect();
    // }

    // async disconnect() {
    //     await this.createClient().end();
    // }
}
