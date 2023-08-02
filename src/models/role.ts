import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Role extends Model {
  public id: number;
  public roleName: string;
  public description: string;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);
