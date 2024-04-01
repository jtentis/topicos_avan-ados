import { database } from '../database';
import { AlunoInterface } from '../aluno/alunoInterface';

class Aluno {

    async criar({nome, matricula}: AlunoInterface){
        await database('aluno').insert({
            nome: nome,
            matricula: matricula
        });
    }

    async listarSemCursos(){
        return await database.select().from('aluno');
    }
    async listaUmAlunoPorId(alunoId: number){
        return await database.select().from('aluno').where({id: alunoId});
    }

    async editarAluno(alunoId: number, { nome, matricula }: AlunoInterface) {
        return database('aluno').where({ id: alunoId }).update({ nome, matricula });
    }
    
    async deletarAluno(alunoId: number) {
        console.log('chocolate')
        console.log(alunoId)
        return database('aluno').where({ id: alunoId }).del();
    }
}

export default new Aluno();
