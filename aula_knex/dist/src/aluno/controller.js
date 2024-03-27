"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarAluno = void 0;
const alunoService_1 = __importDefault(require("./alunoService"));
function CriarAluno(request, response) {
    console.log('entrou');
    alunoService_1.default.criar({
        nome: 'Diego',
        matricula: '123'
    });
}
exports.CriarAluno = CriarAluno;
