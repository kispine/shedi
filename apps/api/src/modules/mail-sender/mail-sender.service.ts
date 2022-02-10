import { Injectable, Logger } from '@nestjs/common'
import { InjectQueue } from '@nestjs/bull'
import { Queue } from 'bull'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailSenderService {
  private readonly logger = new Logger(MailSenderService.name)

  constructor(
    private readonly mailerService: MailerService,
    @InjectQueue('mail-sender') private mailQueue: Queue,
  ) {}

  async sendConfirmationMail(
    to: string,
    link: string,
  ) {
    const job = await this.mailQueue.add({
      to,
      subject: `Регистрация на shedi`,
      template: 'email-confirmation',
      context: { link },
    })

    this.logger.log(`JOB ID:${job.id} started ## confirmation-email to ${job.data.to}`)
  }
}