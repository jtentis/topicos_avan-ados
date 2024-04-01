const express = require("express");
const alunos = require("./alunos/alunos");
const cursos = require("./cursos/cursos");

const app = express();

app.use(express.json());
app.use("/Alunos", alunos);
app.use("/AcharAluno", alunos);
app.use("/Cursos", cursos);
app.use("/AcharCurso", cursos);

app.listen(3000, () => {
    console.log("Porta 3000");
});