import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseUser } from "src/interfaces/responses";

export class User extends Model {
  public id: number;
  public username!: string;
  public firstName!: string;
  public lastName!: string;
  public password!: string;
  public validated!: boolean;
  public getResponseData = (): ResponseUser => {
    return {
      id: this.id,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);
