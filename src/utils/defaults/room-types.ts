import { RoomType } from "../../models/room-type";

import { roomTypes } from "./data/room-types";

export interface IRoomType {
  id?: number;
  type: string;
  typeLabel: string;
}

export const setupRoomTypes = async () => {
  await roomTypes.forEach(async (type: IRoomType) => {
    const value = await RoomType.findOrCreate({
      where: {
        type: type.type,
      },
      defaults: {
        typeLabel: type.typeLabel,
      },
    });
  });
};
