import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt, DeletedAt, BelongsToMany, HasMany, ForeignKey,
} from "sequelize-typescript";
import Aluno_cursoModel from "./aluno_cursoModel";
import AlunoModel from "./alunoModel";
  
  @Table({
    timestamps: true,
    tableName: "curso",
    modelName: "CursoModel",
  })

  class CursoModel extends Model{

    @BelongsToMany(() => AlunoModel, () => Aluno_cursoModel)
    declare alunos: AlunoModel[];

    @Column({
      primaryKey: true,
      type: DataType.TEXT,
    })
    declare id: string;

    // @ForeignKey(() => AlunoModel)
    // @Column({
    //   type: DataType.TEXT,
    // })
    // declare id_fk: Identifier;
  
    @Column({
      type: DataType.JSON,
    })
    declare nome: string;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;

    @DeletedAt
    declare deleted_at: Date;
  }
  export default CursoModel;