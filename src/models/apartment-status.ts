import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseApartmentStatus } from "src/interfaces/responses";

export class ApartmentStatus extends Model {
  id!: number;
  status!: string;
  statusLabel!: string;
  public getResponseApartmentStatus =
    async (): Promise<ResponseApartmentStatus> => {
      return {
        id: this.id,
        status: this.status,
        statusLabel: this.statusLabel,
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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statusLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
