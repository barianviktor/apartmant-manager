import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Language extends Model {
  public key!: string;
  public language!: string;
}

Language.init(
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
