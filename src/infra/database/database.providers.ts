import {ConfigService} from "@nestjs/config";
import {drizzle} from "drizzle-orm/node-postgres";
import {Client} from "pg";

import {DATABASE_CONFIG_DEFAULTS} from "@infraConfig/database.config";

import {DI_TOKENS} from "@infraUtils/constants";

import * as models from "./drizzle/models";

import type {TDATABASE_CONFIG} from "@infraConfig/database.config";
import type {TENV_VARIABLES} from "@infraConfig/index";
import type {ConfigType} from "@nestjs/config";

export const databaseProviders = [
    {
        provide: DI_TOKENS.DRIZZLE_DATASOURCE,
        inject: [ConfigService],
        useFactory: async (configService: ConfigService<TENV_VARIABLES>) => {
            const dbConfig = configService.get("DATABASE", DATABASE_CONFIG_DEFAULTS, {infer: true});

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
