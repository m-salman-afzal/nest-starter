import {TModelColumn} from "@shared/types/database.type";
import {relations} from "drizzle-orm";
import {pgTable, varchar} from "drizzle-orm/pg-core";

import {baseModel} from "./base.model";
import {taskModel} from "./task.model";

export const userModel = pgTable("users", {
    ...baseModel,
    userId: varchar("userId", {length: 256}).unique("users_userId_idx"),
    name: varchar("name", {length: 256}),
    email: varchar("email", {length: 256}).unique("users_email_idx"),
    password: varchar("password", {length: 256})
});

export const userRelations = relations(userModel, ({many}) => ({
    tasks: many(taskModel)
}));

export type TUserModel = typeof userModel;

export type TUserColumn = TModelColumn<typeof userModel>;
