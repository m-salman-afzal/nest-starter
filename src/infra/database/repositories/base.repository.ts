import "@nestjs/common";
import "@nestjs/common";
import "@nestjs/common";

import {forwardRef, Inject} from "@nestjs/common";
import {NodePgDatabase} from "drizzle-orm/node-postgres";

import {DatabaseService} from "@infraDatabase/database.service";

import type * as models from "@infraDatabase/drizzle/models";
import type {users} from "@infraDatabase/drizzle/models/user.model";

export class BaseRepository {
    private db!: NodePgDatabase<typeof models>;
    private readonly model: typeof users;

    @Inject(forwardRef(() => DatabaseService))
    private readonly databaseService!: DatabaseService;

    constructor(model: typeof users) {
        this.db = this.databaseService.getDatabase();
        this.model = model;
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    async fetchAll(props: {selectColumns: any; where: any}) {
        return await this.db.select(props.selectColumns).from(this.model).where(props.where);
    }
}
