const { ulid } = require("ulid");

// Simulando um banco de dados em memória
const alunos = [{
    "id": ulid(),
    "nome": "joaozinhooo",
    "matricula": "191919",
    "cursos": ["tcc", "ta vindo"]
}
]

module.exports = {alunos};
