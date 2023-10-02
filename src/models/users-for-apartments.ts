import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class UsersForApartments extends Model {
  public apartmentId: number;
  public userId: number;
}

UsersForApartments.init(
  {
    apartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Users_For_Apartments",
  }
);
