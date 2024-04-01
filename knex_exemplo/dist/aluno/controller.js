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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarAluno = exports.CriarAluno = void 0;
const alunoModel_1 = __importDefault(require("./alunoModel"));
function CriarAluno(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        yield alunoModel_1.default.criar({
            nome: 'Eduardo',
            matricula: '123'
        });
    });
}
exports.CriarAluno = CriarAluno;
function ListarAluno(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let alunos = yield alunoModel_1.default.listar();
        console.log(alunos);
    });
}
exports.ListarAluno = ListarAluno;
