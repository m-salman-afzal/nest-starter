import {Module} from "@nestjs/common";

import {UserController} from "@webControllers/user.controller";

import {UserService} from "@appServices/user.service";

import {UserRepository} from "@infraDatabase/repositories/user.repository";

@Module({
    providers: [UserService, UserRepository],
    controllers: [UserController]
})
export class UserModule {}
