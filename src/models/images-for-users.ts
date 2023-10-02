import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class ImagesForUsers extends Model {
  public userId: number;
  public imageId: number;
}

ImagesForUsers.init(
  {
    imageId: {
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
    modelName: "Images_For_Users",
  }
);
