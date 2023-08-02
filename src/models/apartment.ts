import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Apartment extends Model {
  public id!: number;
}

Apartment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

/* import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Apartment = sequelize.define("Apartment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}); */
