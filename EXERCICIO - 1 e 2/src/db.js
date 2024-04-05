const { ulid } = require("ulid");

// Simulando um banco de dados em memória
const alunos = [{
        "id": ulid(),
        "nome": "joaozinhooo",
        "matricula": "191919",
        "cursos": ["tcc", "ta vindo"]
    }
]

function getAlunos() {
    console.log(alunos);
    return alunos;
}

function adicionarAluno(aluno) {
    alunos.push(aluno);
    console.log(aluno);
}

function atualizarAluno(id, novoAluno) {
    console.log(alunos)
    console.log(id)
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
        alunos[index] = { ...alunos[index], ...novoAluno };
        return alunos[index];
    }
    return null;
}

function excluirAluno(id) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
        const alunoExcluido = alunos.splice(index, 1)[0];
        return alunoExcluido;
    }
    return null;
}

// ABA DOS CURSOS
const cursos = [{
    "idCurso": ulid(),
    "cursos": ["tcc", "ta vindo"]
}]

function getCursos() {
console.log(cursos);
return cursos;
}

function adicionarCurso(curso) {
cursos.push(curso);
console.log(curso);
}

function atualizarCurso(idCurso, novoCurso) {
console.log(cursos)
console.log(idCurso)
const index = cursos.findIndex(curso => curso.idCurso === idCurso);
if (index !== -1) {
    cursos[index] = { ...cursos[index], ...novoCurso };
    return cursos[index];
}
return null;
}

function excluirCurso(idCurso) {
const index = cursos.findIndex(curso => curso.idCurso === idCurso);
if (index !== -1) {
    const cursoExcluido = cursos.splice(index, 1)[0];
    return cursoExcluido;
}
return null;
}

module.exports = { 
getCursos, adicionarCurso, atualizarCurso, excluirCurso, getAlunos, adicionarAluno, atualizarAluno, excluirAluno
};