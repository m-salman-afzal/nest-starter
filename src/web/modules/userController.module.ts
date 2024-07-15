import {Module} from "@nestjs/common";

import {UserController} from "@webControllers/user.controller";

import {UserServiceModule} from "@appModules/userService.module";

@Module({
    imports: [UserServiceModule],
    controllers: [UserController]
})
export class UserControllerModule {}
