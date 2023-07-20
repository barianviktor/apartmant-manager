import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "./user";

export class Token extends Model {
  public id: number;
  public token: string;
  public userId: number;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);
