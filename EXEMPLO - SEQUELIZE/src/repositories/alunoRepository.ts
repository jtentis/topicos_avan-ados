import Aluno from "../database/models/Aluno";

export default class AlunoRepository {
    
    getAll(options: Record<string, any> = {}): Promise<Array<Aluno>> {
        return Aluno.findAll();
    }

}