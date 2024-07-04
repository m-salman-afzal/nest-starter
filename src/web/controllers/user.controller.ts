import {Controller, Get, Inject, forwardRef} from '@nestjs/common';
import {UserService} from '@services/user.service';

@Controller('users')
export class UserController {
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService
    ) {}

    @Get()
    fetchAll() {
        return this.userService.fetchAll();
    }
}
