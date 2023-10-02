import { RoomType } from "../../models/room-type";

import { roomTypes } from "./data/room-types";

export interface IRoomType {
  id?: number;
  string: string;
}

export const setupRoomTypes = async () => {
  await roomTypes.forEach(async (type: IRoomType) => {
    const value = await RoomType.findOrCreate({
      where: {
        string: type.string,
      },
    });
  });
};
