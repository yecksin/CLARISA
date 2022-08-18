import { ConnectionOptions, DataSource, DataSourceOptions } from 'typeorm';
const dotenv = require('dotenv');
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [__dirname + '/src/api/**/*.entity{.ts,.js}', __dirname + '/src/auth/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    migrations: [__dirname + './migrations/*{.ts,.js}'],
    migrationsTableName:'migrations',
   /* cli: {
        migrationsDir: './migrations',
    }*/
};

//export = dataSourceOptions;