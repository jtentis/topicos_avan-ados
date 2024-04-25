const {ulid} = require("ulid");

const cursos = [{
    "idCurso": ulid(),
    "cursos": ["tcc", "ta vindo"]
}]

module.exports = {cursos};