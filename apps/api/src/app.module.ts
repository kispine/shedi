import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GqlModuleAsyncOptions, GqlModuleOptions, GraphQLModule } from '@nestjs/graphql'
import environment from './environments'
import { UserModule } from './modules/user/user.module'
import { BullModule } from '@nestjs/bull'
import { MailSenderModule } from './modules/mail-sender/mail-sender.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.db,
    }),

    GraphQLModule.forRootAsync({
      useFactory: () => {
        const schemaModuleOptions: Partial<GqlModuleOptions> = {}

        if (process.env.NODE_ENV !== 'production' || process.env.IS_OFFLINE) {
          schemaModuleOptions.autoSchemaFile = 'apps/api/src/modules/schema.gql'
        } else {
          schemaModuleOptions.typePaths = ['*.gql']
        }

        return {
          context: ({req}) => {req},
          useGlobalPrefix: true,
          playground: true,
          introspection: true,
          ...schemaModuleOptions
        }
      }
    } as GqlModuleAsyncOptions),

    BullModule.forRoot({
      redis: {
        ...environment.redis
      }
    }),

    MailSenderModule,
    UserModule,
  ],
  exports: []
})
export class AppModule {}
