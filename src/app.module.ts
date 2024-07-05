import {Module} from "@nestjs/common";

import {UserModule} from "@webModules/user.module";

@Module({
    imports: [UserModule]
})
export class AppModule {}
