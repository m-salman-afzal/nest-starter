import {registerAs} from "@nestjs/config";
import {z} from "zod";

const APP_CONFIG_VALIDATION = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]),
    API_VERSION: z.string().min(1),
    API_NAME: z.string().min(1),
    API_PORT: z.coerce.number(),
    API_SECRET: z.string().min(1)
});

export const APP_CONFIG = registerAs("APP", () => {
    return APP_CONFIG_VALIDATION.parse(process.env);
});

export type TAPP_CONFIG = z.infer<typeof APP_CONFIG_VALIDATION>;
