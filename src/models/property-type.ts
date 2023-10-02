import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponsePropertyType } from "../interfaces/responses";

export class PropertyType extends Model {
  public id!: number;
  public string!: string;
  public getResponsePropertyType = async (): Promise<ResponsePropertyType> => {
    return {
      id: this.id,
      string: this.string,
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
    string: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Property_Types",
  }
);
