import { HttpStatusCodes } from "../utils/http-status-codes";
import { ResponseString } from "../interfaces/responses";
import { Request, Response } from "express";
import { String } from "../models/string";

const defaultLocale = "en";
export const getStrings = async (req: Request, res: Response) => {
  let locale = req.params.locale;
  if (!locale) {
    locale = defaultLocale;
  }
  const stringsDB = await String.findAll({
    where: {
      language: locale.toUpperCase(),
    },
  });
  if (stringsDB) {
    const strings: ResponseString[] = [];
    await stringsDB.map(async (s: String) => {
      const responseString = await s.getResponseString();
      strings.push(responseString);
    });
    res.status(HttpStatusCodes.OK).send(strings);
  } else {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
