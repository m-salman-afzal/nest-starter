import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

import {ENV_VARIABLES} from "@infraConfig/index";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true,
            cache: true,
            validate: (config) => {
                return ENV_VARIABLES.parse(config);
            }
        })
    ]
})
export class ConfigurationModule {}
