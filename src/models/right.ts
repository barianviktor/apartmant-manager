import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Right extends Model {
  public id: number;
  public rightName: string;
  public description: string;
}
Right.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rightName: {
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
