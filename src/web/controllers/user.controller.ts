import {Controller, forwardRef, Get, Inject} from "@nestjs/common";

import {UserService} from "@appServices/user.service";

@Controller("users")
export class UserController {
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService
    ) {}

    @Get()
    async fetchAll() {
        return await this.userService.fetchAll();
    }
}
