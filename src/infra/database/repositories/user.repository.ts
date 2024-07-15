import {IUserEntity} from "@entities//user/user.entity";
import {forwardRef, Inject, Injectable} from "@nestjs/common";

import {DatabaseService} from "@infraDatabase/database.service";
import {userModel} from "@infraDatabase/drizzle/models";
import {TUserColumn, TUserModel} from "@infraDatabase/drizzle/models/user.model";

import {BaseRepository} from "./base.repository";

@Injectable()
export class UserRepository extends BaseRepository<TUserModel, TUserColumn, IUserEntity> {
    constructor(@Inject(forwardRef(() => DatabaseService)) databaseService: DatabaseService) {
        super(databaseService, userModel);
    }
}
