import Knex from 'knex';

export const database = Knex({
	client: 'postgresql',
	connection: {
		host: '127.0.0.1',
		port: 5432,
		database: 'postgres',
		user: 'postgres',
		password: 'postgres',
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		directory: './src/aluno/migrations'
	},
});