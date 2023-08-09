import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseRoomType } from "../interfaces/responses";

export class RoomType extends Model {
  public id!: number;
  public type!: string;
  public typeLabel!: string;
  public getResponseRoom = async (): Promise<ResponseRoomType> => {
    return {
      id: this.id,
      type: this.type,
      typeLabel: this.typeLabel,
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Room_Types",
  }
);
