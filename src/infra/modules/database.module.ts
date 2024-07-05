import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

import {DATABASE_CONFIG} from "@infraConfig/database.config";

import {databaseProviders} from "@infraDatabase/database.providers";

@Module({
    imports: [ConfigModule.forFeature(DATABASE_CONFIG)],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {}
