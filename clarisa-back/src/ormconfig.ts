import { dataSourceOptions } from 'data-source-options';
import { DataSource } from 'typeorm';
import { AuditableEntity } from './shared/entities/extends/auditable-entity.entity';
const dotenv = require('dotenv');
dotenv.config();

export const dataSource: DataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [__dirname + 'api/**/*.entity{.ts,.js}', __dirname + 'auth/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    migrationsTableName:'migrations',
   /* cli: {
        migrationsDir: './migrations',
    }*/
});