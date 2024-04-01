const express = require("express");
const db = require('../db');
const { ulid } = require("ulid");

const app = express.Router();

app.post("/", (request, response) => {
    const novoCurso = {
        "idCurso": ulid(),
        "cursos": request.body.cursos,
    };

    db.adicionarCurso(novoCurso);
    return response.json(novoCurso);
});

//listar todos
app.get("/", (request, response) => {
    const cursos = db.getCursos();
    return response.json(cursos);
});

// listar especifico
app.get("/:idCurso", (request, response) => {
    const idCurso = request.params.idCurso;
    // console.log("\nidCurso:", idCurso);

    const cursos = db.getCursos();
    const acharCurso = cursos.find((valor) => valor.idCurso == idCurso);

    console.log(acharCurso);

    if (acharCurso) {
        return response.status(200).json({"message":"Curso encontrado com sucesso", "status":"200", data:{acharCurso}});
    } else {
        return response.status(404).json({ "error": "Curso não encontrado", "status":"404" });
    }
})

app.patch("/:idCurso", (request, response) => {
    const idCurso = request.params.idCurso;
    const cursoAtualizado = {
        "cursos": ["tenho medo", "de tcc"]
    };
    console.log(idCurso)
    const curso = db.atualizarCurso(idCurso, cursoAtualizado);
    console.log(curso)
    if (curso) {
        return response.status(200).json({"message":"curso atualizado com sucesso", "status":"200", data:{curso}});
    } else {
        return response.status(404).json({ "error": "Curso não encontrado", "status":"404"});
    }
});

app.delete("/:idCurso", (request, response) => {
    const idCurso = request.params.idCurso;
    const cursoExcluido = db.excluirCurso(idCurso);

    if (cursoExcluido) {
        return response.status(200).json({"message":"curso deletado com sucesso", "status":"200", data:{cursoExcluido}});
    } else {
        return response.status(404).json({ "error": "Curso não encontrado", "status":"404"});
    }
});

module.exports = app;
