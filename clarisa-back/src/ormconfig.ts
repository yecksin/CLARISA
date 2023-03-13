import { DataSource } from 'typeorm';
import 'dotenv/config';
import { env } from 'process';
import { join } from 'path';

export const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [
    join(__dirname, '/api/**/*.entity{.ts,.js}'),
    join(__dirname, '/auth/**/*.entity{.ts,.js}'),
  ],
  synchronize: false,
  migrationsRun: false,
  logging: false,
  migrations: [join(__dirname, '/../migrations/**/*{.ts,.js}')],
  migrationsTableName: 'migrations',
  metadataTableName: 'orm_metadata',
  bigNumberStrings: false,
  //charset: 'utf8mb4_0900_ai_ci',
  extra: {
    namedPlaceholders: true,
  },
});
