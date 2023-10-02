import { ApartmentStatus } from "../../models/apartment-status";
import { apartmentStatus } from "./data/apartment-status";

export interface IApartmentStatus {
  id?: number;
  string: string;
}

export const setupApartmentStatuses = async () => {
  await apartmentStatus.forEach(async (status: IApartmentStatus) => {
    const value = await ApartmentStatus.findOrCreate({
      where: {
        string: status.string,
      },
    });
  });
};
