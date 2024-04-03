"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class Aluno {
    criar({ nome, matricula }) {
        console.log('entoru 2');
        (0, database_1.database)('aluno').insert({
            nome: nome,
            matricula: matricula
        });
    }
}
exports.default = new Aluno();
