import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseLanguage } from "src/interfaces/responses";

export class Language extends Model {
  public key!: string;
  public language!: string;
  public string!: string;

  public getResponseLanguage = async (): Promise<ResponseLanguage> => {
    return {
      key: this.key,
      language: this.language,
      string: this.string,
    };
  };
}

Language.init(
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    string: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
