const express = require("express");
// import express from "express"; // Outra forma de importa uma lib

var xmlparser = require('express-xml-bodyparser');

const app = express(); // Inicia o express
app.use(express.json()); // usa o middleware para informar que nossa api irá retornar em formato JSON

//app.use(xmlparser())

app.post("/aluno", (request, response) => {

    // Exemplo de um serviço de criação de usuário

    // console.log(request.body); // Printa o que foi enviado pelo cliente no body
    const array = [
        request.body
    ]
    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }

    return response.json(
        { "Mensagem": "Aluno cadastrado com sucesso!" } // Retorno da api
    )
})

app.get("/alunos", (request, response) => {
    // Exemplo de um serviço de listagem de usuários

    const query = request.query; // Recupera as informações passadas na url

    const { pagina, count } = request.query; // Desestruturação dos atributos dentro do objeto query que foi enviado

    console.log("request.query.count: " + request.query.count); // Recupera e printa atributo count
    console.log("count: " + count); // Printa o valor da variável count

    return response.json([
        { "nome": "aluno 1" }, 
        { "nome": "aluno 2" }, 
        { "nome": "aluno 3" }, // Exemplo de retorno do serviço
    ])
})

app.put("/aluno/:id", (request, response) => {
    // Exemplo de um serviço de atualização de usuário

    const params = request.params; 
    const { id } = request.params; // Recupera o valor de id passado na URL

    console.log("request.params.id: " + request.params.id); // formas diferentes de recuperar o valor de id
    console.log("params.id: " + params.id);
    console.log("id: " + id);

    return response.json(
        { "nome": "aluno 3" }
    )
})

app.patch("/aluno/:id", (request, response) => {
    // Exemplo de um serviço de atualização de usuário

    return response.json(
        { "nome": "aluno 2" }
    )
})

app.delete("/aluno/:id", (request, response) => {
    // Exemplo de um serviço de delete de usuário

    return response.json(
        { "message": "Aluno 4 deletado" }
    )
})

app.listen(3000); // Nossa API irá ser executada na porta 3000 -> localhost:3000