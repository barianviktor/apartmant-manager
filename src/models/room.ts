import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseRoom } from "../interfaces/responses";
import { RoomType } from "./room-type";

export class Room extends Model {
  public id!: number;
  public type!: number;
  public apartmentId!: number;
  public area!: number;
  public getResponseRoom = async (): Promise<ResponseRoom> => {
    const roomType = await RoomType.findOne({
      where: {
        id: this.type,
      },
    });
    const responseRoomType = await roomType.getResponseRoomType();
    return {
      id: this.id,
      type: responseRoomType,
      area: this.area,
    };
  };
}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    apartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
  }
);
