import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseApartment, ResponseRoom } from "src/interfaces/responses";
import { Settlement } from "./settlement";
import { PropertyType } from "./property-type";
import { ApartmentStatus } from "./apartment-status";
import { Room } from "./room";

export class Apartment extends Model {
  public id!: number;
  public name!: string;
  public settlementId!: number;
  public address!: string;
  public area!: number;
  public type!: number;
  public status!: number;
  public creator!: number;

  public getResponseApartment = async (): Promise<ResponseApartment> => {
    const settlement = await Settlement.findOne({
      where: {
        id: this.settlementId,
      },
    });
    const responseSettlement = await settlement.getResponseSettlement();

    const propertyType = await PropertyType.findOne({
      where: {
        id: this.type,
      },
    });
    const responsePropertyType = await propertyType.getResponsePropertyType();

    const status = await ApartmentStatus.findOne({
      where: {
        id: this.status,
      },
    });
    const responseStatus = await status.getResponseApartmentStatus();

    const rooms = await Room.findAll({
      where: {
        apartmentId: this.id,
      },
    });
    const responseRooms: ResponseRoom[] = [];
    await rooms.forEach(async (room: Room) => {
      const responseRoom = await room.getResponseRoom();
      responseRooms.push(responseRoom);
    });

    return {
      id: this.id,
      name: this.name,
      settlement: responseSettlement,
      address: this.address,
      area: this.area,
      type: responsePropertyType,
      status: responseStatus,
      rooms: responseRooms,
    };
  };
}

Apartment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    settlementId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

/* import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Apartment = sequelize.define("Apartment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}); */
