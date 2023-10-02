import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseCountry } from "src/interfaces/responses";

export class Country extends Model {
  public id!: string;
  public string!: string;
  public getResponseCountry = async (): Promise<ResponseCountry> => {
    return {
      id: this.id,
      string: this.string,
    };
  };
}

Country.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    string: {
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
