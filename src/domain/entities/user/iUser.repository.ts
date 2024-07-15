import {TUserColumn, TUserModel} from "@infraDatabase/drizzle/models/user.model";
import {BaseRepository} from "@infraDatabase/repositories/base.repository";

import {IUserEntity} from "./user.entity";

export interface IUserRepository extends BaseRepository<TUserModel, TUserColumn, IUserEntity> {}
