import {relations} from "drizzle-orm";
import {pgTable, varchar} from "drizzle-orm/pg-core";

import {baseModel} from "./base.model";
import {userModel} from "./user.model";

export const taskModel = pgTable("tasks", {
    ...baseModel,
    taskId: varchar("taskId", {length: 256}).unique("tasks_taskId_idx"),
    description: varchar("name", {length: 256}),
    userId: varchar("userId", {length: 256}).references(() => userModel.userId, {
        onDelete: "set null",
        onUpdate: "cascade"
    })
});

export const taskRelations = relations(taskModel, ({one}) => ({
    user: one(userModel, {
        fields: [taskModel.userId],
        references: [userModel.userId],
        relationName: "ManyTasksToOneUser"
    })
}));
