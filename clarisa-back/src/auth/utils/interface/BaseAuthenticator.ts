import { BaseMessageDTO } from "../BaseErrorDTO";

export interface BaseAuthenticator {
    authenticate(username: string, password: string) : Promise<boolean | BaseMessageDTO>;
}