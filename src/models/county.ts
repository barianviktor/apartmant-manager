import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseCountry, ResponseCounty } from "src/interfaces/responses";
import { Country } from "./country";

export class County extends Model {
  public id!: number;
  public county!: string;
  public countryId!: number;
  public getResponseCounty = async (): Promise<ResponseCounty> => {
    const country = await Country.findOne({
      where: {
        id: this.countryId,
      },
    });
    const responseCountry: ResponseCountry = await country.getResponseCountry();
    return {
      id: this.id,
      county: this.county,
      country: responseCountry,
    };
  };
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
