import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt, DeletedAt,
} from "sequelize-typescript";
import {v4 as uuidv4} from "uuid";
import {alunoInterface} from "../../interfaces/alunoInterface";
  
  @Table({
    timestamps: true,
    tableName: "aluno",
    modelName: "AlunoModel",
  })
  class AlunoModel extends Model{
    @Column({
      primaryKey: true,
      type: DataType.TEXT,
    })
    declare id: string;
  
    @Column({
      type: DataType.STRING,
    })
    declare nome: string;

    @Column({
        type: DataType.STRING,
      })
      declare matricula: string;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;

    @DeletedAt
    declare deleted_at: Date;
  }
  
  export default AlunoModel;