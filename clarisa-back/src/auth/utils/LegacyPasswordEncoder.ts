import { BasePasswordEncoder } from './interface/BasePasswordEncoder';

import MD5 from 'crypto-js/md5';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LegacyPasswordEncoder extends BasePasswordEncoder {
  matches(hashedPassword: string, incomingPassword: any): boolean {
    return hashedPassword === MD5(incomingPassword).toString();
  }

  /**
   * Encodes a password, using MD5
   * @deprecated MD5 is not really a good way to store a password, so please use the BCryptPasswordEncoder instead
   * @param incomingPassword the password to encode
   * @returns a password encoded, using MD5
   */
  encode(incomingPassword: any): string {
    return MD5(incomingPassword).toString();
  }
}
