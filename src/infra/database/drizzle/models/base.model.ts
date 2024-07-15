import {serial, timestamp} from "drizzle-orm/pg-core";

export const baseModel = {
    id: serial("id").primaryKey(),
    createdAt: timestamp("createdAt"),
    updatedAt: timestamp("updatedAt"),
    deletedAt: timestamp("deletedAt")
};
