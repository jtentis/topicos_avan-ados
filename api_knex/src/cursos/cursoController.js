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
exports.DeletarCurso = exports.EditarCurso = exports.VisualizarCurso = exports.ListarCursos = exports.CriarCurso = exports.CriarTabelaCurso = void 0;
const cursoModel_1 = require("./cursoModel");
function CriarTabelaCurso(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        yield cursoModel_1.default.CriarTabelaCurso();
        response.status(201).send("Tabela criada com sucesso!");
    });
}
exports.CriarTabelaCurso = CriarTabelaCurso;
function CriarCurso(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nome, codigo } = request.body;
        yield cursoModel_1.default.criar({ nome, codigo });
        response.status(201).send('curso cadastrado com sucesso!');
    });
}
exports.CriarCurso = CriarCurso;
function ListarCursos(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const cursos = yield cursoModel_1.default.listarCursos();
        response.json(cursos);
    });
}
exports.ListarCursos = ListarCursos;
function VisualizarCurso(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = String(request.params.id);
        const curso = yield cursoModel_1.default.visualizarCurso(id);
        if (curso) {
            response.json(curso);
        }
        else {
            response.status(404).send('curso não encontrado');
        }
    });
}
exports.VisualizarCurso = VisualizarCurso;
function EditarCurso(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = String(request.params.id);
        const { nome, codigo } = request.body;
        yield cursoModel_1.default.editarCurso(id, { nome, codigo });
        response.send('curso editado com sucesso!');
    });
}
exports.EditarCurso = EditarCurso;
function DeletarCurso(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = String(request.params.id);
        yield cursoModel_1.default.deletarCurso(id);
        response.send('curso deletado com sucesso');
    });
}
exports.DeletarCurso = DeletarCurso;
//# sourceMappingURL=cursoController.js.map