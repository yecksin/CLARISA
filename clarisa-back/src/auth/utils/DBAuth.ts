import { Inject, Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { User } from "src/api/user/entities/user.entity";
import { UserService } from "src/api/user/user.service";
import { BaseMessageDTO } from "./BaseMessageDTO";
import { BCryptPasswordEncoder } from "./BCryptPasswordEncoder";
import { BaseAuthenticator } from "./interface/BaseAuthenticator";
import { BasePasswordEncoder } from "./interface/BasePasswordEncoder";
import { LegacyPasswordEncoder } from "./LegacyPasswordEncoder";

@Injectable()
export class DBAuth implements BaseAuthenticator {

    @Inject()
    private usersService: UserService;

    private passwordEncoder: BasePasswordEncoder;

    constructor(private moduleRef: ModuleRef) { }

    authenticate(username: string, password: string): Promise<User | BaseMessageDTO> {
        return this.usersService.findOneByEmail(username).then((user: User) => {
            const userPass: string = user.password;
            const errorDto: BaseMessageDTO = {
                name: 'INVALID_CREDENTIALS',
                description: 'The supplied credentials are invalid',
                httpCode: 401
            };

            this.passwordEncoder = this.moduleRef.get(this.isLegacyPassword(user.password) ? LegacyPasswordEncoder : BCryptPasswordEncoder);

            if (this.passwordEncoder.matches(userPass, password)) {
                return user;
            } else {
                return errorDto;
            }
        });
    }

    public isLegacyPassword(incomingPassword: string): boolean {
        return !incomingPassword.startsWith('$2B$');
    }
}