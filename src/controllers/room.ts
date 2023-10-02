import { HttpStatusCodes } from "../utils/http-status-codes";
import { Request, Response } from "express";
import { RoomsRequestBody } from "../interfaces/requests";
import { Room } from "src/models/room";

export const createRooms = async (req: Request, res: Response) => {
  try {
    const roomsData: RoomsRequestBody = req.body;
    for (let i = 0; i < roomsData.rooms.length; i++) {
      const room = await Room.create({
        type: roomsData.rooms[i].type,
        apartmentId: roomsData.rooms[i].apartmentId,
        area: roomsData[i].area,
      });
    }
    res.status(HttpStatusCodes.CREATED).send();
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
