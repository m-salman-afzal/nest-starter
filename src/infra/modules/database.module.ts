import {Global, Module} from "@nestjs/common";

import {DatabaseService} from "@infraDatabase/database.service";

import {ConfigurableDatabaseModuleClass} from "./database.module-definition";

@Global()
@Module({
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule extends ConfigurableDatabaseModuleClass {}
