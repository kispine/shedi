export const environment = {
  production: false,
  connection: {
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
  }
}
