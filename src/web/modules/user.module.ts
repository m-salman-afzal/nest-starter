import {Module} from "@nestjs/common";

import {UserController} from "@webControllers/user.controller";

import {UserService} from "@appServices/user.service";

import {DatabaseModule} from "@infraModules/database.module";

import {ConfigurationModule} from "@infra/modules/config.module";

// import {DatabaseModule} from '@infraModules/database.module';

@Module({
    imports: [ConfigurationModule, DatabaseModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
