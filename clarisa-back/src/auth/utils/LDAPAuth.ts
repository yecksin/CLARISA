import { BaseAuthenticator } from "./interface/BaseAuthenticator";
import ActiveDirectory from 'activedirectory';
import config from "src/shared/config/config";
import { BaseMessageDTO } from "./BaseErrorDTO";

export class LDAPAuth implements BaseAuthenticator {
    private ad = new ActiveDirectory(config.active_directory);

    authenticate(username: string, password: string): Promise <boolean | BaseMessageDTO> {
        return new Promise((resolve, reject) => {
            // var userPrincipalName = 'j.cadavid@cgiar.org';
            // var username = 'CN=Juan,OU=Users,DC=CGIARAD,DC=ORG';

            this.ad.authenticate(username, password, (err, auth) => {
                console.log({auth});
                if (auth) {
                    console.log('Authenticated AD!', JSON.stringify(auth));
                    return resolve(auth);
                }
                if (err) {
                    console.log('ERROR AUTH: ' + JSON.stringify(err));
                    const notFound : BaseMessageDTO = {
                        name: 'SERVER_NOT_FOUND',
                        description: `There was an internal server error: ${err.lde_message}`,
                        httpCode: 400,
                    };
                    if (err.errno == 'ENOTFOUND') {
                        notFound.name = 'SERVER_NOT_FOUND';
                        notFound.description = 'Server not found';
                    }
                    // console.log(err)
                    // console.log(typeof err)

                    return reject(notFound);
                } else {
                    console.log('Authentication failed!');
                    const err : BaseMessageDTO = {
                        name: 'INVALID_CREDENTIALS',
                        description: 'The supplied credentials are invalid',
                        httpCode: 400,
                    };

                    console.log('ERROR: ' + JSON.stringify(err));
                    return reject(err);
                }
            });
        });
    }
}