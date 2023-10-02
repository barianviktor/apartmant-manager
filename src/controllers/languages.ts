import { HttpStatusCodes } from "../utils/http-status-codes";
import { ResponseLanguage } from "../interfaces/responses";
import { Request, Response } from "express";
import { Language } from "../models/language";

export const getLanguages = async (req: Request, res: Response) => {
  const languageDB = await Language.findAll();
  if (languageDB) {
    const languages: ResponseLanguage[] = [];
    await languageDB.map(async (language: Language) => {
      const responseLanguage = await language.getResponseLanguage();
      languages.push(responseLanguage);
    });
    res.status(HttpStatusCodes.OK).send(languages);
  } else {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
