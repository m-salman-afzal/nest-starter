import {Global, Module} from "@nestjs/common";
import {Client} from "pg";

import {DatabaseService} from "@infraDatabase/database.service";

import {DI_TOKENS} from "@infraUtils/constants";

import {ConfigurableDatabaseModuleClass, DATABASE_MODULE_OPTIONS_TOKEN} from "./database.module-definition";

@Global()
@Module({
    providers: [
        DatabaseService,
        {
            provide: DI_TOKENS.DATABASE_CLIENT,
            inject: [DATABASE_MODULE_OPTIONS_TOKEN],
            useFactory: (dbConfig) => {
                return new Client({
                    host: dbConfig.DB_HOST,
                    port: dbConfig.DB_PORT,
                    user: dbConfig.DB_USERNAME,
                    password: dbConfig.DB_PASSWORD,
                    database: dbConfig.DB_NAME
                });
            }
        }
    ],
    exports: [DatabaseService]
})
export class DatabaseModule extends ConfigurableDatabaseModuleClass {}
