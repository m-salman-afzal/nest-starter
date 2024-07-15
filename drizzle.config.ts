import {defineConfig} from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    out: "./src/infra/database/drizzle/migrations",
    schema: "./src/infra/database/drizzle/models/*",
    dbCredentials: {
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        host: String(process.env["DB_HOST"]),
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        port: Number(process.env["DB_PORT"]),
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        user: String(process.env["DB_USERNAME"]),
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        password: String(process.env["DB_PASSWORD"]),
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        database: String(process.env["DB_NAME"]),
        ssl: false
    },
    verbose: true,
    strict: true
});
