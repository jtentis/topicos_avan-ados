"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonConfig = {
    client: 'postgresql',
    connection: {
        host: '127.0.0.1',
        database: 'postgres',
        user: 'postgres',
        password: 'postgres',
    },
    //debug: ['development', 'test'].includes(process.env.NODE_ENV),
    pool: {
        min: 2,
        max: 10,
    },
    /*migrations: {
        tableName: '_migrations',
        loadExtensions: ['.js'],
        directory: './build/db/migrations',
    },
    seeds: {
        directory: './build/db/seeds',
        loadExtensions: ['.js'],
    },*/
};
module.exports = {
    development: commonConfig,
    test: commonConfig,
    staging: commonConfig,
    production: commonConfig,
};
