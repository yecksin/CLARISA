import { BasePasswordEncoder } from "./interface/BasePasswordEncoder";
import * as bcrypt from 'bcryptjs';
import { Injectable } from "@nestjs/common";

@Injectable()
export class BCryptPasswordEncoder extends BasePasswordEncoder{
    public matches(hashedPassword: string, incomingPassword: any): boolean {
        try {
            return bcrypt.compareSync(incomingPassword, hashedPassword);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public encode(incomingPassword: any): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(incomingPassword, salt);
    }

}