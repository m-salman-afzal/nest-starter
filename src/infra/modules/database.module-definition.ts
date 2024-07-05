import {ConfigurableModuleBuilder} from "@nestjs/common";

interface TDatabaseModuleOptions {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

export const {
    ConfigurableModuleClass: ConfigurableDatabaseModuleClass,
    MODULE_OPTIONS_TOKEN: DATABASE_MODULE_OPTIONS_TOKEN
} = new ConfigurableModuleBuilder<TDatabaseModuleOptions>().setClassMethodName("forRoot").build();
