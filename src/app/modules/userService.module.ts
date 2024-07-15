import {Module} from "@nestjs/common";

import {UserService} from "@appServices/user.service";

import {UserRepository} from "@infraDatabase/repositories/user.repository";

@Module({
    providers: [UserService, UserRepository],
    exports: [UserService]
})
export class UserServiceModule {}
