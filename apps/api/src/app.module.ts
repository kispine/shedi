import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GqlModuleAsyncOptions, GqlModuleOptions, GraphQLModule } from '@nestjs/graphql'
import { environment } from './environments/environment'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
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

    UserModule,
  ],
  exports: []
})
export class AppModule {
}
