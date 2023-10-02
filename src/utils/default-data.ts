import { setupLanguagesAndStrings } from "./defaults/languages";
import { setupLocations } from "./defaults/locations";
import { setupPropertyTypes } from "./defaults/property-types";
import { setupRolesAndRights } from "./defaults/roles-and-rights";
import { setupRoomTypes } from "./defaults/room-types";
import { setupApartmentStatuses } from "./defaults/status";

export const setupDefaultData = async () => {
  await setupApartmentStatuses();
  await setupRolesAndRights();
  await setupLocations();
  await setupLanguagesAndStrings();
  await setupPropertyTypes();
  await setupRoomTypes();
};
