const express = require("express");
const alunos = require("./alunos/alunosController");
const cursos = require("./cursos/cursosController");

const app = express();
app.use(express.json());

app.use("/", alunos);
app.use("/", cursos);

app.listen(3000, () => {
    console.log("Porta 3000");
});