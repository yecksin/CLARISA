import { BasePasswordEncoder } from "./interface/BasePasswordEncoder";
import MD5 from 'crypto-js/md5';
import { Injectable } from "@nestjs/common";

@Injectable()
export class LegacyPasswordEncoder extends BasePasswordEncoder{
    matches(hashedPassword: string, incomingPassword: any): boolean {
        return hashedPassword === MD5(incomingPassword).toString();
    }

    encode(incomingPassword: any): string {
       return MD5(incomingPassword).toString();
    }
}