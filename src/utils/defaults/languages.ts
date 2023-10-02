import { Language } from "../../models/language";
import { String } from "../../models/string";

import { languages } from "./data/languages";
import { strings } from "./data/string";

export interface ILanguage {
  key: string;
  language: string;
  string: string;
}

export interface IString {
  key: string;
  language: string;
  string: string;
}

export const setupLanguagesAndStrings = async () => {
  for (let i = 0; i < languages.length; i++) {
    const value = await Language.findOrCreate({
      where: {
        key: languages[i].key,
        language: languages[i].language,
        string: languages[i].string,
      },
    });
  }

  for (let i = 0; i < strings.length; i++) {
    const value = await String.findOrCreate({
      where: {
        key: strings[i].key,
        language: strings[i].language,
        string: strings[i].string,
      },
    });
  }
};
