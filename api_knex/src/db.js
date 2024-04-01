import Knex from "knex";
export const knex = Knex({
  client: "pg",
  connection: {
    host: 'db',
		port : 5432,
    user: "root",
    password: "pass",
    database: "apiknex",
  },
  pool: { min: 0, max: 7 },
});
