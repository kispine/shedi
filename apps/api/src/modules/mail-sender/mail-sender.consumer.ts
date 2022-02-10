import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'
import { Injectable, Logger } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

interface ISendMailData<T> {
  to: string
  subject: string
  template: string
  context: T
}

@Injectable()
@Processor('mail-sender')
export class MailSenderConsumer {
  private readonly logger = new Logger(MailSenderConsumer.name)

  constructor(
    private readonly mailerService: MailerService,
  ) {}

  @Process()
  async sendMail<T>(job: Job<ISendMailData<T>>) {
    const res = await this.mailerService.sendMail({
      to: job.data.to,
      subject: job.data.subject,
      template: job.data.template,
      context: job.data.context,
    })

    this.logger.log(`JOB ID:${job.id} completed ## confirmation-email to ${job.data.to} ## ${res.response}`)
  }
}