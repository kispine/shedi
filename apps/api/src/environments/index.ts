import { environmentDev as EnvironmentDev } from './environment.dev'
import { environmentProd as EnvironmentProd } from './environment.prod'

export interface IEnvironment {
  production: boolean

  db: {
    type: 'aurora-data-api',
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    dropSchema: boolean,
    synchronize: boolean,
    logging: boolean,
    autoLoadEntities: boolean,
    entities: string[],
    migrations: string[],
    cli: {[key: string]: string},
  },

  redis: {
    host: string,
    port: number,
    password: string,
  },

  smtp: {
    host: string,
    port: number,
    secure: boolean,
    username: string,
    password: string,
    from: {
      name: string,
      address: string
    }
  }
}

export default
  process.env.NODE_ENV === 'production'
    ? EnvironmentProd
    : EnvironmentDev