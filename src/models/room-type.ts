import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseRoomType } from "../interfaces/responses";

export class RoomType extends Model {
  public id!: number;
  public string!: string;
  public getResponseRoomType = async (): Promise<ResponseRoomType> => {
    return {
      id: this.id,
      string: this.string,
    };
  };
}

RoomType.init(
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
    tableName: "Room_Types",
  }
);
