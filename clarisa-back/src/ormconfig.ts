import { DataSource } from 'typeorm';
import 'dotenv/config';
import { env } from 'process';

export const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [
    `${__dirname}/api/**/*.entity{.ts,.js}`,
    `${__dirname}/auth/**/*.entity{.ts,.js}`,
  ],
  synchronize: false,
  migrationsRun: false,
  logging: false,
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
  metadataTableName: 'orm_metadata',
  bigNumberStrings: false,
  extra: {
    namedPlaceholders: true,
  },
});
