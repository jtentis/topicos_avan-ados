const express = require("express");
const db = require('../db');
const { ulid } = require("ulid");

const app = express.Router();

app.post("/", (request, response) => {
    const novoAluno = {
        "id": ulid(),
        "nome": request.body.nome,
        "matricula": request.body.matricula,
        "cursos": request.body.cursos,
    };

    db.adicionarAluno(novoAluno);
    return response.json(novoAluno);
});

// listar todos
app.get("/", (request, response) => {
    const alunos = db.getAlunos();
    return response.json(alunos);
});

// listar especifico
app.get("/:id", (request, response) => {
    const id = request.params.id;
    // console.log("\nid:", id);

    const alunos = db.getAlunos();
    const acharAluno = alunos.find((valor) => valor.id == id);

    console.log(acharAluno);

    if (acharAluno) {
        return response.status(200).json({"message":"aluno encontrado com sucesso", "status":"200", data:{acharAluno}});
    } else {
        return response.status(404).json({ "error": "Aluno não encontrado", "status":"404" });
    }
})

app.patch("/:id", (request, response) => {
    const id = request.params.id;
    const alunoAtualizado = {
        "nome": request.body.nome,
        "matricula": request.body.matricula,
        "cursos": request.body.cursos,
    };
    console.log(id)
    const aluno = db.atualizarAluno(id, alunoAtualizado);
    console.log(aluno)
    if (aluno) {
        return response.status(200).json({"message":"aluno atualizado com sucesso", "status":"200", data:{aluno}});
    } else {
        return response.status(404).json({ "error": "aluno não encontrado", "status":"404"});
    }
});

app.delete("/:id", (request, response) => {
    const id = request.params.id;
    const alunoExcluido = db.excluirAluno(id);

    if (alunoExcluido) {
        return response.status(200).json({"message":"aluno deletado com sucesso", "status":"200", data:{alunoExcluido}});
    } else {
        return response.status(404).json({ "error": "Aluno não encontrado", "status":"404" });
    }
});

module.exports = app;
