import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
} from "sequelize-typescript";
import {Identifier} from "sequelize";
import CursoModel from "./cursoModel";
import AlunoModel from "./alunoModel";

@Table({
    timestamps: true,
    tableName: "aluno_curso",
    modelName: "Aluno_cursoModel",
})

class Aluno_cursoModel extends Model{

    @ForeignKey(() => AlunoModel)
    @Column({
        type: DataType.TEXT,
    })
    declare id_aluno: Identifier;

    @ForeignKey(() => CursoModel)
    @Column({
        type: DataType.TEXT,
    })
    declare id_curso: Identifier;
}
export default Aluno_cursoModel;