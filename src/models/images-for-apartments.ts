import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class ImagesForApartments extends Model {
  public apartmentId: number;
  public imageId: number;
}

ImagesForApartments.init(
  {
    apartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Images_For_Apartments",
  }
);
