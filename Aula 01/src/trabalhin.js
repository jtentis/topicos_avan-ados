const express = require("express");
// import express from "express"; // Outra forma de importa uma lib

var xmlparser = require("express-xml-bodyparser");

const app = express(); // Inicia o express
app.use(express.json()); // usa o middleware para informar que nossa api irá retornar em formato JSON

//app.use(xmlparser())

const alunos = [];

app.post("/alunos", (request, response) => {
  // console.log(request.body); // Printa o que foi enviado pelo cliente no body

  alunos.push({
    id: alunos.length,
    nome: request.body.nome,
    matricula: request.body.matricula,
    cursos: request.body.cursos,
  });

  console.log(alunos);

  return response.json(
    { Mensagem: alunos }
  );
});

app.get("/Achar", (request, response) => { // mostrar um aluno

  // const { nome} = request.query;
  // console.log("nome:", nome);

  const {id} = request.query;
  console.log("\nid:", id);

  const acharAluno = alunos.find((valor) => valor.id == id);

  // alunos.nome,
  // alunos.matricula,
  // alunos.cursos;

  console.log(acharAluno);

  return response.json(acharAluno);
});

app.get("/Listar", (request, response) => { //mostrar todos alunos
  return response.json(alunos);
});

app.put("/Atualizar/:id", (request, response) => {
 
  const {id} = request.params; // Recupera o valor de id passado na URL
  const {nomeNovo} = request.query;

  const atualizarAluno = alunos.find((valor) => valor.id == id);

  alunos.nome = request.query.nomeNovo,
  alunos.matricula = request.body.matricula,
  alunos.cursos = request.body.cursos;

  // console.log("request.params.id: " + request.params.id); // formas diferentes de recuperar o valor de id
  // console.log("params.id: " + params.id);
  console.log("\nid: " + id);
  console.log("nome novo: " + nomeNovo);
  console.log(atualizarAluno);

  // id=_.extend(id,request.query)

  return response.json(atualizarAluno);
});

app.listen(4000);
