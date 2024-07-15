import {forwardRef, Inject, Injectable} from "@nestjs/common";
import {eq} from "drizzle-orm";

import {IUserRepository} from "@entities/user/iUser.repository";

import {userModel} from "@infraDatabase/drizzle/models";
import {UserRepository} from "@infraDatabase/repositories/user.repository";

@Injectable()
export class UserService {
    constructor(@Inject(forwardRef(() => UserRepository)) private readonly userRepository: IUserRepository) {}

    async fetchAll() {
        return await this.userRepository.fetchAll({whereFilters: eq(userModel.userId, "1")});
    }
}
