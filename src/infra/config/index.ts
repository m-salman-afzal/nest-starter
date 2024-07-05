import {APP_CONFIG_VALIDATION} from "./app.config";
import {DATABASE_CONFIG_VALIDATION} from "./database.config";

import type {z} from "zod";

export const ENV_VARIABLES = APP_CONFIG_VALIDATION.and(DATABASE_CONFIG_VALIDATION);

export type TENV_VARIABLES = z.infer<typeof ENV_VARIABLES>;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof ENV_VARIABLES> {}
    }
}
