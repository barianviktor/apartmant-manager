import { Language } from "../../models/language";
import { String } from "../../models/string";

import { languages } from "./data/languages";
import { strings } from "./data/string";

export interface ILanguage {
  key: string;
  language: string;
}

export interface IString {
  key: string;
  language: string;
  string: string;
}

export const setupLanguagesAndStrings = async () => {
  /* await languages.forEach(async (language: ILanguage) => {
    const value = await Language.findOrCreate({
      where: {
        key: language.key,
        language: language.language,
      },
    });
  });

  await strings.forEach(async (string: IString) => {
    const value = await String.findOrCreate({
      where: {
        key: string.key,
        language: string.language,
      },
      defaults: {
        string: string.string,
      },
    });
  }); */
};
