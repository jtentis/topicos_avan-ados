"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const db_1 = require("../db");
const uuid_1 = require("uuid");
class Aluno {
    CriarTabelaAluno() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.knex.schema.createTable('aluno', (table) => {
                table.uuid('id').primary();
                table.string('nome');
                table.string('curso');
            });
        });
    }
    criar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome, curso }) {
            yield (0, db_1.knex)('aluno').insert({
                id: (0, uuid_1.v4)(),
                nome: nome,
                curso: curso
            });
        });
    }
    listarSemCursos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.knex.select().from('aluno');
        });
    }
    listaUmAlunoPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.knex.select().from('aluno').where({ id: id });
        });
    }
    editarAluno(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { nome, curso }) {
            return (0, db_1.knex)('aluno').where({ id: id }).update({ nome, curso });
        });
    }
    deletarAluno(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('chocolate');
            console.log(id);
            return (0, db_1.knex)('aluno').where({ id: id }).del();
        });
    }
}
exports.default = new Aluno();
//# sourceMappingURL=alunoModel.js.map