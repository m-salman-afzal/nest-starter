import {drizzle} from "drizzle-orm/node-postgres";
import {Client} from "pg";

import {DATABASE_CONFIG} from "@infraConfig/database.config";

import {DI_TOKENS} from "@infraUtils/constants";

import * as models from "./drizzle/models";

import type {FactoryProvider} from "@nestjs/common";
import type {ConfigType} from "@nestjs/config";

export const dbProviders: FactoryProvider[] = [
    {
        provide: DI_TOKENS.DRIZZLE_DATASOURCE,
        inject: [DATABASE_CONFIG.KEY],
        useFactory: async (dbConfig: ConfigType<typeof DATABASE_CONFIG>) => {
            const dataSource = new Client({
                host: dbConfig.DB_HOST,
                port: dbConfig.DB_PORT,
                user: dbConfig.DB_USERNAME,
                password: dbConfig.DB_PASSWORD,
                database: dbConfig.DB_NAME
            });

            await dataSource.connect();

            const db = drizzle(dataSource, {schema: models, logger: dbConfig.DB_LOG});

            return db;
        }
    }
];
