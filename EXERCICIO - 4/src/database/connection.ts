import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: 'postgres',
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: 15432,
  models: [__dirname + "/models"],
});

export default sequelize;