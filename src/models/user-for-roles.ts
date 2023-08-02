import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class UsersForRoles extends Model {
  public UserId: number;
  public RoleId: number;
}

UsersForRoles.init(
  {
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Users_For_Roles",
  }
);
