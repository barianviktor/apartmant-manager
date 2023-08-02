import { setupLocations } from "./defaults/locations";
import { setupRolesAndRights } from "./defaults/roles-and-rights";

export const setupDefaultData = async () => {
  await setupRolesAndRights();
  await setupLocations();
};
