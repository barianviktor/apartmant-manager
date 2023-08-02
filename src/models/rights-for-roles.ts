import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class RightsForRoles extends Model {
  public RightId: number;
  public RoleId: number;
}

RightsForRoles.init(
  {
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    RightId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Rights_For_Roles",
  }
);
