import {Inject, Injectable} from "@nestjs/common";

import {DI_TOKENS} from "@infraUtils/constants";

import type * as models from "@infraDatabase/drizzle/models";
import type {NodePgDatabase} from "drizzle-orm/node-postgres";

@Injectable()
export class UserService {
    constructor(@Inject(DI_TOKENS.DRIZZLE_DATASOURCE) private readonly db: NodePgDatabase<typeof models>) {}
    async fetchAll() {
        return await this.db.query.users.findMany();
    }
}
