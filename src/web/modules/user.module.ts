import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

import {UserController} from "@webControllers/user.controller";

import {UserService} from "@appServices/user.service";

import {DatabaseModule} from "@infraModules/database.module";

import {DATABASE_CONFIG} from "@infraConfig/database.config";

import type {ConfigType} from "@nestjs/config";

@Module({
    imports: [
        DatabaseModule.forRootAsync({
            imports: [ConfigModule.forFeature(DATABASE_CONFIG)],
            inject: [DATABASE_CONFIG.KEY],
            useFactory: (dbConfig: ConfigType<typeof DATABASE_CONFIG>) => ({...dbConfig})
        })
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
