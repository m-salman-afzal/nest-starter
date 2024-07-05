import {registerAs} from "@nestjs/config";
import {z} from "zod";

export const DATABASE_CONFIG_DEFAULTS = {
    DB_HOST: "",
    DB_USERNAME: "",
    DB_PASSWORD: "",
    DB_NAME: "",
    DB_PORT: 0,
    DB_SYNC: false,
    DB_LOG: false
};

const DATABASE_CONFIG_VALIDATION = z.object({
    DB_NAME: z.string().min(1),
    DB_HOST: z.string().min(1),
    DB_PORT: z.coerce.number(),
    DB_USERNAME: z.string().min(1),
    DB_PASSWORD: z.string().min(1),
    DB_SYNC: z.coerce.boolean(),
    DB_LOG: z.coerce.boolean()
});

export const DATABASE_CONFIG = registerAs("DATABASE", () => {
    return DATABASE_CONFIG_VALIDATION.parse(process.env);
});

export type TDATABASE_CONFIG = z.infer<typeof DATABASE_CONFIG_VALIDATION>;
