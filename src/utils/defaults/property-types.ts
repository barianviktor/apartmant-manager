import { PropertyType } from "../../models/property-type";

import { propertyTypes } from "./data/property-types";

export interface IPropertyType {
  id?: number;
  type: string;
  typeLabel: string;
}

export const setupPropertyTypes = async () => {
  await propertyTypes.forEach(async (type: IPropertyType) => {
    const value = await PropertyType.findOrCreate({
      where: {
        type: type.type,
      },
      defaults: {
        typeLabel: type.typeLabel,
      },
    });
  });
};
