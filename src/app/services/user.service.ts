import {forwardRef, Inject, Injectable} from "@nestjs/common";

import {DatabaseService} from "@infraDatabase/database.service";

import type * as models from "@infraDatabase/drizzle/models";
import type {NodePgDatabase} from "drizzle-orm/node-postgres";

@Injectable()
export class UserService {
    private readonly db: NodePgDatabase<typeof models>;
    constructor(@Inject(forwardRef(() => DatabaseService)) private readonly databaseService: DatabaseService) {
        this.db = this.databaseService.getDatabase();
    }

    async fetchAll() {
        return await this.db.query.users.findMany();
    }
}
