import {Injectable} from "@nestjs/common";

import {users} from "@infraDatabase/drizzle/models";

import {BaseRepository} from "./base.repository";

@Injectable()
export class UserRepository extends BaseRepository {
    constructor() {
        super(users);
    }
}
