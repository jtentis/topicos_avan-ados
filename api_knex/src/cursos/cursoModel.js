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
class Curso {
    CriarTabelaCurso() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.knex.schema.createTable('curso', (table) => {
                table.uuid('id').primary();
                table.string('curso');
                table.string('codigo');
            });
        });
    }
    criar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome, codigo }) {
            yield (0, db_1.knex)('curso').insert({
                id: (0, uuid_1.v4)(),
                nome: nome,
                codigo: codigo
            });
        });
    }
    listarCursos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.knex.select().from('curso');
        });
    }
    visualizarCurso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.knex.select().from('curso').where({ id: id }).first();
        });
    }
    editarCurso(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { nome, codigo }) {
            return yield (0, db_1.knex)('curso').where({ id: id }).update({ nome, codigo });
        });
    }
    deletarCurso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, db_1.knex)('curso').where({ id: id }).del();
        });
    }
}
exports.default = new Curso();
//# sourceMappingURL=cursoModel.js.map