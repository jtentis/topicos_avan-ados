import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: 'apisequelize',
  dialect: 'postgres',
  username: 'root',
  password: 'pass',
  host: 'db',
  port: 5432,
  models: [__dirname + "/models"],
});

(async () => {
  try {
    await sequelize.sync({ force: true }); // This will create the table if it doesn't exist
    console.log('Tabela sincronizada');
    // Now you can use your models for CRUD operations
  } catch (error) {
    console.error('Erro sincronizar tabela', error);
  }
})();

export default sequelize;