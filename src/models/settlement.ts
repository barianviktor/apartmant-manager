import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseCounty, ResponseSettlement } from "src/interfaces/responses";
import { County } from "./county";

export class Settlement extends Model {
  public id!: number;
  public zip!: string;
  public settlement!: string;
  public countyId!: number;
  public getResponseSettlement = async (): Promise<ResponseSettlement> => {
    const county = await County.findOne({
      where: {
        id: this.countyId,
      },
    });
    const responseCounty: ResponseCounty = await county.getResponseCounty();
    return {
      id: this.id,
      zip: this.zip,
      settlement: this.settlement,
      county: responseCounty,
    };
  };
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
