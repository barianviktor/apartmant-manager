import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseString } from "../interfaces/responses";

export class String extends Model {
  public id!: number;
  public key!: string;
  public string!: string;
  public language!: string;
  public getResponseString = async (): Promise<ResponseString> => {
    return {
      id: this.id,
      key: this.key,
      string: this.string,
    };
  };
}

String.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    string: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
