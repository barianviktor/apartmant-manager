import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseCountry } from "src/interfaces/responses";

export class Country extends Model {
  public id!: number;
  public countryCode!: string;
  public country!: string;
  public countryLabel!: string;
  public getResponseCountry = async (): Promise<ResponseCountry> => {
    return {
      id: this.id,
      countryCode: this.countryCode,
      country: this.country,
      countryLabel: this.countryLabel,
    };
  };
}

Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    countryLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
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
