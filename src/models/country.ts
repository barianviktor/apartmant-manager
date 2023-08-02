import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Country extends Model {
  public id!: number;
  public countryCode!: string;
  public country!: string;
}

Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /*  id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
  },
  { sequelize, tableName: "Country" }
);

/* import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Country = sequelize.define("Country", {
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}); */
