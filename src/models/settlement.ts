import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Settlement extends Model {
  public id!: number;
  public zip!: string;
  public settlement!: string;
  public countyId!: number;
}

Settlement.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    settlement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
