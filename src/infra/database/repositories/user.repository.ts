import {forwardRef, Inject, Injectable} from "@nestjs/common";
import {TModelColumn} from "@shared/types/database.type";

import {DatabaseService} from "@infraDatabase/database.service";
import {users} from "@infraDatabase/drizzle/models";

import {BaseRepository} from "./base.repository";

@Injectable()
export class UserRepository extends BaseRepository<typeof users, TModelColumn<typeof users>> {
    constructor(@Inject(forwardRef(() => DatabaseService)) databaseService: DatabaseService) {
        super(databaseService, users);
    }
}
