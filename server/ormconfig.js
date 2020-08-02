require('dotenv/config');

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: false,
    entities: ['./src/**/*.entity.{ts, js}'],
    subscribers: ['./src/**/*.subscriber.{ts, js}'],
    migrations: ['./src/migrations/**/*.{ts, js}'],
  },
];