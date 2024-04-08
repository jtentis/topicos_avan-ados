import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt, DeletedAt,
} from "sequelize-typescript";
  
  @Table({
    timestamps: true,
    tableName: "curso",
    modelName: "CursoModel",
  })

  class CursoModel extends Model{
    @Column({
      primaryKey: true,
      type: DataType.TEXT,
    })
    declare id: string;
  
    @Column({
      type: DataType.TEXT,
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