"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const knex_1 = __importDefault(require("knex"));
exports.database = (0, knex_1.default)({
    client: 'postgresql',
    connection: {
        host: '127.0.0.1',
        port: 15432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres',
    },
    pool: {
        min: 2,
        max: 10,
    },
});
