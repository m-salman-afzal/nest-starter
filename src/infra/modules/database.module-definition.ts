import {ConfigurableModuleBuilder} from "@nestjs/common";

import type {TDATABASE_CONFIG} from "@infraConfig/database.config";

export interface DatabaseModuleOptions extends TDATABASE_CONFIG {}

export const {
    ConfigurableModuleClass: ConfigurableDatabaseModuleClass,
    MODULE_OPTIONS_TOKEN: DATABASE_MODULE_OPTIONS_TOKEN
} = new ConfigurableModuleBuilder<DatabaseModuleOptions>().setClassMethodName("forRoot").build();
