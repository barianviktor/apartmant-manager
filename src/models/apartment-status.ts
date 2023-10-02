import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseApartmentStatus } from "src/interfaces/responses";

export class ApartmentStatus extends Model {
  id!: number;
  string!: string;
  public getResponseApartmentStatus =
    async (): Promise<ResponseApartmentStatus> => {
      return {
        id: this.id,
        string: this.string,
      };
    };
}

ApartmentStatus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    string: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Apartment_Statuses",
  }
);
