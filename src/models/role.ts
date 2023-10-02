import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Role extends Model {
  public id: number;
  public string: string;
  public description_string: string;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    string: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description_string: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);
