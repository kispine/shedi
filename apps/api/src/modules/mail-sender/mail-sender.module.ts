import { Module } from '@nestjs/common'
import { MailerModule } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { BullModule } from '@nestjs/bull'
import { MailSenderService } from './mail-sender.service'
import environment from '../../environments'
import { MailSenderConsumer } from './mail-sender.consumer'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: environment.smtp.host,
        port: environment.smtp.port,
        secure: true,
        auth: {
          user: environment.smtp.username,
          pass: environment.smtp.password,
        },
      },
      defaults: {
        from: `"${environment.smtp.from.name}" <${environment.smtp.from.address}>`,
      },
      template: {
        dir: __dirname + '/assets/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),

    BullModule.registerQueue({
      name: 'mail-sender',
    }),
  ],
  controllers: [],
  providers: [
    MailSenderService,
    MailSenderConsumer,
  ],
  exports: [MailSenderService],
})
export class MailSenderModule {}