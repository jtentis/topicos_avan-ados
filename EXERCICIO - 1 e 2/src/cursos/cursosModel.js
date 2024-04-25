const {cursos} = require("./cursosDB");
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

module.exports = {excluirCurso, atualizarCurso, getCursos, adicionarCurso}