import Knex from 'knex';
export const knexDB = Knex({
  client: "pg",
  connection: {
    host: 'db',
		port : 5432,
    user: "root",
    password: "pass",
    database: "apiknex",
  },
  pool: {
    min: 0,
    max: 7
  },
  migrations: {
    directory: './src/aluno/migrations'
  },
});
