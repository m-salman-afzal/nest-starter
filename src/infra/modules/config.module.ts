import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

import {APP_CONFIG} from "@infraConfig/app.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true,
            cache: true,
            load: [APP_CONFIG]
        })
    ]
})
export class ConfigurationModule {}
