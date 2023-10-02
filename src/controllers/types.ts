import { HttpStatusCodes } from "../utils/http-status-codes";
import {
  ResponsePropertyType,
  ResponseRoomType,
} from "../interfaces/responses";
import { PropertyType } from "../models/property-type";
import { Request, Response } from "express";
import { RoomType } from "../models/room-type";

export const getPropertyTypes = async (req: Request, res: Response) => {
  const propertiesDB = await PropertyType.findAll();
  if (propertiesDB) {
    const properties: ResponsePropertyType[] = [];
    await propertiesDB.map(async (property: PropertyType) => {
      const responsePropertyType = await property.getResponsePropertyType();
      properties.push(responsePropertyType);
    });
    res.status(HttpStatusCodes.OK).send(properties);
  } else {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};

export const getRoomTypes = async (req: Request, res: Response) => {
  const roomsDB = await RoomType.findAll();
  if (roomsDB) {
    const rooms: ResponseRoomType[] = [];
    await roomsDB.map(async (room: RoomType) => {
      const responseRoomType = await room.getResponseRoomType();
      rooms.push(responseRoomType);
    });
    res.status(HttpStatusCodes.OK).send(rooms);
  } else {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
