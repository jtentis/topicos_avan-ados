const {alunos} = require("./alunosDB");
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

module.exports = {excluirAluno, atualizarAluno, adicionarAluno, getAlunos}