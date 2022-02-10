import { IEnvironment } from './index'

export const environmentProd: IEnvironment = {
  production: true,

  db: {
    type: process.env.DB_TYPE as 'aurora-data-api',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    dropSchema: false,
    synchronize: true,
    logging: true,
    autoLoadEntities: true,
    entities: [
      'dist/app/api/src/**/**/**/*.entity[.ts, .js]'
    ],
    migrations: [
      'dist/app/api/migrations/*[.ts, .js]'
    ],
    cli: {
      'migrationsDir': 'db/migrations'
    },
  },

  redis: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },

  smtp: {
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE == '1',
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
    from: {
      name: process.env.SMTP_FROM_NAME,
      address: process.env.SMTP_FROM_ADDRESS,
    }
  }
}
