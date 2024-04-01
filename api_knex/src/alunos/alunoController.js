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
exports.DeletarAluno = exports.EditarAluno = exports.VisualizarAluno = exports.ListarAlunosSemCursos = exports.CriarAluno = exports.CriarTabelaAluno = void 0;
const alunoModel_1 = require("./alunoModel");
function CriarTabelaAluno(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        yield alunoModel_1.default.CriarTabelaAluno();
        response.status(201).send("Tabela criada com sucesso!");
    });
}
exports.CriarTabelaAluno = CriarTabelaAluno;
function CriarAluno(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nome, curso } = request.body;
        yield alunoModel_1.default.criar({ nome, curso });
        response.status(201).send("Aluno cadastrado com sucesso!");
    });
}
exports.CriarAluno = CriarAluno;
function ListarAlunosSemCursos(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const alunos = yield alunoModel_1.default.listarSemCursos();
        response.json(alunos);
    });
}
exports.ListarAlunosSemCursos = ListarAlunosSemCursos;
function VisualizarAluno(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = String(request.params.id);
        const aluno = yield alunoModel_1.default.listaUmAlunoPorId(id);
        if (aluno) {
            response.json(aluno);
        }
        else {
            response.status(404).send("Aluno não encontrado");
        }
    });
}
exports.VisualizarAluno = VisualizarAluno;
function EditarAluno(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = String(request.params.id);
        const { nome, curso } = request.body;
        yield alunoModel_1.default.editarAluno(id, { nome, curso });
        response.send("Aluno editado com sucesso!");
    });
}
exports.EditarAluno = EditarAluno;
function DeletarAluno(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = String(request.params.id);
        console.log(id);
        yield alunoModel_1.default.deletarAluno(id);
        response.send("Aluno deletado com sucesso!");
    });
}
exports.DeletarAluno = DeletarAluno;
//# sourceMappingURL=alunoController.js.map