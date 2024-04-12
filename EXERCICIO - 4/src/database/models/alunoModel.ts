import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt, BelongsToMany, HasMany,
} from "sequelize-typescript";
import {Identifier} from "sequelize";
import CursoModel from "./cursoModel";
import Aluno_cursoModel from "./aluno_cursoModel";
  
  @Table({
    timestamps: true,
    tableName: "aluno",
    modelName: "AlunoModel",
  })

  class AlunoModel extends Model{

    @BelongsToMany(() => CursoModel, () => Aluno_cursoModel)
    declare cursos: CursoModel[];

    // @HasMany(() => CursoModel)
    // declare aluno_cursos: cursoModel[];

    @Column({
      primaryKey: true,
      type: DataType.TEXT,
    })
    declare id: Identifier;
  
    @Column({
      type: DataType.TEXT,
    })
    declare nome: string;

    @Column({
        type: DataType.STRING,
      })
      declare matricula: string;

      @Column({
          type: DataType.JSON,
      })
      declare curso: string;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;

    @DeletedAt
    declare deleted_at: Date;
  }
  
  export default AlunoModel;