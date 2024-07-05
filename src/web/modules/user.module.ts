import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

import {UserController} from "@webControllers/user.controller";

import {UserService} from "@appServices/user.service";

import {DatabaseModule} from "@infraModules/database.module";
import {ConfigurableDatabaseModuleClass} from "@infraModules/database.module-definition";

import {DATABASE_CONFIG} from "@infraConfig/database.config";

import {DatabaseService} from "@infraDatabase/database.service";

import type {ConfigType} from "@nestjs/config";

@Module({
    imports: [
        DatabaseModule.forRootAsync({
            imports: [ConfigModule.forFeature(DATABASE_CONFIG)],
            inject: [DATABASE_CONFIG.KEY],
            useFactory: (dbConfig: ConfigType<typeof DATABASE_CONFIG>) => ({
                host: dbConfig.DB_HOST,
                port: dbConfig.DB_PORT,
                user: dbConfig.DB_USERNAME,
                password: dbConfig.DB_PASSWORD,
                database: dbConfig.DB_NAME
            })
        })
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
