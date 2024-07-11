import {forwardRef, Inject, Injectable} from "@nestjs/common";

import {users} from "@infraDatabase/drizzle/models";
import {UserRepository} from "@infraDatabase/repositories/user.repository";

@Injectable()
export class UserService {
    constructor(@Inject(forwardRef(() => UserRepository)) private readonly userRepository: UserRepository) {}

    async fetchAll() {
        return await this.userRepository.fetchAll({selectColumns: {id: users.name}});
    }
}
