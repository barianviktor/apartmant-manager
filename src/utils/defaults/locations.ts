import { Settlement } from "../../models/settlement";
import { County } from "../../models/county";
import { Country } from "../../models/country";
import { counties } from "./data/counties";
import { countries } from "./data/countries";
import { settlements } from "./data/settlements";
import { Op } from "sequelize";

export interface ICountry {
  id?: number;
  country_code: string;
  country: string;
  country_label: string;
}

export interface ICounty {
  id?: number;
  county: string;
  countryId: number;
}

export interface ISettlement {
  zip: number;
  settlement: string;
  countyId: number;
}

export const setupLocations = async () => {
  await countries.forEach(async (country: ICountry) => {
    const value = await Country.findOrCreate({
      where: {
        countryCode: country.country_code,
        country: country.country,
        countryLabel: country.country_label,
      },
    });
  });

  await counties.forEach(async (county: ICounty) => {
    const value = await County.findOrCreate({
      where: {
        county: county.county,
        countryId: county.countryId,
      },
    });
  });

  await settlements.forEach(async (settlement: ISettlement) => {
    const value = await Settlement.findOrCreate({
      where: {
        zip: `${settlement.zip}`,
        settlement: settlement.settlement,
        countyId: settlement.countyId,
      },
    });
  });
};
