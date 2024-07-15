import {Module} from "@nestjs/common";
import {ConfigModule, ConfigType} from "@nestjs/config";

import {UserControllerModule} from "@webModules/userController.module";

import {DatabaseModule} from "@infraModules/database.module";

import {DATABASE_CONFIG} from "@infraConfig/database.config";

@Module({
    imports: [
        DatabaseModule.forRootAsync({
            imports: [ConfigModule.forFeature(DATABASE_CONFIG)],
            inject: [DATABASE_CONFIG.KEY],
            useFactory: (dbConfig: ConfigType<typeof DATABASE_CONFIG>) => ({...dbConfig})
        }),
        UserControllerModule
    ]
})
export class AppModule {}
