import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: 'apisequelize',
  dialect: 'postgres',
  username: 'root',
  password: 'pass',
  host: 'db',
  port: 5432,
  models: [__dirname + "/models"],
  timezone: '-03:00',
  dialectOptions: {
      useUTC: false,
      dateFirst: 1
  }
});

(async () => {
  try {
    await sequelize.sync();
    console.log('Tabela sincronizada');

  } catch (error) {
    console.error('Erro sincronizar tabela', error);
  }
})();

export default sequelize;