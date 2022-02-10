import { Module } from '@nestjs/common'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { MailSenderModule } from '../mail-sender/mail-sender.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MailSenderModule
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserResolver
  ],
  exports: []
})
export class UserModule {}