"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./aluno/controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/aluno', controller_1.CriarAluno);
app.get('/aluno', controller_1.ListarAluno);
app.listen(3000);
