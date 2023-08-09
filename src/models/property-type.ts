import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponsePropertyType } from "../interfaces/responses";

export class PropertyType extends Model {
  public id!: number;
  public type!: string;
  public typeLabel!: string;
  public getResponsePropertyType = async (): Promise<ResponsePropertyType> => {
    return {
      id: this.id,
      type: this.type,
      typeLabel: this.typeLabel,
    };
  };
}

PropertyType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Property_Types",
  }
);
