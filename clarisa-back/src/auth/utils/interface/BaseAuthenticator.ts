import { BaseMessageDTO } from "../BaseMessageDTO";

export interface BaseAuthenticator {
    authenticate(username: string, password: string) : Promise<boolean | BaseMessageDTO>;
}