import {Module} from "@nestjs/common";

import {DatabaseService} from "@infraDatabase/database.service";

import {ConfigurableDatabaseModuleClass} from "./database.module-definition";

@Module({
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule extends ConfigurableDatabaseModuleClass {}
