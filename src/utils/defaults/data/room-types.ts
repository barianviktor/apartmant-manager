import { IPropertyType } from "../property-types";
import { IRoomType } from "../room-types";

export const roomTypes: IRoomType[] = [
  {
    type: "Kitchen",
    typeLabel: "ROOM_TYPE_KITCHEN",
  },
  {
    type: "Bedroom",
    typeLabel: "ROOM_TYPE_BEDROOM",
  },
  {
    type: "Living room",
    typeLabel: "ROOM_TYPE_LIVING_ROOM",
  },
  {
    type: "Dining room",
    typeLabel: "ROOM_TYPE_DINING_ROOM",
  },
  {
    type: "Bathroom",
    typeLabel: "ROOM_TYPE_BATHROOM",
  },
  {
    type: "Toilet",
    typeLabel: "ROOM_TYPE_TOILET",
  },
  {
    type: "Bathroom + Toilet",
    typeLabel: "ROOM_TYPE_BATHROOM_AND_TOILET",
  },
  {
    type: "Laundry room",
    typeLabel: "ROOM_TYPE_LAUNDRY_ROOM",
  },
];
