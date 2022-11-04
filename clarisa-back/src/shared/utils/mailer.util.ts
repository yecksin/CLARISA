import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs/promises';
import { env } from 'process';
import { Injectable, Logger } from '@nestjs/common';
import 'dotenv/config';
import Mail from 'nodemailer/lib/mailer';
import Handlebars from 'handlebars';
import { PartnerRequest } from 'src/api/partner-request/entities/partner-request.entity';

@Injectable()
export class MailUtil {
  private readonly logger: Logger = new Logger(MailUtil.name);
  private readonly handlebarsConfig = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: path.join(__dirname, '../email-templates/'),
      layoutsDir: path.join(__dirname, '../email-templates/'),
      defaultLayout: '',
    },
    viewPath: path.join(__dirname, '../email-templates/'),
    extName: '.hbs',
  };

  private async getTransporterInstance() {
    const isProd: boolean = env.APP_PROFILE === 'PROD';
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: env.PREFERRED_EMAIL_HOST,
      port: +env.PREFERRED_EMAIL_PORT,
      logger: isProd,
      debug: isProd,
      secure: false,
      ignoreTLS: true,
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
      auth: {
        user: env.PREFERRED_EMAIL_USERNAME,
        pass: env.PREFERRED_EMAIL_PASSWORD,
      },
    });

    let isReady: boolean = await transporter
      .verify()
      .then((res) => {
        this.logger.debug('Peferred mail connection established!');
        return res;
      })
      .catch((err) => {
        this.logger.warn(
          `An error trying to establish a connection with the preferred mail connection was detected: ${err.toString()}`,
        );
        return false;
      });

    if (!isReady) {
      this.logger.log(
        'could not init mail client with the preferred credentials. Switching to the alternative...',
      );

      transporter = nodemailer.createTransport({
        host: env.ALTERNATIVE_EMAIL_HOST,
        port: +env.ALTERNATIVE_EMAIL_PORT,
        logger: isProd,
        debug: isProd,
        secure: false,
        ignoreTLS: true,
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
        auth: {
          user: env.ALTERNATIVE_EMAIL_USERNAME,
          pass: env.ALTERNATIVE_EMAIL_PASSWORD,
        },
      });

      await transporter
        .verify()
        .then((res) => {
          this.logger.debug('Alternative mail connection established!');
          return res;
        })
        .catch((err) => {
          this.logger.error(
            `An error trying to establish a connection with the alternative mail connection was detected: ${err.toString()}`,
          );
          return false;
        });
    }

    return transporter;
  }

  private loadUpTemplate(relativePath: string): Promise<string> {
    return fs.readFile(path.join(__dirname, relativePath), {
      encoding: 'utf-8',
    });
  }

  public sendNewPartnerRequestNotification(partnerRequest: PartnerRequest) {
    const subject: string = `${
      env.APP_PROFILE === 'DEV' ? 'TEST' : ''
    } [CLARISA API - ${
      partnerRequest.mis_object.acronym
    }] Partner verification - ${partnerRequest.partner_name}`;

    const to: string = partnerRequest.external_user_mail;
    const cc: string = env.SUPPORT_EMAIL;

    this.loadUpTemplate(
      '../../../assets/email-templates/new-partner-request.hbs',
    ).then((hbsTemplate) => {
      const template = Handlebars.compile(hbsTemplate);
      let compiledTemplate: string = template(partnerRequest);

      this.sendEmail({
        from: env.SUPPORT_EMAIL, // sender address
        to, // list of receivers
        cc,
        subject, // Subject line
        //text: 'Hello world?', // plain text body
        html: compiledTemplate, // html body
      });
    });

    //Handlebars.compile()
  }

  public async sendEmail<T>(options: Mail.Options): Promise<T> {
    let transporter: nodemailer.Transporter =
      await this.getTransporterInstance();
    return transporter.sendMail(options);
  }

  private testing_mail(transporter: nodemailer.Transporter) {
    // send mail with defined transport object
    transporter
      .sendMail({
        from: env.SUPPORT_EMAIL, // sender address
        to: 'j.d.munoz@cgiar.org, g.martinez@cgiar.org', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
      })
      .then((info) => {
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      })
      .catch((err) => console.error(err))
      .finally(() => transporter.close());
  }
}
