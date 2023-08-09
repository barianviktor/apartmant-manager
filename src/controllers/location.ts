import { HttpStatusCodes } from "../utils/http-status-codes";
import { Request, Response } from "express";
import fs from "fs";
import { ICounty } from "../utils/defaults/locations";
import { Country } from "../models/country";
import {
  ResponseCountry,
  ResponseCounty,
  ResponseSettlement,
} from "../interfaces/responses";
import { County } from "../models/county";
import { Settlement } from "../models/settlement";
import { Op } from "sequelize";
/* export const tests = async (req: Request, res: Response) => {
  interface fileRow {
    id: number;
    ksh: number;
    zip: number;
    megyeCode: number;
    megye: string;
    settlement: string;
  }
  interface Settlement {
    zip: string;
    countyId: number;
    settlement: string;
  }

  const file = await fs.readFileSync("location.txt", "utf-8");
  const rows = file.split("\n"); // Split the content into rows
  const megyek: ICounty[] = [];
  const settlements: Settlement[] = [];

  for (let i = 1; i < rows.length; i++) {
    const [id, ksh, zip, megyeCode, megye, settlement] = rows[i].split("\t");

    const m = megyek.find((value: ICounty) => value.county == megye);
    if (!m) {
      const megyeObj: ICounty = {
        countryId: 1,
        id: parseInt(megyeCode) + 1,
        county: megye,
      };
      megyek.push(megyeObj);
    }
    settlements.push({
      zip: zip,
      settlement: settlement.replace("\r", ""),
      countyId: parseInt(megyeCode) + 1,
    });
  }
  megyek.sort((a: ICounty, b: ICounty) => {
    return a.id > b.id ? 1 : -1;
  });
  res.send(JSON.stringify(settlements));
}; */

export const getCountries = async (req: Request, res: Response) => {
  const countriesDB = await Country.findAll();

  if (countriesDB) {
    const countries: ResponseCountry[] = [];
    await countriesDB.map(async (country: Country) => {
      const responseCountry = await country.getResponseCountry();
      countries.push(responseCountry);
    });
    res.status(HttpStatusCodes.OK).send(countries);
  } else {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};

export const getCounties = async (req: Request, res: Response) => {
  const countiesDB = await County.findAll();

  if (countiesDB) {
    const counties: ResponseCounty[] = [];

    for (let i = 0; i < countiesDB.length; i++) {
      const county = countiesDB[i];
      const responseCounty = await county.getResponseCounty();
      counties.push(responseCounty);
    }

    res.status(HttpStatusCodes.OK).send(counties);
  } else {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};

export const getSettlements = async (req: Request, res: Response) => {
  const queryParams = req.query;

  // Access individual query parameters
  const zip = queryParams.zip;
  const settlement = queryParams.settlement;
  const countyId = queryParams.countyId;

  const whereStatement: any = {};

  if (zip) whereStatement.zip = zip;
  if (settlement) whereStatement.settlement = { [Op.like]: settlement + "%" };
  if (countyId) whereStatement.countyId = countyId;
  //console.log(whereStatement);
  const settlementsDB = await Settlement.findAll({
    where: whereStatement,
  });
  if (settlementsDB) {
    const settlements: ResponseSettlement[] = [];
    for (let i = 0; i < settlementsDB.length; i++) {
      const settlement = settlementsDB[i];
      const responseSettlement = await settlement.getResponseSettlement();
      settlements.push(responseSettlement);
    }
    res.status(HttpStatusCodes.OK).send(settlements);
  } else {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
