import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class County extends Model {
  public id!: number;
  public county!: string;
  public countryId!: number;
}

County.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    county: {
      type: DataTypes.STRING,
    },
    countryId: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, tableName: "County" }
);
