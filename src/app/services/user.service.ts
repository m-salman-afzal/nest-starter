import {forwardRef, Inject, Injectable} from "@nestjs/common";

import {DATABASE_MODULE_OPTIONS_TOKEN} from "@infraModules/database.module-definition";

import {DatabaseService} from "@infraDatabase/database.service";

import {DI_TOKENS} from "@infraUtils/constants";

import type * as models from "@infraDatabase/drizzle/models";
import type {NodePgDatabase} from "drizzle-orm/node-postgres";

@Injectable()
export class UserService {
    constructor(@Inject(forwardRef(() => DatabaseService)) private readonly db: NodePgDatabase<typeof models>) {}
    async fetchAll() {
        return await this.db.query.users.findMany();
    }
}
