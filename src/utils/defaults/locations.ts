import { Settlement } from "../../models/settlement";
import { County } from "../../models/counties";
import { Country } from "../../models/country";

export interface ICountry {
  id?: number;
  country_code: string;
  country: string;
}

export interface ICounty {
  id?: number;
  county: string;
  countryId: number;
}

export const counties: ICounty[] = [
  {
    countryId: 1,
    county: "Fejér",
  },
  {
    countryId: 1,
    county: "Jász-Nagykun-Szolnok",
  },
  {
    countryId: 1,
    county: "Baranya",
  },
  {
    countryId: 1,
    county: "Heves",
  },
  {
    countryId: 1,
    county: "Borsod-Abaúj-Zemplén",
  },
  {
    countryId: 1,
    county: "Gyõr-Moson-Sopron",
  },
  {
    countryId: 1,
    county: "Pest",
  },

  {
    countryId: 1,
    county: "Veszprém",
  },
  {
    countryId: 1,
    county: "Komárom-Esztergom",
  },
  {
    countryId: 1,
    county: "Vas",
  },
  {
    countryId: 1,
    county: "Somogy",
  },
  {
    countryId: 1,
    county: "Bács-Kiskun",
  },
  {
    countryId: 1,
    county: "Szabolcs-Szatmár-Bereg",
  },
  {
    countryId: 1,
    county: "Csongrád",
  },
  {
    countryId: 1,
    county: "Zala",
  },
  {
    countryId: 1,
    county: "Békés",
  },
  {
    countryId: 1,
    county: "Hajdú-Bihar",
  },
  {
    countryId: 1,
    county: "Tolna",
  },
  {
    countryId: 1,
    county: "Nógrád",
  },
  {
    countryId: 1,
    county: "Budapest",
  },
];
interface ISettlement {
  zip: number;
  settlement: string;
  countyId: number;
}
export const settlements: ISettlement[] = [
  {
    zip: 8127,
    settlement: "Aba",
    countyId: 6,
  },
  {
    zip: 8128,
    settlement: "Aba",
    countyId: 6,
  },
  {
    zip: 5241,
    settlement: "Abádszalók",
    countyId: 10,
  },
  {
    zip: 7678,
    settlement: "Abaliget",
    countyId: 2,
  },
  {
    zip: 3261,
    settlement: "Abasár",
    countyId: 9,
  },
  {
    zip: 3882,
    settlement: "Abaújalpár",
    countyId: 4,
  },
  {
    zip: 3882,
    settlement: "Abaújkér",
    countyId: 4,
  },
  {
    zip: 3815,
    settlement: "Abaújlak",
    countyId: 4,
  },
  {
    zip: 3881,
    settlement: "Abaújszántó",
    countyId: 4,
  },
  {
    zip: 3809,
    settlement: "Abaújszolnok",
    countyId: 4,
  },
  {
    zip: 3898,
    settlement: "Abaújvár",
    countyId: 4,
  },
  {
    zip: 9151,
    settlement: "Abda",
    countyId: 7,
  },
  {
    zip: 3753,
    settlement: "Abod",
    countyId: 4,
  },
  {
    zip: 2740,
    settlement: "Abony",
    countyId: 13,
  },
  {
    zip: 8256,
    settlement: "Ábrahámhegy",
    countyId: 18,
  },
  {
    zip: 2941,
    settlement: "Ács",
    countyId: 11,
  },
  {
    zip: 2683,
    settlement: "Acsa",
    countyId: 13,
  },
  {
    zip: 9746,
    settlement: "Acsád",
    countyId: 17,
  },
  {
    zip: 9168,
    settlement: "Acsalag",
    countyId: 7,
  },
  {
    zip: 2887,
    settlement: "Ácsteszér",
    countyId: 11,
  },
  {
    zip: 3292,
    settlement: "Adács",
    countyId: 9,
  },
  {
    zip: 8653,
    settlement: "Ádánd",
    countyId: 14,
  },
  {
    zip: 8561,
    settlement: "Adásztevel",
    countyId: 18,
  },
  {
    zip: 2457,
    settlement: "Adony",
    countyId: 6,
  },
  {
    zip: 8497,
    settlement: "Adorjánháza",
    countyId: 18,
  },
  {
    zip: 7841,
    settlement: "Adorjás",
    countyId: 2,
  },
  {
    zip: 7381,
    settlement: "Ág",
    countyId: 2,
  },
  {
    zip: 6076,
    settlement: "Ágasegyháza",
    countyId: 1,
  },
  {
    zip: 9423,
    settlement: "Ágfalva",
    countyId: 7,
  },
  {
    zip: 3759,
    settlement: "Aggtelek",
    countyId: 4,
  },
  {
    zip: 9441,
    settlement: "Agyagosszergény",
    countyId: 7,
  },
  {
    zip: 4524,
    settlement: "Ajak",
    countyId: 15,
  },
  {
    zip: 8400,
    settlement: "Ajka",
    countyId: 18,
  },
  {
    zip: 8447,
    settlement: "Ajka",
    countyId: 18,
  },
  {
    zip: 8448,
    settlement: "Ajka",
    countyId: 18,
  },
  {
    zip: 8451,
    settlement: "Ajka",
    countyId: 18,
  },
  {
    zip: 2862,
    settlement: "Aka",
    countyId: 11,
  },
  {
    zip: 6221,
    settlement: "Akasztó",
    countyId: 1,
  },
  {
    zip: 3779,
    settlement: "Alacska",
    countyId: 4,
  },
  {
    zip: 7011,
    settlement: "Alap",
    countyId: 6,
  },
  {
    zip: 5142,
    settlement: "Alattyán",
    countyId: 10,
  },
  {
    zip: 2730,
    settlement: "Albertirsa",
    countyId: 13,
  },
  {
    zip: 8087,
    settlement: "Alcsútdoboz",
    countyId: 6,
  },
  {
    zip: 3353,
    settlement: "Aldebrõ",
    countyId: 9,
  },
  {
    zip: 6750,
    settlement: "Algyõ",
    countyId: 5,
  },
  {
    zip: 8921,
    settlement: "Alibánfa",
    countyId: 19,
  },
  {
    zip: 7934,
    settlement: "Almamellék",
    countyId: 2,
  },
  {
    zip: 2931,
    settlement: "Almásfüzitõ",
    countyId: 11,
  },
  {
    zip: 8935,
    settlement: "Almásháza",
    countyId: 19,
  },
  {
    zip: 5747,
    settlement: "Almáskamarás",
    countyId: 3,
  },
  {
    zip: 7932,
    settlement: "Almáskeresztúr",
    countyId: 2,
  },
  {
    zip: 4285,
    settlement: "Álmosd",
    countyId: 8,
  },
  {
    zip: 3985,
    settlement: "Alsóberecki",
    countyId: 4,
  },
  {
    zip: 7443,
    settlement: "Alsóbogát",
    countyId: 14,
  },
  {
    zip: 3717,
    settlement: "Alsódobsza",
    countyId: 4,
  },
  {
    zip: 3837,
    settlement: "Alsógagy",
    countyId: 4,
  },
  {
    zip: 7345,
    settlement: "Alsómocsolád",
    countyId: 2,
  },
  {
    zip: 7147,
    settlement: "Alsónána",
    countyId: 16,
  },
  {
    zip: 2351,
    settlement: "Alsónémedi",
    countyId: 13,
  },
  {
    zip: 8924,
    settlement: "Alsónemesapáti",
    countyId: 19,
  },
  {
    zip: 7148,
    settlement: "Alsónyék",
    countyId: 16,
  },
  {
    zip: 8394,
    settlement: "Alsópáhok",
    countyId: 19,
  },
  {
    zip: 2617,
    settlement: "Alsópetény",
    countyId: 12,
  },
  {
    zip: 8767,
    settlement: "Alsórajk",
    countyId: 19,
  },
  {
    zip: 3989,
    settlement: "Alsóregmec",
    countyId: 4,
  },
  {
    zip: 8973,
    settlement: "Alsószenterzsébet",
    countyId: 19,
  },
  {
    zip: 7012,
    settlement: "Alsószentiván",
    countyId: 6,
  },
  {
    zip: 7826,
    settlement: "Alsószentmárton",
    countyId: 2,
  },
  {
    zip: 3726,
    settlement: "Alsószuha",
    countyId: 4,
  },
  {
    zip: 9983,
    settlement: "Alsószölnök",
    countyId: 17,
  },
  {
    zip: 3735,
    settlement: "Alsótelekes",
    countyId: 4,
  },
  {
    zip: 3069,
    settlement: "Alsótold",
    countyId: 12,
  },
  {
    zip: 9842,
    settlement: "Alsóújlak",
    countyId: 17,
  },
  {
    zip: 3811,
    settlement: "Alsóvadász",
    countyId: 4,
  },
  {
    zip: 3571,
    settlement: "Alsózsolca",
    countyId: 4,
  },
  {
    zip: 8226,
    settlement: "Alsóörs",
    countyId: 18,
  },
  {
    zip: 6916,
    settlement: "Ambrózfalva",
    countyId: 5,
  },
  {
    zip: 4546,
    settlement: "Anarcs",
    countyId: 15,
  },
  {
    zip: 8675,
    settlement: "Andocs",
    countyId: 14,
  },
  {
    zip: 3399,
    settlement: "Andornaktálya",
    countyId: 9,
  },
  {
    zip: 9811,
    settlement: "Andrásfa",
    countyId: 17,
  },
  {
    zip: 2529,
    settlement: "Annavölgy",
    countyId: 11,
  },
  {
    zip: 8477,
    settlement: "Apácatorna",
    countyId: 18,
  },
  {
    zip: 4553,
    settlement: "Apagy",
    countyId: 15,
  },
  {
    zip: 2345,
    settlement: "Apaj",
    countyId: 13,
  },
  {
    zip: 7186,
    settlement: "Aparhant",
    countyId: 16,
  },
  {
    zip: 6931,
    settlement: "Apátfalva",
    countyId: 5,
  },
  {
    zip: 9982,
    settlement: "Apátistvánfalva",
    countyId: 17,
  },
  {
    zip: 7720,
    settlement: "Apátvarasd",
    countyId: 2,
  },
  {
    zip: 3032,
    settlement: "Apc",
    countyId: 9,
  },
  {
    zip: 2338,
    settlement: "Áporka",
    countyId: 13,
  },
  {
    zip: 6088,
    settlement: "Apostag",
    countyId: 1,
  },
  {
    zip: 4634,
    settlement: "Aranyosapáti",
    countyId: 15,
  },
  {
    zip: 7671,
    settlement: "Aranyosgadány",
    countyId: 2,
  },
  {
    zip: 3885,
    settlement: "Arka",
    countyId: 4,
  },
  {
    zip: 3663,
    settlement: "Arló",
    countyId: 4,
  },
  {
    zip: 3713,
    settlement: "Arnót",
    countyId: 4,
  },
  {
    zip: 3467,
    settlement: "Ároktõ",
    countyId: 4,
  },
  {
    zip: 6623,
    settlement: "Árpádhalom",
    countyId: 5,
  },
  {
    zip: 9132,
    settlement: "Árpás",
    countyId: 7,
  },
  {
    zip: 4115,
    settlement: "Ártánd",
    countyId: 8,
  },
  {
    zip: 6783,
    settlement: "Ásotthalom",
    countyId: 5,
  },
  {
    zip: 9177,
    settlement: "Ásványráró",
    countyId: 7,
  },
  {
    zip: 3841,
    settlement: "Aszaló",
    countyId: 4,
  },
  {
    zip: 2881,
    settlement: "Ászár",
    countyId: 11,
  },
  {
    zip: 2170,
    settlement: "Aszód",
    countyId: 13,
  },
  {
    zip: 8241,
    settlement: "Aszófõ",
    countyId: 18,
  },
  {
    zip: 7763,
    settlement: "Áta",
    countyId: 2,
  },
  {
    zip: 3371,
    settlement: "Átány",
    countyId: 9,
  },
  {
    zip: 3213,
    settlement: "Atkár",
    countyId: 9,
  },
  {
    zip: 7252,
    settlement: "Attala",
    countyId: 16,
  },
  {
    zip: 7757,
    settlement: "Babarc",
    countyId: 2,
  },
  {
    zip: 7814,
    settlement: "Babarcszõlõs",
    countyId: 2,
  },
  {
    zip: 7584,
    settlement: "Babócsa",
    countyId: 14,
  },
  {
    zip: 2943,
    settlement: "Bábolna",
    countyId: 11,
  },
  {
    zip: 8658,
    settlement: "Bábonymegyer",
    countyId: 14,
  },
  {
    zip: 8983,
    settlement: "Babosdöbréte",
    countyId: 19,
  },
  {
    zip: 9351,
    settlement: "Babót",
    countyId: 7,
  },
  {
    zip: 6430,
    settlement: "Bácsalmás",
    countyId: 1,
  },
  {
    zip: 6453,
    settlement: "Bácsbokod",
    countyId: 1,
  },
  {
    zip: 6454,
    settlement: "Bácsborsód",
    countyId: 1,
  },
  {
    zip: 6511,
    settlement: "Bácsszentgyörgy",
    countyId: 1,
  },
  {
    zip: 6425,
    settlement: "Bácsszõlõs",
    countyId: 1,
  },
  {
    zip: 8257,
    settlement: "Badacsonytomaj",
    countyId: 18,
  },
  {
    zip: 8258,
    settlement: "Badacsonytomaj",
    countyId: 18,
  },
  {
    zip: 8261,
    settlement: "Badacsonytomaj",
    countyId: 18,
  },
  {
    zip: 8262,
    settlement: "Badacsonytördemic",
    countyId: 18,
  },
  {
    zip: 8263,
    settlement: "Badacsonytördemic",
    countyId: 18,
  },
  {
    zip: 2191,
    settlement: "Bag",
    countyId: 13,
  },
  {
    zip: 4286,
    settlement: "Bagamér",
    countyId: 8,
  },
  {
    zip: 8977,
    settlement: "Baglad",
    countyId: 19,
  },
  {
    zip: 8992,
    settlement: "Bagod",
    countyId: 19,
  },
  {
    zip: 9145,
    settlement: "Bágyogszovát",
    countyId: 7,
  },
  {
    zip: 2836,
    settlement: "Baj",
    countyId: 11,
  },
  {
    zip: 6500,
    settlement: "Baja",
    countyId: 1,
  },
  {
    zip: 6503,
    settlement: "Baja",
    countyId: 1,
  },
  {
    zip: 9944,
    settlement: "Bajánsenye",
    countyId: 17,
  },
  {
    zip: 2525,
    settlement: "Bajna",
    countyId: 11,
  },
  {
    zip: 2533,
    settlement: "Bajót",
    countyId: 11,
  },
  {
    zip: 8945,
    settlement: "Bak",
    countyId: 19,
  },
  {
    zip: 7585,
    settlement: "Bakháza",
    countyId: 14,
  },
  {
    zip: 7393,
    settlement: "Bakóca",
    countyId: 2,
  },
  {
    zip: 4164,
    settlement: "Bakonszeg",
    countyId: 8,
  },
  {
    zip: 7675,
    settlement: "Bakonya",
    countyId: 2,
  },
  {
    zip: 2885,
    settlement: "Bakonybánk",
    countyId: 11,
  },
  {
    zip: 8427,
    settlement: "Bakonybél",
    countyId: 18,
  },
  {
    zip: 8056,
    settlement: "Bakonycsernye",
    countyId: 6,
  },
  {
    zip: 8433,
    settlement: "Bakonygyirót",
    countyId: 7,
  },
  {
    zip: 8581,
    settlement: "Bakonyjákó",
    countyId: 18,
  },
  {
    zip: 8571,
    settlement: "Bakonykoppány",
    countyId: 18,
  },
  {
    zip: 8045,
    settlement: "Bakonykúti",
    countyId: 6,
  },
  {
    zip: 8422,
    settlement: "Bakonynána",
    countyId: 18,
  },
  {
    zip: 8418,
    settlement: "Bakonyoszlop",
    countyId: 18,
  },
  {
    zip: 9088,
    settlement: "Bakonypéterd",
    countyId: 7,
  },
  {
    zip: 8457,
    settlement: "Bakonypölöske",
    countyId: 18,
  },
  {
    zip: 8557,
    settlement: "Bakonyság",
    countyId: 18,
  },
  {
    zip: 2861,
    settlement: "Bakonysárkány",
    countyId: 11,
  },
  {
    zip: 8557,
    settlement: "Bakonyszentiván",
    countyId: 18,
  },
  {
    zip: 8430,
    settlement: "Bakonyszentkirály",
    countyId: 18,
  },
  {
    zip: 8431,
    settlement: "Bakonyszentlászló",
    countyId: 7,
  },
  {
    zip: 2884,
    settlement: "Bakonyszombathely",
    countyId: 11,
  },
  {
    zip: 8572,
    settlement: "Bakonyszücs",
    countyId: 18,
  },
  {
    zip: 8555,
    settlement: "Bakonytamási",
    countyId: 18,
  },
  {
    zip: 6768,
    settlement: "Baks",
    countyId: 5,
  },
  {
    zip: 7834,
    settlement: "Baksa",
    countyId: 2,
  },
  {
    zip: 3836,
    settlement: "Baktakék",
    countyId: 4,
  },
  {
    zip: 4561,
    settlement: "Baktalórántháza",
    countyId: 15,
  },
  {
    zip: 8946,
    settlement: "Baktüttös",
    countyId: 19,
  },
  {
    zip: 3780,
    settlement: "Balajt",
    countyId: 4,
  },
  {
    zip: 2660,
    settlement: "Balassagyarmat",
    countyId: 12,
  },
  {
    zip: 6764,
    settlement: "Balástya",
    countyId: 5,
  },
  {
    zip: 3347,
    settlement: "Balaton",
    countyId: 9,
  },
  {
    zip: 8243,
    settlement: "Balatonakali",
    countyId: 18,
  },
  {
    zip: 8220,
    settlement: "Balatonalmádi",
    countyId: 18,
  },
  {
    zip: 8649,
    settlement: "Balatonberény",
    countyId: 14,
  },
  {
    zip: 8630,
    settlement: "Balatonboglár",
    countyId: 14,
  },
  {
    zip: 8691,
    settlement: "Balatonboglár",
    countyId: 14,
  },
  {
    zip: 8272,
    settlement: "Balatoncsicsó",
    countyId: 18,
  },
  {
    zip: 8312,
    settlement: "Balatonederics",
    countyId: 18,
  },
  {
    zip: 8613,
    settlement: "Balatonendréd",
    countyId: 14,
  },
  {
    zip: 8646,
    settlement: "Balatonfenyves",
    countyId: 14,
  },
  {
    zip: 8164,
    settlement: "Balatonfõkajár",
    countyId: 18,
  },
  {
    zip: 8175,
    settlement: "Balatonfûzfõ",
    countyId: 18,
  },
  {
    zip: 8184,
    settlement: "Balatonfûzfõ",
    countyId: 18,
  },
  {
    zip: 8230,
    settlement: "Balatonfüred",
    countyId: 18,
  },
  {
    zip: 8236,
    settlement: "Balatonfüred",
    countyId: 18,
  },
  {
    zip: 8623,
    settlement: "Balatonföldvár",
    countyId: 14,
  },
  {
    zip: 8313,
    settlement: "Balatongyörök",
    countyId: 19,
  },
  {
    zip: 8275,
    settlement: "Balatonhenye",
    countyId: 18,
  },
  {
    zip: 8172,
    settlement: "Balatonkenese",
    countyId: 18,
  },
  {
    zip: 8174,
    settlement: "Balatonkenese",
    countyId: 18,
  },
  {
    zip: 8648,
    settlement: "Balatonkeresztúr",
    countyId: 14,
  },
  {
    zip: 8638,
    settlement: "Balatonlelle",
    countyId: 14,
  },
  {
    zip: 8753,
    settlement: "Balatonmagyaród",
    countyId: 19,
  },
  {
    zip: 8647,
    settlement: "Balatonmáriafürdõ",
    countyId: 14,
  },
  {
    zip: 8637,
    settlement: "Balatonõszöd",
    countyId: 14,
  },
  {
    zip: 8255,
    settlement: "Balatonrendes",
    countyId: 18,
  },
  {
    zip: 8651,
    settlement: "Balatonszabadi",
    countyId: 14,
  },
  {
    zip: 8624,
    settlement: "Balatonszárszó",
    countyId: 14,
  },
  {
    zip: 8636,
    settlement: "Balatonszemes",
    countyId: 14,
  },
  {
    zip: 8710,
    settlement: "Balatonszentgyörgy",
    countyId: 14,
  },
  {
    zip: 8252,
    settlement: "Balatonszepezd",
    countyId: 18,
  },
  {
    zip: 8233,
    settlement: "Balatonszõlõs",
    countyId: 18,
  },
  {
    zip: 8242,
    settlement: "Balatonudvari",
    countyId: 18,
  },
  {
    zip: 8712,
    settlement: "Balatonújlak",
    countyId: 14,
  },
  {
    zip: 8171,
    settlement: "Balatonvilágos",
    countyId: 18,
  },
  {
    zip: 8054,
    settlement: "Balinka",
    countyId: 6,
  },
  {
    zip: 8055,
    settlement: "Balinka",
    countyId: 6,
  },
  {
    zip: 4233,
    settlement: "Balkány",
    countyId: 15,
  },
  {
    zip: 6035,
    settlement: "Ballószög",
    countyId: 1,
  },
  {
    zip: 4060,
    settlement: "Balmazújváros",
    countyId: 8,
  },
  {
    zip: 9771,
    settlement: "Balogunyom",
    countyId: 17,
  },
  {
    zip: 6412,
    settlement: "Balotaszállás",
    countyId: 1,
  },
  {
    zip: 4468,
    settlement: "Balsa",
    countyId: 15,
  },
  {
    zip: 8614,
    settlement: "Bálványos",
    countyId: 14,
  },
  {
    zip: 2944,
    settlement: "Bana",
    countyId: 11,
  },
  {
    zip: 8443,
    settlement: "Bánd",
    countyId: 18,
  },
  {
    zip: 7914,
    settlement: "Bánfa",
    countyId: 2,
  },
  {
    zip: 3642,
    settlement: "Bánhorváti",
    countyId: 4,
  },
  {
    zip: 2653,
    settlement: "Bánk",
    countyId: 12,
  },
  {
    zip: 8891,
    settlement: "Bánokszentgyörgy",
    countyId: 19,
  },
  {
    zip: 3654,
    settlement: "Bánréve",
    countyId: 4,
  },
  {
    zip: 7711,
    settlement: "Bár",
    countyId: 2,
  },
  {
    zip: 4937,
    settlement: "Barabás",
    countyId: 15,
  },
  {
    zip: 2426,
    settlement: "Baracs",
    countyId: 6,
  },
  {
    zip: 2427,
    settlement: "Baracs",
    countyId: 6,
  },
  {
    zip: 2471,
    settlement: "Baracska",
    countyId: 6,
  },
  {
    zip: 4161,
    settlement: "Báránd",
    countyId: 8,
  },
  {
    zip: 7841,
    settlement: "Baranyahidvég",
    countyId: 2,
  },
  {
    zip: 7384,
    settlement: "Baranyajenõ",
    countyId: 2,
  },
  {
    zip: 7383,
    settlement: "Baranyaszentgyörgy",
    countyId: 2,
  },
  {
    zip: 9169,
    settlement: "Barbacs",
    countyId: 7,
  },
  {
    zip: 7557,
    settlement: "Barcs",
    countyId: 14,
  },
  {
    zip: 7570,
    settlement: "Barcs",
    countyId: 14,
  },
  {
    zip: 7478,
    settlement: "Bárdudvarnok",
    countyId: 14,
  },
  {
    zip: 8948,
    settlement: "Barlahida",
    countyId: 19,
  },
  {
    zip: 3126,
    settlement: "Bárna",
    countyId: 12,
  },
  {
    zip: 8291,
    settlement: "Barnag",
    countyId: 18,
  },
  {
    zip: 2883,
    settlement: "Bársonyos",
    countyId: 11,
  },
  {
    zip: 7923,
    settlement: "Basal",
    countyId: 2,
  },
  {
    zip: 3881,
    settlement: "Baskó",
    countyId: 4,
  },
  {
    zip: 7149,
    settlement: "Báta",
    countyId: 16,
  },
  {
    zip: 7164,
    settlement: "Bátaapáti",
    countyId: 16,
  },
  {
    zip: 7140,
    settlement: "Bátaszék",
    countyId: 16,
  },
  {
    zip: 7258,
    settlement: "Baté",
    countyId: 14,
  },
  {
    zip: 6528,
    settlement: "Bátmonostor",
    countyId: 1,
  },
  {
    zip: 3070,
    settlement: "Bátonyterenye",
    countyId: 12,
  },
  {
    zip: 3078,
    settlement: "Bátonyterenye",
    countyId: 12,
  },
  {
    zip: 3336,
    settlement: "Bátor",
    countyId: 9,
  },
  {
    zip: 4343,
    settlement: "Bátorliget",
    countyId: 15,
  },
  {
    zip: 5830,
    settlement: "Battonya",
    countyId: 3,
  },
  {
    zip: 6351,
    settlement: "Bátya",
    countyId: 1,
  },
  {
    zip: 8797,
    settlement: "Batyk",
    countyId: 19,
  },
  {
    zip: 8887,
    settlement: "Bázakerettye",
    countyId: 19,
  },
  {
    zip: 8352,
    settlement: "Bazsi",
    countyId: 18,
  },
  {
    zip: 8565,
    settlement: "Béb",
    countyId: 18,
  },
  {
    zip: 8866,
    settlement: "Becsehely",
    countyId: 19,
  },
  {
    zip: 2693,
    settlement: "Becske",
    countyId: 12,
  },
  {
    zip: 3768,
    settlement: "Becskeháza",
    countyId: 4,
  },
  {
    zip: 8985,
    settlement: "Becsvölgye",
    countyId: 19,
  },
  {
    zip: 8666,
    settlement: "Bedegkér",
    countyId: 14,
  },
  {
    zip: 4128,
    settlement: "Bedõ",
    countyId: 8,
  },
  {
    zip: 9683,
    settlement: "Bejcgyertyános",
    countyId: 17,
  },
  {
    zip: 8515,
    settlement: "Békás",
    countyId: 18,
  },
  {
    zip: 3903,
    settlement: "Bekecs",
    countyId: 4,
  },
  {
    zip: 5630,
    settlement: "Békés",
    countyId: 3,
  },
  {
    zip: 5600,
    settlement: "Békéscsaba",
    countyId: 3,
  },
  {
    zip: 5623,
    settlement: "Békéscsaba",
    countyId: 3,
  },
  {
    zip: 5671,
    settlement: "Békéscsaba",
    countyId: 3,
  },
  {
    zip: 5946,
    settlement: "Békéssámson",
    countyId: 3,
  },
  {
    zip: 5561,
    settlement: "Békésszentandrás",
    countyId: 3,
  },
  {
    zip: 3343,
    settlement: "Bekölce",
    countyId: 9,
  },
  {
    zip: 3346,
    settlement: "Bélapátfalva",
    countyId: 9,
  },
  {
    zip: 7589,
    settlement: "Bélavár",
    countyId: 14,
  },
  {
    zip: 7061,
    settlement: "Belecska",
    countyId: 16,
  },
  {
    zip: 9343,
    settlement: "Beled",
    countyId: 7,
  },
  {
    zip: 7543,
    settlement: "Beleg",
    countyId: 14,
  },
  {
    zip: 8855,
    settlement: "Belezna",
    countyId: 19,
  },
  {
    zip: 5643,
    settlement: "Bélmegyer",
    countyId: 3,
  },
  {
    zip: 2455,
    settlement: "Beloiannisz",
    countyId: 6,
  },
  {
    zip: 8978,
    settlement: "Belsõsárd",
    countyId: 19,
  },
  {
    zip: 7747,
    settlement: "Belvárdgyula",
    countyId: 2,
  },
  {
    zip: 4643,
    settlement: "Benk",
    countyId: 15,
  },
  {
    zip: 2216,
    settlement: "Bénye",
    countyId: 13,
  },
  {
    zip: 3045,
    settlement: "Bér",
    countyId: 12,
  },
  {
    zip: 9831,
    settlement: "Bérbaltavár",
    countyId: 17,
  },
  {
    zip: 2687,
    settlement: "Bercel",
    countyId: 12,
  },
  {
    zip: 4934,
    settlement: "Beregdaróc",
    countyId: 15,
  },
  {
    zip: 4933,
    settlement: "Beregsurány",
    countyId: 15,
  },
  {
    zip: 4116,
    settlement: "Berekböszörmény",
    countyId: 8,
  },
  {
    zip: 5309,
    settlement: "Berekfürdõ",
    countyId: 10,
  },
  {
    zip: 7827,
    settlement: "Beremend",
    countyId: 2,
  },
  {
    zip: 3704,
    settlement: "Berente",
    countyId: 4,
  },
  {
    zip: 3834,
    settlement: "Beret",
    countyId: 4,
  },
  {
    zip: 4100,
    settlement: "Berettyóújfalu",
    countyId: 8,
  },
  {
    zip: 4103,
    settlement: "Berettyóújfalu",
    countyId: 8,
  },
  {
    zip: 8181,
    settlement: "Berhida",
    countyId: 18,
  },
  {
    zip: 8182,
    settlement: "Berhida",
    countyId: 18,
  },
  {
    zip: 2641,
    settlement: "Berkenye",
    countyId: 12,
  },
  {
    zip: 7664,
    settlement: "Berkesd",
    countyId: 2,
  },
  {
    zip: 4521,
    settlement: "Berkesz",
    countyId: 15,
  },
  {
    zip: 2639,
    settlement: "Bernecebaráti",
    countyId: 13,
  },
  {
    zip: 3575,
    settlement: "Berzék",
    countyId: 4,
  },
  {
    zip: 7516,
    settlement: "Berzence",
    countyId: 14,
  },
  {
    zip: 7838,
    settlement: "Besence",
    countyId: 2,
  },
  {
    zip: 4557,
    settlement: "Besenyõd",
    countyId: 15,
  },
  {
    zip: 3373,
    settlement: "Besenyõtelek",
    countyId: 9,
  },
  {
    zip: 5071,
    settlement: "Besenyszög",
    countyId: 10,
  },
  {
    zip: 2456,
    settlement: "Besnyõ",
    countyId: 6,
  },
  {
    zip: 4488,
    settlement: "Beszterec",
    countyId: 15,
  },
  {
    zip: 7782,
    settlement: "Bezedek",
    countyId: 2,
  },
  {
    zip: 9223,
    settlement: "Bezenye",
    countyId: 7,
  },
  {
    zip: 8934,
    settlement: "Bezeréd",
    countyId: 19,
  },
  {
    zip: 9162,
    settlement: "Bezi",
    countyId: 7,
  },
  {
    zip: 2051,
    settlement: "Biatorbágy",
    countyId: 13,
  },
  {
    zip: 7671,
    settlement: "Bicsérd",
    countyId: 2,
  },
  {
    zip: 2060,
    settlement: "Bicske",
    countyId: 6,
  },
  {
    zip: 4175,
    settlement: "Bihardancsháza",
    countyId: 8,
  },
  {
    zip: 4110,
    settlement: "Biharkeresztes",
    countyId: 8,
  },
  {
    zip: 4172,
    settlement: "Biharnagybajom",
    countyId: 8,
  },
  {
    zip: 4174,
    settlement: "Bihartorda",
    countyId: 8,
  },
  {
    zip: 5538,
    settlement: "Biharugra",
    countyId: 3,
  },
  {
    zip: 7043,
    settlement: "Bikács",
    countyId: 16,
  },
  {
    zip: 7346,
    settlement: "Bikal",
    countyId: 2,
  },
  {
    zip: 4235,
    settlement: "Biri",
    countyId: 15,
  },
  {
    zip: 7747,
    settlement: "Birján",
    countyId: 2,
  },
  {
    zip: 7811,
    settlement: "Bisse",
    countyId: 2,
  },
  {
    zip: 9625,
    settlement: "Bõ",
    countyId: 17,
  },
  {
    zip: 9542,
    settlement: "Boba",
    countyId: 17,
  },
  {
    zip: 8943,
    settlement: "Bocfölde",
    countyId: 19,
  },
  {
    zip: 3368,
    settlement: "Boconád",
    countyId: 9,
  },
  {
    zip: 3574,
    settlement: "Bõcs",
    countyId: 4,
  },
  {
    zip: 6235,
    settlement: "Bócsa",
    countyId: 1,
  },
  {
    zip: 8776,
    settlement: "Bocska",
    countyId: 19,
  },
  {
    zip: 4241,
    settlement: "Bocskaikert",
    countyId: 8,
  },
  {
    zip: 7672,
    settlement: "Boda",
    countyId: 2,
  },
  {
    zip: 8053,
    settlement: "Bodajk",
    countyId: 6,
  },
  {
    zip: 8085,
    settlement: "Bodmér",
    countyId: 6,
  },
  {
    zip: 7394,
    settlement: "Bodolyabér",
    countyId: 2,
  },
  {
    zip: 9134,
    settlement: "Bodonhely",
    countyId: 7,
  },
  {
    zip: 3243,
    settlement: "Bodony",
    countyId: 9,
  },
  {
    zip: 8471,
    settlement: "Bodorfa",
    countyId: 18,
  },
  {
    zip: 7439,
    settlement: "Bodrog",
    countyId: 14,
  },
  {
    zip: 3987,
    settlement: "Bodroghalom",
    countyId: 4,
  },
  {
    zip: 3916,
    settlement: "Bodrogkeresztúr",
    countyId: 4,
  },
  {
    zip: 3917,
    settlement: "Bodrogkisfalud",
    countyId: 4,
  },
  {
    zip: 3943,
    settlement: "Bodrogolaszi",
    countyId: 4,
  },
  {
    zip: 3768,
    settlement: "Bódvalenke",
    countyId: 4,
  },
  {
    zip: 3764,
    settlement: "Bódvarákó",
    countyId: 4,
  },
  {
    zip: 3763,
    settlement: "Bódvaszilas",
    countyId: 4,
  },
  {
    zip: 3412,
    settlement: "Bogács",
    countyId: 4,
  },
  {
    zip: 7742,
    settlement: "Bogád",
    countyId: 2,
  },
  {
    zip: 7836,
    settlement: "Bogádmindszent",
    countyId: 2,
  },
  {
    zip: 7966,
    settlement: "Bogdása",
    countyId: 2,
  },
  {
    zip: 7132,
    settlement: "Bogyiszló",
    countyId: 16,
  },
  {
    zip: 9324,
    settlement: "Bogyoszló",
    countyId: 7,
  },
  {
    zip: 4114,
    settlement: "Bojt",
    countyId: 8,
  },
  {
    zip: 8741,
    settlement: "Bókaháza",
    countyId: 19,
  },
  {
    zip: 2855,
    settlement: "Bokod",
    countyId: 11,
  },
  {
    zip: 3066,
    settlement: "Bokor",
    countyId: 12,
  },
  {
    zip: 3016,
    settlement: "Boldog",
    countyId: 9,
  },
  {
    zip: 7937,
    settlement: "Boldogasszonyfa",
    countyId: 2,
  },
  {
    zip: 3884,
    settlement: "Boldogkõújfalu",
    countyId: 4,
  },
  {
    zip: 3885,
    settlement: "Boldogkõváralja",
    countyId: 4,
  },
  {
    zip: 3794,
    settlement: "Boldva",
    countyId: 4,
  },
  {
    zip: 7517,
    settlement: "Bolhás",
    countyId: 14,
  },
  {
    zip: 7586,
    settlement: "Bolhó",
    countyId: 14,
  },
  {
    zip: 7754,
    settlement: "Bóly",
    countyId: 2,
  },
  {
    zip: 8992,
    settlement: "Boncodfölde",
    countyId: 19,
  },
  {
    zip: 7281,
    settlement: "Bonnya",
    countyId: 14,
  },
  {
    zip: 9073,
    settlement: "Bõny",
    countyId: 7,
  },
  {
    zip: 7150,
    settlement: "Bonyhád",
    countyId: 16,
  },
  {
    zip: 7187,
    settlement: "Bonyhád",
    countyId: 16,
  },
  {
    zip: 7158,
    settlement: "Bonyhádvarasd",
    countyId: 16,
  },
  {
    zip: 6795,
    settlement: "Bordány",
    countyId: 5,
  },
  {
    zip: 9554,
    settlement: "Borgáta",
    countyId: 17,
  },
  {
    zip: 7756,
    settlement: "Borjád",
    countyId: 2,
  },
  {
    zip: 6445,
    settlement: "Borota",
    countyId: 1,
  },
  {
    zip: 8885,
    settlement: "Borsfa",
    countyId: 19,
  },
  {
    zip: 3658,
    settlement: "Borsodbóta",
    countyId: 4,
  },
  {
    zip: 3426,
    settlement: "Borsodgeszt",
    countyId: 4,
  },
  {
    zip: 3462,
    settlement: "Borsodivánka",
    countyId: 4,
  },
  {
    zip: 3671,
    settlement: "Borsodnádasd",
    countyId: 4,
  },
  {
    zip: 3672,
    settlement: "Borsodnádasd",
    countyId: 4,
  },
  {
    zip: 3623,
    settlement: "Borsodszentgyörgy",
    countyId: 4,
  },
  {
    zip: 3796,
    settlement: "Borsodszirák",
    countyId: 4,
  },
  {
    zip: 2644,
    settlement: "Borsosberény",
    countyId: 12,
  },
  {
    zip: 8479,
    settlement: "Borszörcsök",
    countyId: 18,
  },
  {
    zip: 8428,
    settlement: "Borzavár",
    countyId: 18,
  },
  {
    zip: 9167,
    settlement: "Bõsárkány",
    countyId: 7,
  },
  {
    zip: 7811,
    settlement: "Bosta",
    countyId: 2,
  },
  {
    zip: 7475,
    settlement: "Bõszénfa",
    countyId: 14,
  },
  {
    zip: 4955,
    settlement: "Botpalád",
    countyId: 15,
  },
  {
    zip: 7900,
    settlement: "Botykapeterd",
    countyId: 2,
  },
  {
    zip: 9727,
    settlement: "Bozsok",
    countyId: 17,
  },
  {
    zip: 3994,
    settlement: "Bózsva",
    countyId: 4,
  },
  {
    zip: 9752,
    settlement: "Bozzai",
    countyId: 17,
  },
  {
    zip: 5527,
    settlement: "Bucsa",
    countyId: 3,
  },
  {
    zip: 9792,
    settlement: "Bucsu",
    countyId: 17,
  },
  {
    zip: 8925,
    settlement: "Bucsuszentlászló",
    countyId: 19,
  },
  {
    zip: 8893,
    settlement: "Bucsuta",
    countyId: 19,
  },
  {
    zip: 2093,
    settlement: "Budajenõ",
    countyId: 13,
  },
  {
    zip: 2011,
    settlement: "Budakalász",
    countyId: 13,
  },
  {
    zip: 2092,
    settlement: "Budakeszi",
    countyId: 13,
  },
  {
    zip: 1011,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1012,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1013,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1014,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1015,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1016,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1021,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1022,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1023,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1024,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1025,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1026,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1027,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1028,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1029,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1031,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1032,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1033,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1034,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1035,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1036,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1037,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1038,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1039,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1041,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1042,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1043,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1044,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1045,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1046,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1047,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1048,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1051,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1052,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1053,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1054,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1055,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1056,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1061,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1062,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1063,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1064,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1065,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1066,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1067,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1068,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1069,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1071,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1072,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1073,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1074,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1075,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1076,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1077,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1078,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1081,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1082,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1083,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1084,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1085,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1086,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1087,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1088,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1089,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1091,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1092,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1093,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1094,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1095,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1096,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1097,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1098,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1101,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1102,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1103,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1104,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1105,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1106,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1107,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1108,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1111,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1112,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1113,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1114,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1115,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1116,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1117,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1118,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1119,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1121,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1122,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1123,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1124,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1125,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1126,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1131,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1132,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1133,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1134,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1135,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1136,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1137,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1138,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1139,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1141,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1142,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1143,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1144,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1145,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1146,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1147,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1148,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1149,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1151,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1152,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1153,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1154,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1155,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1156,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1157,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1158,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1161,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1162,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1163,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1164,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1165,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1171,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1172,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1173,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1174,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1181,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1182,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1183,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1184,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1185,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1186,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1188,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1191,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1192,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1193,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1194,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1195,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1196,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1201,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1202,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1203,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1204,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1205,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1211,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1212,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1213,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1214,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1215,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1221,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1222,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1223,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1224,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1225,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1237,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1238,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1239,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 1529,
    settlement: "Budapest",
    countyId: 0,
  },
  {
    zip: 2040,
    settlement: "Budaörs",
    countyId: 13,
  },
  {
    zip: 6114,
    settlement: "Bugac",
    countyId: 1,
  },
  {
    zip: 6114,
    settlement: "Bugacpusztaháza",
    countyId: 1,
  },
  {
    zip: 2347,
    settlement: "Bugyi",
    countyId: 13,
  },
  {
    zip: 4483,
    settlement: "Buj",
    countyId: 15,
  },
  {
    zip: 3047,
    settlement: "Buják",
    countyId: 12,
  },
  {
    zip: 8695,
    settlement: "Buzsák",
    countyId: 14,
  },
  {
    zip: 9737,
    settlement: "Bük",
    countyId: 17,
  },
  {
    zip: 9740,
    settlement: "Bük",
    countyId: 17,
  },
  {
    zip: 3422,
    settlement: "Bükkábrány",
    countyId: 4,
  },
  {
    zip: 3554,
    settlement: "Bükkaranyos",
    countyId: 4,
  },
  {
    zip: 3648,
    settlement: "Bükkmogyorósd",
    countyId: 4,
  },
  {
    zip: 3335,
    settlement: "Bükkszék",
    countyId: 9,
  },
  {
    zip: 3257,
    settlement: "Bükkszenterzsébet",
    countyId: 9,
  },
  {
    zip: 3557,
    settlement: "Bükkszentkereszt",
    countyId: 4,
  },
  {
    zip: 3346,
    settlement: "Bükkszentmárton",
    countyId: 9,
  },
  {
    zip: 3414,
    settlement: "Bükkzsérc",
    countyId: 4,
  },
  {
    zip: 7682,
    settlement: "Bükkösd",
    countyId: 2,
  },
  {
    zip: 7973,
    settlement: "Bürüs",
    countyId: 2,
  },
  {
    zip: 7273,
    settlement: "Büssü",
    countyId: 14,
  },
  {
    zip: 3821,
    settlement: "Büttös",
    countyId: 4,
  },
  {
    zip: 8991,
    settlement: "Böde",
    countyId: 19,
  },
  {
    zip: 8969,
    settlement: "Bödeháza",
    countyId: 19,
  },
  {
    zip: 9612,
    settlement: "Bögöt",
    countyId: 17,
  },
  {
    zip: 9675,
    settlement: "Bögöte",
    countyId: 17,
  },
  {
    zip: 8719,
    settlement: "Böhönye",
    countyId: 14,
  },
  {
    zip: 4231,
    settlement: "Bököny",
    countyId: 15,
  },
  {
    zip: 7025,
    settlement: "Bölcske",
    countyId: 16,
  },
  {
    zip: 9152,
    settlement: "Börcs",
    countyId: 7,
  },
  {
    zip: 8772,
    settlement: "Börzönce",
    countyId: 19,
  },
  {
    zip: 9725,
    settlement: "Cák",
    countyId: 17,
  },
  {
    zip: 9165,
    settlement: "Cakóháza",
    countyId: 7,
  },
  {
    zip: 7013,
    settlement: "Cece",
    countyId: 6,
  },
  {
    zip: 4732,
    settlement: "Cégénydányád",
    countyId: 15,
  },
  {
    zip: 2700,
    settlement: "Cegléd",
    countyId: 13,
  },
  {
    zip: 2738,
    settlement: "Cegléd",
    countyId: 13,
  },
  {
    zip: 2737,
    settlement: "Ceglédbercel",
    countyId: 13,
  },
  {
    zip: 9500,
    settlement: "Celldömölk",
    countyId: 17,
  },
  {
    zip: 9541,
    settlement: "Celldömölk",
    countyId: 17,
  },
  {
    zip: 3123,
    settlement: "Cered",
    countyId: 12,
  },
  {
    zip: 9624,
    settlement: "Chernelházadamonya",
    countyId: 17,
  },
  {
    zip: 5462,
    settlement: "Cibakháza",
    countyId: 10,
  },
  {
    zip: 3973,
    settlement: "Cigánd",
    countyId: 4,
  },
  {
    zip: 7161,
    settlement: "Cikó",
    countyId: 16,
  },
  {
    zip: 9364,
    settlement: "Cirák",
    countyId: 7,
  },
  {
    zip: 5551,
    settlement: "Csabacsûd",
    countyId: 3,
  },
  {
    zip: 5609,
    settlement: "Csabaszabadi",
    countyId: 3,
  },
  {
    zip: 2064,
    settlement: "Csabdi",
    countyId: 6,
  },
  {
    zip: 8474,
    settlement: "Csabrendek",
    countyId: 18,
  },
  {
    zip: 9375,
    settlement: "Csáfordjánosfa",
    countyId: 7,
  },
  {
    zip: 4967,
    settlement: "Csaholc",
    countyId: 15,
  },
  {
    zip: 8163,
    settlement: "Csajág",
    countyId: 18,
  },
  {
    zip: 8735,
    settlement: "Csákány",
    countyId: 14,
  },
  {
    zip: 9919,
    settlement: "Csákánydoroszló",
    countyId: 17,
  },
  {
    zip: 8073,
    settlement: "Csákberény",
    countyId: 6,
  },
  {
    zip: 8083,
    settlement: "Csákvár",
    countyId: 6,
  },
  {
    zip: 6915,
    settlement: "Csanádalberti",
    countyId: 5,
  },
  {
    zip: 5662,
    settlement: "Csanádapáca",
    countyId: 3,
  },
  {
    zip: 6913,
    settlement: "Csanádpalota",
    countyId: 5,
  },
  {
    zip: 9654,
    settlement: "Csánig",
    countyId: 17,
  },
  {
    zip: 3015,
    settlement: "Csány",
    countyId: 9,
  },
  {
    zip: 7964,
    settlement: "Csányoszró",
    countyId: 2,
  },
  {
    zip: 6647,
    settlement: "Csanytelek",
    countyId: 5,
  },
  {
    zip: 8756,
    settlement: "Csapi",
    countyId: 19,
  },
  {
    zip: 9372,
    settlement: "Csapod",
    countyId: 7,
  },
  {
    zip: 5621,
    settlement: "Csárdaszállás",
    countyId: 3,
  },
  {
    zip: 7811,
    settlement: "Csarnóta",
    countyId: 2,
  },
  {
    zip: 4844,
    settlement: "Csaroda",
    countyId: 15,
  },
  {
    zip: 2858,
    settlement: "Császár",
    countyId: 11,
  },
  {
    zip: 6239,
    settlement: "Császártöltés",
    countyId: 1,
  },
  {
    zip: 4973,
    settlement: "Császló",
    countyId: 15,
  },
  {
    zip: 6523,
    settlement: "Csátalja",
    countyId: 1,
  },
  {
    zip: 8943,
    settlement: "Csatár",
    countyId: 19,
  },
  {
    zip: 5064,
    settlement: "Csataszög",
    countyId: 10,
  },
  {
    zip: 2888,
    settlement: "Csatka",
    countyId: 11,
  },
  {
    zip: 6448,
    settlement: "Csávoly",
    countyId: 1,
  },
  {
    zip: 7935,
    settlement: "Csebény",
    countyId: 2,
  },
  {
    zip: 3052,
    settlement: "Csécse",
    countyId: 12,
  },
  {
    zip: 4742,
    settlement: "Csegöld",
    countyId: 15,
  },
  {
    zip: 8445,
    settlement: "Csehbánya",
    countyId: 18,
  },
  {
    zip: 9833,
    settlement: "Csehi",
    countyId: 17,
  },
  {
    zip: 9834,
    settlement: "Csehimindszent",
    countyId: 17,
  },
  {
    zip: 2949,
    settlement: "Csém",
    countyId: 11,
  },
  {
    zip: 2713,
    settlement: "Csemõ",
    countyId: 13,
  },
  {
    zip: 9764,
    settlement: "Csempeszkopács",
    countyId: 17,
  },
  {
    zip: 6765,
    settlement: "Csengele",
    countyId: 5,
  },
  {
    zip: 4765,
    settlement: "Csenger",
    countyId: 15,
  },
  {
    zip: 4743,
    settlement: "Csengersima",
    countyId: 15,
  },
  {
    zip: 4764,
    settlement: "Csengerújfalu",
    countyId: 15,
  },
  {
    zip: 6222,
    settlement: "Csengõd",
    countyId: 1,
  },
  {
    zip: 9611,
    settlement: "Csénye",
    countyId: 17,
  },
  {
    zip: 3837,
    settlement: "Csenyéte",
    countyId: 4,
  },
  {
    zip: 2946,
    settlement: "Csép",
    countyId: 11,
  },
  {
    zip: 5475,
    settlement: "Csépa",
    countyId: 10,
  },
  {
    zip: 9735,
    settlement: "Csepreg",
    countyId: 17,
  },
  {
    zip: 9375,
    settlement: "Csér",
    countyId: 7,
  },
  {
    zip: 7683,
    settlement: "Cserdi",
    countyId: 2,
  },
  {
    zip: 7472,
    settlement: "Cserénfa",
    countyId: 14,
  },
  {
    zip: 3413,
    settlement: "Cserépfalu",
    countyId: 4,
  },
  {
    zip: 3417,
    settlement: "Cserépváralja",
    countyId: 4,
  },
  {
    zip: 2694,
    settlement: "Cserháthaláp",
    countyId: 12,
  },
  {
    zip: 2676,
    settlement: "Cserhátsurány",
    countyId: 12,
  },
  {
    zip: 3066,
    settlement: "Cserhátszentiván",
    countyId: 12,
  },
  {
    zip: 5465,
    settlement: "Cserkeszõlõ",
    countyId: 10,
  },
  {
    zip: 7673,
    settlement: "Cserkút",
    countyId: 2,
  },
  {
    zip: 3648,
    settlement: "Csernely",
    countyId: 4,
  },
  {
    zip: 8372,
    settlement: "Cserszegtomaj",
    countyId: 19,
  },
  {
    zip: 8951,
    settlement: "Csertalakos",
    countyId: 19,
  },
  {
    zip: 7900,
    settlement: "Csertõ",
    countyId: 2,
  },
  {
    zip: 8419,
    settlement: "Csesznek",
    countyId: 18,
  },
  {
    zip: 8973,
    settlement: "Csesztreg",
    countyId: 19,
  },
  {
    zip: 2678,
    settlement: "Csesztve",
    countyId: 12,
  },
  {
    zip: 8417,
    settlement: "Csetény",
    countyId: 18,
  },
  {
    zip: 2212,
    settlement: "Csévharaszt",
    countyId: 13,
  },
  {
    zip: 7225,
    settlement: "Csibrák",
    countyId: 16,
  },
  {
    zip: 6424,
    settlement: "Csikéria",
    countyId: 1,
  },
  {
    zip: 7341,
    settlement: "Csikóstõttõs",
    countyId: 16,
  },
  {
    zip: 9127,
    settlement: "Csikvánd",
    countyId: 7,
  },
  {
    zip: 3442,
    settlement: "Csincse",
    countyId: 4,
  },
  {
    zip: 9836,
    settlement: "Csipkerek",
    countyId: 17,
  },
  {
    zip: 2673,
    settlement: "Csitár",
    countyId: 12,
  },
  {
    zip: 3848,
    settlement: "Csobád",
    countyId: 4,
  },
  {
    zip: 3927,
    settlement: "Csobaj",
    countyId: 4,
  },
  {
    zip: 2014,
    settlement: "Csobánka",
    countyId: 13,
  },
  {
    zip: 8074,
    settlement: "Csókakõ",
    countyId: 6,
  },
  {
    zip: 7555,
    settlement: "Csokonyavisonta",
    countyId: 14,
  },
  {
    zip: 3647,
    settlement: "Csokvaomány",
    countyId: 4,
  },
  {
    zip: 2521,
    settlement: "Csolnok",
    countyId: 11,
  },
  {
    zip: 6135,
    settlement: "Csólyospálos",
    countyId: 1,
  },
  {
    zip: 7253,
    settlement: "Csoma",
    countyId: 14,
  },
  {
    zip: 2161,
    settlement: "Csomád",
    countyId: 13,
  },
  {
    zip: 7432,
    settlement: "Csombárd",
    countyId: 14,
  },
  {
    zip: 6640,
    settlement: "Csongrád",
    countyId: 5,
  },
  {
    zip: 6648,
    settlement: "Csongrád",
    countyId: 5,
  },
  {
    zip: 8918,
    settlement: "Csonkahegyhát",
    countyId: 19,
  },
  {
    zip: 7940,
    settlement: "Csonkamindszent",
    countyId: 2,
  },
  {
    zip: 8229,
    settlement: "Csopak",
    countyId: 18,
  },
  {
    zip: 8041,
    settlement: "Csór",
    countyId: 6,
  },
  {
    zip: 9300,
    settlement: "Csorna",
    countyId: 7,
  },
  {
    zip: 5920,
    settlement: "Csorvás",
    countyId: 3,
  },
  {
    zip: 8122,
    settlement: "Csõsz",
    countyId: 6,
  },
  {
    zip: 8558,
    settlement: "Csót",
    countyId: 18,
  },
  {
    zip: 2615,
    settlement: "Csõvár",
    countyId: 13,
  },
  {
    zip: 8840,
    settlement: "Csurgó",
    countyId: 14,
  },
  {
    zip: 8840,
    settlement: "Csurgónagymarton",
    countyId: 14,
  },
  {
    zip: 8999,
    settlement: "Csöde",
    countyId: 19,
  },
  {
    zip: 8495,
    settlement: "Csögle",
    countyId: 18,
  },
  {
    zip: 4145,
    settlement: "Csökmõ",
    countyId: 8,
  },
  {
    zip: 7526,
    settlement: "Csököly",
    countyId: 14,
  },
  {
    zip: 8700,
    settlement: "Csömend",
    countyId: 14,
  },
  {
    zip: 8957,
    settlement: "Csömödér",
    countyId: 19,
  },
  {
    zip: 2141,
    settlement: "Csömör",
    countyId: 13,
  },
  {
    zip: 9513,
    settlement: "Csönge",
    countyId: 17,
  },
  {
    zip: 8873,
    settlement: "Csörnyeföld",
    countyId: 19,
  },
  {
    zip: 2135,
    settlement: "Csörög",
    countyId: 13,
  },
  {
    zip: 9962,
    settlement: "Csörötnek",
    countyId: 17,
  },
  {
    zip: 7843,
    settlement: "Cún",
    countyId: 2,
  },
  {
    zip: 2370,
    settlement: "Dabas",
    countyId: 13,
  },
  {
    zip: 2371,
    settlement: "Dabas",
    countyId: 13,
  },
  {
    zip: 2373,
    settlement: "Dabas",
    countyId: 13,
  },
  {
    zip: 8345,
    settlement: "Dabronc",
    countyId: 18,
  },
  {
    zip: 8485,
    settlement: "Dabrony",
    countyId: 18,
  },
  {
    zip: 2854,
    settlement: "Dad",
    countyId: 11,
  },
  {
    zip: 2522,
    settlement: "Dág",
    countyId: 11,
  },
  {
    zip: 8592,
    settlement: "Dáka",
    countyId: 18,
  },
  {
    zip: 7211,
    settlement: "Dalmand",
    countyId: 16,
  },
  {
    zip: 3780,
    settlement: "Damak",
    countyId: 4,
  },
  {
    zip: 3978,
    settlement: "Dámóc",
    countyId: 4,
  },
  {
    zip: 2735,
    settlement: "Dánszentmiklós",
    countyId: 13,
  },
  {
    zip: 2118,
    settlement: "Dány",
    countyId: 13,
  },
  {
    zip: 9917,
    settlement: "Daraboshegy",
    countyId: 17,
  },
  {
    zip: 7988,
    settlement: "Darány",
    countyId: 14,
  },
  {
    zip: 4737,
    settlement: "Darnó",
    countyId: 15,
  },
  {
    zip: 9232,
    settlement: "Darnózseli",
    countyId: 7,
  },
  {
    zip: 2423,
    settlement: "Daruszentmiklós",
    countyId: 6,
  },
  {
    zip: 4144,
    settlement: "Darvas",
    countyId: 8,
  },
  {
    zip: 6524,
    settlement: "Dávod",
    countyId: 1,
  },
  {
    zip: 2694,
    settlement: "Debercsény",
    countyId: 12,
  },
  {
    zip: 4000,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4002,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4024,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4025,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4026,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4027,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4028,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4029,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4030,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4031,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4032,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4033,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4034,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4063,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4078,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4079,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 4225,
    settlement: "Debrecen",
    countyId: 8,
  },
  {
    zip: 3825,
    settlement: "Debréte",
    countyId: 4,
  },
  {
    zip: 7144,
    settlement: "Decs",
    countyId: 16,
  },
  {
    zip: 3643,
    settlement: "Dédestapolcsány",
    countyId: 4,
  },
  {
    zip: 8135,
    settlement: "Dég",
    countyId: 6,
  },
  {
    zip: 2649,
    settlement: "Dejtár",
    countyId: 12,
  },
  {
    zip: 2337,
    settlement: "Délegyháza",
    countyId: 13,
  },
  {
    zip: 4516,
    settlement: "Demecser",
    countyId: 15,
  },
  {
    zip: 3395,
    settlement: "Demjén",
    countyId: 9,
  },
  {
    zip: 7915,
    settlement: "Dencsháza",
    countyId: 2,
  },
  {
    zip: 9365,
    settlement: "Dénesfa",
    countyId: 7,
  },
  {
    zip: 4130,
    settlement: "Derecske",
    countyId: 8,
  },
  {
    zip: 6621,
    settlement: "Derekegyház",
    countyId: 5,
  },
  {
    zip: 6772,
    settlement: "Deszk",
    countyId: 5,
  },
  {
    zip: 3834,
    settlement: "Detek",
    countyId: 4,
  },
  {
    zip: 3275,
    settlement: "Detk",
    countyId: 9,
  },
  {
    zip: 5510,
    settlement: "Dévaványa",
    countyId: 3,
  },
  {
    zip: 8460,
    settlement: "Devecser",
    countyId: 18,
  },
  {
    zip: 7683,
    settlement: "Dinnyeberki",
    countyId: 2,
  },
  {
    zip: 7072,
    settlement: "Diósberény",
    countyId: 16,
  },
  {
    zip: 2049,
    settlement: "Diósd",
    countyId: 13,
  },
  {
    zip: 2643,
    settlement: "Diósjenõ",
    countyId: 12,
  },
  {
    zip: 8764,
    settlement: "Dióskál",
    countyId: 19,
  },
  {
    zip: 7817,
    settlement: "Diósviszló",
    countyId: 2,
  },
  {
    zip: 8482,
    settlement: "Doba",
    countyId: 18,
  },
  {
    zip: 5624,
    settlement: "Doboz",
    countyId: 3,
  },
  {
    zip: 8874,
    settlement: "Dobri",
    countyId: 19,
  },
  {
    zip: 8989,
    settlement: "Dobronhegy",
    countyId: 19,
  },
  {
    zip: 6766,
    settlement: "Dóc",
    countyId: 5,
  },
  {
    zip: 3627,
    settlement: "Domaháza",
    countyId: 4,
  },
  {
    zip: 6781,
    settlement: "Domaszék",
    countyId: 5,
  },
  {
    zip: 5836,
    settlement: "Dombegyház",
    countyId: 3,
  },
  {
    zip: 5745,
    settlement: "Dombiratos",
    countyId: 3,
  },
  {
    zip: 7200,
    settlement: "Dombóvár",
    countyId: 16,
  },
  {
    zip: 4492,
    settlement: "Dombrád",
    countyId: 15,
  },
  {
    zip: 2182,
    settlement: "Domony",
    countyId: 13,
  },
  {
    zip: 3263,
    settlement: "Domoszló",
    countyId: 9,
  },
  {
    zip: 3374,
    settlement: "Dormánd",
    countyId: 9,
  },
  {
    zip: 2510,
    settlement: "Dorog",
    countyId: 11,
  },
  {
    zip: 3153,
    settlement: "Dorogháza",
    countyId: 12,
  },
  {
    zip: 9791,
    settlement: "Dozmat",
    countyId: 17,
  },
  {
    zip: 6342,
    settlement: "Drágszél",
    countyId: 1,
  },
  {
    zip: 7849,
    settlement: "Drávacsehi",
    countyId: 2,
  },
  {
    zip: 7846,
    settlement: "Drávacsepely",
    countyId: 2,
  },
  {
    zip: 7967,
    settlement: "Drávafok",
    countyId: 2,
  },
  {
    zip: 7977,
    settlement: "Drávagárdony",
    countyId: 14,
  },
  {
    zip: 7960,
    settlement: "Drávaiványi",
    countyId: 2,
  },
  {
    zip: 7967,
    settlement: "Drávakeresztúr",
    countyId: 2,
  },
  {
    zip: 7850,
    settlement: "Drávapalkonya",
    countyId: 2,
  },
  {
    zip: 7843,
    settlement: "Drávapiski",
    countyId: 2,
  },
  {
    zip: 7851,
    settlement: "Drávaszabolcs",
    countyId: 2,
  },
  {
    zip: 7847,
    settlement: "Drávaszerdahely",
    countyId: 2,
  },
  {
    zip: 7960,
    settlement: "Drávasztára",
    countyId: 2,
  },
  {
    zip: 7979,
    settlement: "Drávatamási",
    countyId: 14,
  },
  {
    zip: 2646,
    settlement: "Drégelypalánk",
    countyId: 12,
  },
  {
    zip: 3635,
    settlement: "Dubicsány",
    countyId: 4,
  },
  {
    zip: 8416,
    settlement: "Dudar",
    countyId: 18,
  },
  {
    zip: 9556,
    settlement: "Duka",
    countyId: 17,
  },
  {
    zip: 2545,
    settlement: "Dunaalmás",
    countyId: 11,
  },
  {
    zip: 2023,
    settlement: "Dunabogdány",
    countyId: 13,
  },
  {
    zip: 6323,
    settlement: "Dunaegyháza",
    countyId: 1,
  },
  {
    zip: 6513,
    settlement: "Dunafalva",
    countyId: 1,
  },
  {
    zip: 7020,
    settlement: "Dunaföldvár",
    countyId: 16,
  },
  {
    zip: 2330,
    settlement: "Dunaharaszti",
    countyId: 13,
  },
  {
    zip: 2120,
    settlement: "Dunakeszi",
    countyId: 13,
  },
  {
    zip: 9225,
    settlement: "Dunakiliti",
    countyId: 7,
  },
  {
    zip: 6328,
    settlement: "Dunapataj",
    countyId: 1,
  },
  {
    zip: 9235,
    settlement: "Dunaremete",
    countyId: 7,
  },
  {
    zip: 9174,
    settlement: "Dunaszeg",
    countyId: 7,
  },
  {
    zip: 7712,
    settlement: "Dunaszekcsõ",
    countyId: 2,
  },
  {
    zip: 6333,
    settlement: "Dunaszentbenedek",
    countyId: 1,
  },
  {
    zip: 7135,
    settlement: "Dunaszentgyörgy",
    countyId: 16,
  },
  {
    zip: 2897,
    settlement: "Dunaszentmiklós",
    countyId: 11,
  },
  {
    zip: 9175,
    settlement: "Dunaszentpál",
    countyId: 7,
  },
  {
    zip: 9226,
    settlement: "Dunasziget",
    countyId: 7,
  },
  {
    zip: 6325,
    settlement: "Dunatetétlen",
    countyId: 1,
  },
  {
    zip: 2400,
    settlement: "Dunaújváros",
    countyId: 6,
  },
  {
    zip: 2407,
    settlement: "Dunaújváros",
    countyId: 6,
  },
  {
    zip: 2336,
    settlement: "Dunavarsány",
    countyId: 13,
  },
  {
    zip: 6087,
    settlement: "Dunavecse",
    countyId: 1,
  },
  {
    zip: 6353,
    settlement: "Dusnok",
    countyId: 1,
  },
  {
    zip: 7224,
    settlement: "Dúzs",
    countyId: 16,
  },
  {
    zip: 8357,
    settlement: "Döbröce",
    countyId: 19,
  },
  {
    zip: 7228,
    settlement: "Döbrököz",
    countyId: 16,
  },
  {
    zip: 8597,
    settlement: "Döbrönte",
    countyId: 18,
  },
  {
    zip: 9914,
    settlement: "Döbörhegy",
    countyId: 17,
  },
  {
    zip: 4495,
    settlement: "Döge",
    countyId: 15,
  },
  {
    zip: 2344,
    settlement: "Dömsöd",
    countyId: 13,
  },
  {
    zip: 2027,
    settlement: "Dömös",
    countyId: 11,
  },
  {
    zip: 9147,
    settlement: "Dör",
    countyId: 7,
  },
  {
    zip: 8244,
    settlement: "Dörgicse",
    countyId: 18,
  },
  {
    zip: 9913,
    settlement: "Döröske",
    countyId: 17,
  },
  {
    zip: 8799,
    settlement: "Dötk",
    countyId: 19,
  },
  {
    zip: 3721,
    settlement: "Dövény",
    countyId: 4,
  },
  {
    zip: 9451,
    settlement: "Ebergõc",
    countyId: 7,
  },
  {
    zip: 4211,
    settlement: "Ebes",
    countyId: 8,
  },
  {
    zip: 9083,
    settlement: "Écs",
    countyId: 7,
  },
  {
    zip: 3013,
    settlement: "Ecséd",
    countyId: 9,
  },
  {
    zip: 3053,
    settlement: "Ecseg",
    countyId: 12,
  },
  {
    zip: 5515,
    settlement: "Ecsegfalva",
    countyId: 3,
  },
  {
    zip: 7457,
    settlement: "Ecseny",
    countyId: 14,
  },
  {
    zip: 2233,
    settlement: "Ecser",
    countyId: 13,
  },
  {
    zip: 7443,
    settlement: "Edde",
    countyId: 14,
  },
  {
    zip: 3780,
    settlement: "Edelény",
    countyId: 4,
  },
  {
    zip: 3783,
    settlement: "Edelény",
    countyId: 4,
  },
  {
    zip: 9343,
    settlement: "Edve",
    countyId: 7,
  },
  {
    zip: 3300,
    settlement: "Eger",
    countyId: 9,
  },
  {
    zip: 3304,
    settlement: "Eger",
    countyId: 9,
  },
  {
    zip: 7763,
    settlement: "Egerág",
    countyId: 2,
  },
  {
    zip: 8497,
    settlement: "Egeralja",
    countyId: 18,
  },
  {
    zip: 8765,
    settlement: "Egeraracsa",
    countyId: 19,
  },
  {
    zip: 3321,
    settlement: "Egerbakta",
    countyId: 9,
  },
  {
    zip: 3337,
    settlement: "Egerbocs",
    countyId: 9,
  },
  {
    zip: 3341,
    settlement: "Egercsehi",
    countyId: 9,
  },
  {
    zip: 3379,
    settlement: "Egerfarmos",
    countyId: 9,
  },
  {
    zip: 3461,
    settlement: "Egerlövõ",
    countyId: 4,
  },
  {
    zip: 3394,
    settlement: "Egerszalók",
    countyId: 9,
  },
  {
    zip: 3328,
    settlement: "Egerszólát",
    countyId: 9,
  },
  {
    zip: 3757,
    settlement: "Égerszög",
    countyId: 4,
  },
  {
    zip: 8913,
    settlement: "Egervár",
    countyId: 19,
  },
  {
    zip: 9684,
    settlement: "Egervölgy",
    countyId: 17,
  },
  {
    zip: 9314,
    settlement: "Egyed",
    countyId: 7,
  },
  {
    zip: 4067,
    settlement: "Egyek",
    countyId: 8,
  },
  {
    zip: 4069,
    settlement: "Egyek",
    countyId: 8,
  },
  {
    zip: 3043,
    settlement: "Egyházasdengeleg",
    countyId: 12,
  },
  {
    zip: 9473,
    settlement: "Egyházasfalu",
    countyId: 7,
  },
  {
    zip: 3185,
    settlement: "Egyházasgerge",
    countyId: 12,
  },
  {
    zip: 7824,
    settlement: "Egyházasharaszti",
    countyId: 2,
  },
  {
    zip: 9554,
    settlement: "Egyházashetye",
    countyId: 17,
  },
  {
    zip: 9781,
    settlement: "Egyházashollós",
    countyId: 17,
  },
  {
    zip: 8523,
    settlement: "Egyházaskeszõ",
    countyId: 18,
  },
  {
    zip: 7347,
    settlement: "Egyházaskozár",
    countyId: 2,
  },
  {
    zip: 9783,
    settlement: "Egyházasrádóc",
    countyId: 17,
  },
  {
    zip: 5742,
    settlement: "Elek",
    countyId: 3,
  },
  {
    zip: 7744,
    settlement: "Ellend",
    countyId: 2,
  },
  {
    zip: 2424,
    settlement: "Elõszállás",
    countyId: 6,
  },
  {
    zip: 3432,
    settlement: "Emõd",
    countyId: 4,
  },
  {
    zip: 3854,
    settlement: "Encs",
    countyId: 4,
  },
  {
    zip: 3860,
    settlement: "Encs",
    countyId: 4,
  },
  {
    zip: 4374,
    settlement: "Encsencs",
    countyId: 15,
  },
  {
    zip: 3165,
    settlement: "Endrefalva",
    countyId: 12,
  },
  {
    zip: 7973,
    settlement: "Endrõc",
    countyId: 2,
  },
  {
    zip: 9143,
    settlement: "Enese",
    countyId: 7,
  },
  {
    zip: 8130,
    settlement: "Enying",
    countyId: 6,
  },
  {
    zip: 8131,
    settlement: "Enying",
    countyId: 6,
  },
  {
    zip: 6624,
    settlement: "Eperjes",
    countyId: 5,
  },
  {
    zip: 4646,
    settlement: "Eperjeske",
    countyId: 15,
  },
  {
    zip: 8413,
    settlement: "Eplény",
    countyId: 18,
  },
  {
    zip: 2526,
    settlement: "Epöl",
    countyId: 11,
  },
  {
    zip: 2451,
    settlement: "Ercsi",
    countyId: 6,
  },
  {
    zip: 2453,
    settlement: "Ercsi",
    countyId: 6,
  },
  {
    zip: 2030,
    settlement: "Érd",
    countyId: 13,
  },
  {
    zip: 2035,
    settlement: "Érd",
    countyId: 13,
  },
  {
    zip: 2036,
    settlement: "Érd",
    countyId: 13,
  },
  {
    zip: 3932,
    settlement: "Erdõbénye",
    countyId: 4,
  },
  {
    zip: 3935,
    settlement: "Erdõhorváti",
    countyId: 4,
  },
  {
    zip: 2113,
    settlement: "Erdõkertes",
    countyId: 13,
  },
  {
    zip: 2176,
    settlement: "Erdõkürt",
    countyId: 12,
  },
  {
    zip: 3252,
    settlement: "Erdõkövesd",
    countyId: 9,
  },
  {
    zip: 7735,
    settlement: "Erdõsmárok",
    countyId: 2,
  },
  {
    zip: 7723,
    settlement: "Erdõsmecske",
    countyId: 2,
  },
  {
    zip: 2177,
    settlement: "Erdõtarcsa",
    countyId: 12,
  },
  {
    zip: 3358,
    settlement: "Erdõtelek",
    countyId: 9,
  },
  {
    zip: 3295,
    settlement: "Erk",
    countyId: 9,
  },
  {
    zip: 4245,
    settlement: "Érpatak",
    countyId: 15,
  },
  {
    zip: 6347,
    settlement: "Érsekcsanád",
    countyId: 1,
  },
  {
    zip: 6348,
    settlement: "Érsekhalma",
    countyId: 1,
  },
  {
    zip: 2659,
    settlement: "Érsekvadkert",
    countyId: 12,
  },
  {
    zip: 7093,
    settlement: "Értény",
    countyId: 16,
  },
  {
    zip: 7661,
    settlement: "Erzsébet",
    countyId: 2,
  },
  {
    zip: 4124,
    settlement: "Esztár",
    countyId: 8,
  },
  {
    zip: 8882,
    settlement: "Eszteregnye",
    countyId: 19,
  },
  {
    zip: 8742,
    settlement: "Esztergályhorváti",
    countyId: 19,
  },
  {
    zip: 2500,
    settlement: "Esztergom",
    countyId: 11,
  },
  {
    zip: 2509,
    settlement: "Esztergom",
    countyId: 11,
  },
  {
    zip: 2947,
    settlement: "Ete",
    countyId: 11,
  },
  {
    zip: 3136,
    settlement: "Etes",
    countyId: 12,
  },
  {
    zip: 2091,
    settlement: "Etyek",
    countyId: 6,
  },
  {
    zip: 4354,
    settlement: "Fábiánháza",
    countyId: 15,
  },
  {
    zip: 6625,
    settlement: "Fábiánsebestyén",
    countyId: 5,
  },
  {
    zip: 7136,
    settlement: "Fácánkert",
    countyId: 16,
  },
  {
    zip: 7133,
    settlement: "Fadd",
    countyId: 16,
  },
  {
    zip: 7139,
    settlement: "Fadd",
    countyId: 16,
  },
  {
    zip: 3865,
    settlement: "Fáj",
    countyId: 4,
  },
  {
    zip: 6352,
    settlement: "Fajsz",
    countyId: 1,
  },
  {
    zip: 3855,
    settlement: "Fancsal",
    countyId: 4,
  },
  {
    zip: 9321,
    settlement: "Farád",
    countyId: 7,
  },
  {
    zip: 8582,
    settlement: "Farkasgyepû",
    countyId: 18,
  },
  {
    zip: 3608,
    settlement: "Farkaslyuk",
    countyId: 4,
  },
  {
    zip: 2765,
    settlement: "Farmos",
    countyId: 13,
  },
  {
    zip: 7732,
    settlement: "Fazekasboda",
    countyId: 2,
  },
  {
    zip: 3255,
    settlement: "Fedémes",
    countyId: 9,
  },
  {
    zip: 5213,
    settlement: "Fegyvernek",
    countyId: 10,
  },
  {
    zip: 5231,
    settlement: "Fegyvernek",
    countyId: 10,
  },
  {
    zip: 4900,
    settlement: "Fehérgyarmat",
    countyId: 15,
  },
  {
    zip: 9163,
    settlement: "Fehértó",
    countyId: 7,
  },
  {
    zip: 8052,
    settlement: "Fehérvárcsurgó",
    countyId: 6,
  },
  {
    zip: 7724,
    settlement: "Feked",
    countyId: 2,
  },
  {
    zip: 9211,
    settlement: "Feketeerdõ",
    countyId: 7,
  },
  {
    zip: 8086,
    settlement: "Felcsút",
    countyId: 6,
  },
  {
    zip: 3352,
    settlement: "Feldebrõ",
    countyId: 9,
  },
  {
    zip: 6645,
    settlement: "Felgyõ",
    countyId: 5,
  },
  {
    zip: 9122,
    settlement: "Felpéc",
    countyId: 7,
  },
  {
    zip: 3985,
    settlement: "Felsõberecki",
    countyId: 4,
  },
  {
    zip: 9794,
    settlement: "Felsõcsatár",
    countyId: 17,
  },
  {
    zip: 3847,
    settlement: "Felsõdobsza",
    countyId: 4,
  },
  {
    zip: 7370,
    settlement: "Felsõegerszeg",
    countyId: 2,
  },
  {
    zip: 3837,
    settlement: "Felsõgagy",
    countyId: 4,
  },
  {
    zip: 9934,
    settlement: "Felsõjánosfa",
    countyId: 17,
  },
  {
    zip: 3722,
    settlement: "Felsõkelecsény",
    countyId: 4,
  },
  {
    zip: 6055,
    settlement: "Felsõlajos",
    countyId: 1,
  },
  {
    zip: 9918,
    settlement: "Felsõmarác",
    countyId: 17,
  },
  {
    zip: 7456,
    settlement: "Felsõmocsolád",
    countyId: 14,
  },
  {
    zip: 7175,
    settlement: "Felsõnána",
    countyId: 16,
  },
  {
    zip: 3721,
    settlement: "Felsõnyárád",
    countyId: 4,
  },
  {
    zip: 7099,
    settlement: "Felsõnyék",
    countyId: 16,
  },
  {
    zip: 8380,
    settlement: "Felsõpáhok",
    countyId: 19,
  },
  {
    zip: 2363,
    settlement: "Felsõpakony",
    countyId: 13,
  },
  {
    zip: 2611,
    settlement: "Felsõpetény",
    countyId: 12,
  },
  {
    zip: 8767,
    settlement: "Felsõrajk",
    countyId: 19,
  },
  {
    zip: 3989,
    settlement: "Felsõregmec",
    countyId: 4,
  },
  {
    zip: 8973,
    settlement: "Felsõszenterzsébet",
    countyId: 19,
  },
  {
    zip: 6447,
    settlement: "Felsõszentiván",
    countyId: 1,
  },
  {
    zip: 7968,
    settlement: "Felsõszentmárton",
    countyId: 2,
  },
  {
    zip: 9985,
    settlement: "Felsõszölnök",
    countyId: 17,
  },
  {
    zip: 3324,
    settlement: "Felsõtárkány",
    countyId: 9,
  },
  {
    zip: 3735,
    settlement: "Felsõtelekes",
    countyId: 4,
  },
  {
    zip: 3067,
    settlement: "Felsõtold",
    countyId: 12,
  },
  {
    zip: 3814,
    settlement: "Felsõvadász",
    countyId: 4,
  },
  {
    zip: 3561,
    settlement: "Felsõzsolca",
    countyId: 4,
  },
  {
    zip: 8227,
    settlement: "Felsõörs",
    countyId: 18,
  },
  {
    zip: 4621,
    settlement: "Fényeslitke",
    countyId: 15,
  },
  {
    zip: 8432,
    settlement: "Fenyõfõ",
    countyId: 7,
  },
  {
    zip: 6774,
    settlement: "Ferencszállás",
    countyId: 5,
  },
  {
    zip: 9493,
    settlement: "Fertõboz",
    countyId: 7,
  },
  {
    zip: 9431,
    settlement: "Fertõd",
    countyId: 7,
  },
  {
    zip: 9433,
    settlement: "Fertõd",
    countyId: 7,
  },
  {
    zip: 9442,
    settlement: "Fertõendréd",
    countyId: 7,
  },
  {
    zip: 9492,
    settlement: "Fertõhomok",
    countyId: 7,
  },
  {
    zip: 9421,
    settlement: "Fertõrákos",
    countyId: 7,
  },
  {
    zip: 9444,
    settlement: "Fertõszentmiklós",
    countyId: 7,
  },
  {
    zip: 9436,
    settlement: "Fertõszéplak",
    countyId: 7,
  },
  {
    zip: 7282,
    settlement: "Fiad",
    countyId: 14,
  },
  {
    zip: 3994,
    settlement: "Filkeháza",
    countyId: 4,
  },
  {
    zip: 8835,
    settlement: "Fityeház",
    countyId: 19,
  },
  {
    zip: 6331,
    settlement: "Foktõ",
    countyId: 1,
  },
  {
    zip: 4090,
    settlement: "Folyás",
    countyId: 8,
  },
  {
    zip: 7271,
    settlement: "Fonó",
    countyId: 14,
  },
  {
    zip: 3893,
    settlement: "Fony",
    countyId: 4,
  },
  {
    zip: 8732,
    settlement: "Fõnyed",
    countyId: 14,
  },
  {
    zip: 8640,
    settlement: "Fonyód",
    countyId: 14,
  },
  {
    zip: 8644,
    settlement: "Fonyód",
    countyId: 14,
  },
  {
    zip: 6793,
    settlement: "Forráskút",
    countyId: 5,
  },
  {
    zip: 3849,
    settlement: "Forró",
    countyId: 4,
  },
  {
    zip: 2151,
    settlement: "Fót",
    countyId: 13,
  },
  {
    zip: 3864,
    settlement: "Fulókércs",
    countyId: 4,
  },
  {
    zip: 4141,
    settlement: "Furta",
    countyId: 8,
  },
  {
    zip: 8157,
    settlement: "Füle",
    countyId: 6,
  },
  {
    zip: 4964,
    settlement: "Fülesd",
    countyId: 15,
  },
  {
    zip: 4754,
    settlement: "Fülpösdaróc",
    countyId: 15,
  },
  {
    zip: 4266,
    settlement: "Fülöp",
    countyId: 8,
  },
  {
    zip: 6042,
    settlement: "Fülöpháza",
    countyId: 1,
  },
  {
    zip: 6116,
    settlement: "Fülöpjakab",
    countyId: 1,
  },
  {
    zip: 6085,
    settlement: "Fülöpszállás",
    countyId: 1,
  },
  {
    zip: 7087,
    settlement: "Fürged",
    countyId: 16,
  },
  {
    zip: 3996,
    settlement: "Füzér",
    countyId: 4,
  },
  {
    zip: 3994,
    settlement: "Füzérkajata",
    countyId: 4,
  },
  {
    zip: 3997,
    settlement: "Füzérkomlós",
    countyId: 4,
  },
  {
    zip: 3993,
    settlement: "Füzérradvány",
    countyId: 4,
  },
  {
    zip: 3390,
    settlement: "Füzesabony",
    countyId: 9,
  },
  {
    zip: 5525,
    settlement: "Füzesgyarmat",
    countyId: 3,
  },
  {
    zip: 8777,
    settlement: "Füzvölgy",
    countyId: 19,
  },
  {
    zip: 6922,
    settlement: "Földeák",
    countyId: 5,
  },
  {
    zip: 4177,
    settlement: "Földes",
    countyId: 8,
  },
  {
    zip: 4122,
    settlement: "Gáborján",
    countyId: 8,
  },
  {
    zip: 8969,
    settlement: "Gáborjánháza",
    countyId: 19,
  },
  {
    zip: 4972,
    settlement: "Gacsály",
    countyId: 15,
  },
  {
    zip: 7276,
    settlement: "Gadács",
    countyId: 14,
  },
  {
    zip: 8716,
    settlement: "Gadány",
    countyId: 14,
  },
  {
    zip: 3815,
    settlement: "Gadna",
    countyId: 4,
  },
  {
    zip: 5932,
    settlement: "Gádoros",
    countyId: 3,
  },
  {
    zip: 3837,
    settlement: "Gagyapáti",
    countyId: 4,
  },
  {
    zip: 3817,
    settlement: "Gagybátor",
    countyId: 4,
  },
  {
    zip: 3816,
    settlement: "Gagyvendégi",
    countyId: 4,
  },
  {
    zip: 8754,
    settlement: "Galambok",
    countyId: 19,
  },
  {
    zip: 2686,
    settlement: "Galgaguta",
    countyId: 12,
  },
  {
    zip: 2681,
    settlement: "Galgagyörk",
    countyId: 13,
  },
  {
    zip: 2193,
    settlement: "Galgahévíz",
    countyId: 13,
  },
  {
    zip: 2183,
    settlement: "Galgamácsa",
    countyId: 13,
  },
  {
    zip: 7473,
    settlement: "Gálosfa",
    countyId: 14,
  },
  {
    zip: 3752,
    settlement: "Galvács",
    countyId: 4,
  },
  {
    zip: 8685,
    settlement: "Gamás",
    countyId: 14,
  },
  {
    zip: 8597,
    settlement: "Ganna",
    countyId: 18,
  },
  {
    zip: 8082,
    settlement: "Gánt",
    countyId: 6,
  },
  {
    zip: 6522,
    settlement: "Gara",
    countyId: 1,
  },
  {
    zip: 3067,
    settlement: "Garáb",
    countyId: 12,
  },
  {
    zip: 8747,
    settlement: "Garabonc",
    countyId: 19,
  },
  {
    zip: 3873,
    settlement: "Garadna",
    countyId: 4,
  },
  {
    zip: 4976,
    settlement: "Garbolc",
    countyId: 15,
  },
  {
    zip: 2483,
    settlement: "Gárdony",
    countyId: 6,
  },
  {
    zip: 2484,
    settlement: "Gárdony",
    countyId: 6,
  },
  {
    zip: 2485,
    settlement: "Gárdony",
    countyId: 6,
  },
  {
    zip: 7812,
    settlement: "Garé",
    countyId: 2,
  },
  {
    zip: 9952,
    settlement: "Gasztony",
    countyId: 17,
  },
  {
    zip: 6111,
    settlement: "Gátér",
    countyId: 1,
  },
  {
    zip: 4471,
    settlement: "Gávavencsellõ",
    countyId: 15,
  },
  {
    zip: 4472,
    settlement: "Gávavencsellõ",
    countyId: 15,
  },
  {
    zip: 4754,
    settlement: "Géberjén",
    countyId: 15,
  },
  {
    zip: 8543,
    settlement: "Gecse",
    countyId: 18,
  },
  {
    zip: 6334,
    settlement: "Géderlak",
    countyId: 1,
  },
  {
    zip: 4517,
    settlement: "Gégény",
    countyId: 15,
  },
  {
    zip: 3444,
    settlement: "Gelej",
    countyId: 4,
  },
  {
    zip: 4935,
    settlement: "Gelénes",
    countyId: 15,
  },
  {
    zip: 8981,
    settlement: "Gellénháza",
    countyId: 19,
  },
  {
    zip: 8774,
    settlement: "Gelse",
    countyId: 19,
  },
  {
    zip: 8774,
    settlement: "Gelsesziget",
    countyId: 19,
  },
  {
    zip: 4567,
    settlement: "Gemzse",
    countyId: 15,
  },
  {
    zip: 9721,
    settlement: "Gencsapáti",
    countyId: 17,
  },
  {
    zip: 9672,
    settlement: "Gérce",
    countyId: 17,
  },
  {
    zip: 7951,
    settlement: "Gerde",
    countyId: 2,
  },
  {
    zip: 5925,
    settlement: "Gerendás",
    countyId: 3,
  },
  {
    zip: 7362,
    settlement: "Gerényes",
    countyId: 2,
  },
  {
    zip: 7733,
    settlement: "Geresdlak",
    countyId: 2,
  },
  {
    zip: 7134,
    settlement: "Gerjen",
    countyId: 16,
  },
  {
    zip: 9813,
    settlement: "Gersekarát",
    countyId: 17,
  },
  {
    zip: 5734,
    settlement: "Geszt",
    countyId: 3,
  },
  {
    zip: 3715,
    settlement: "Gesztely",
    countyId: 4,
  },
  {
    zip: 3923,
    settlement: "Gesztely",
    countyId: 4,
  },
  {
    zip: 4232,
    settlement: "Geszteréd",
    countyId: 15,
  },
  {
    zip: 8762,
    settlement: "Gétye",
    countyId: 19,
  },
  {
    zip: 8435,
    settlement: "Gic",
    countyId: 18,
  },
  {
    zip: 7527,
    settlement: "Gige",
    countyId: 14,
  },
  {
    zip: 7954,
    settlement: "Gilvánfa",
    countyId: 2,
  },
  {
    zip: 3578,
    settlement: "Girincs",
    countyId: 4,
  },
  {
    zip: 8346,
    settlement: "Gógánfa",
    countyId: 18,
  },
  {
    zip: 3906,
    settlement: "Golop",
    countyId: 4,
  },
  {
    zip: 2217,
    settlement: "Gomba",
    countyId: 13,
  },
  {
    zip: 8984,
    settlement: "Gombosszeg",
    countyId: 19,
  },
  {
    zip: 9625,
    settlement: "Gór",
    countyId: 17,
  },
  {
    zip: 7853,
    settlement: "Gordisa",
    countyId: 2,
  },
  {
    zip: 8913,
    settlement: "Gõsfa",
    countyId: 19,
  },
  {
    zip: 8978,
    settlement: "Gosztola",
    countyId: 19,
  },
  {
    zip: 7162,
    settlement: "Grábóc",
    countyId: 16,
  },
  {
    zip: 4842,
    settlement: "Gulács",
    countyId: 15,
  },
  {
    zip: 8951,
    settlement: "Gutorfölde",
    countyId: 19,
  },
  {
    zip: 2360,
    settlement: "Gyál",
    countyId: 13,
  },
  {
    zip: 9474,
    settlement: "Gyalóka",
    countyId: 7,
  },
  {
    zip: 9774,
    settlement: "Gyanógeregye",
    countyId: 17,
  },
  {
    zip: 9126,
    settlement: "Gyarmat",
    countyId: 7,
  },
  {
    zip: 8851,
    settlement: "Gyékényes",
    countyId: 14,
  },
  {
    zip: 8315,
    settlement: "Gyenesdiás",
    countyId: 19,
  },
  {
    zip: 8473,
    settlement: "Gyepükaján",
    countyId: 18,
  },
  {
    zip: 2821,
    settlement: "Gyermely",
    countyId: 11,
  },
  {
    zip: 7668,
    settlement: "Gyód",
    countyId: 2,
  },
  {
    zip: 5500,
    settlement: "Gyomaendrõd",
    countyId: 3,
  },
  {
    zip: 5502,
    settlement: "Gyomaendrõd",
    countyId: 3,
  },
  {
    zip: 9000,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9011,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9012,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9019,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9021,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9022,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9023,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9024,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9025,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9026,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9027,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9028,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9029,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9030,
    settlement: "Gyõr",
    countyId: 7,
  },
  {
    zip: 9093,
    settlement: "Gyõrasszonyfa",
    countyId: 7,
  },
  {
    zip: 9173,
    settlement: "Gyõrladamér",
    countyId: 7,
  },
  {
    zip: 9363,
    settlement: "Gyóró",
    countyId: 7,
  },
  {
    zip: 9084,
    settlement: "Gyõrság",
    countyId: 7,
  },
  {
    zip: 9121,
    settlement: "Gyõrszemere",
    countyId: 7,
  },
  {
    zip: 9161,
    settlement: "Gyõrsövényház",
    countyId: 7,
  },
  {
    zip: 4752,
    settlement: "Gyõrtelek",
    countyId: 15,
  },
  {
    zip: 9081,
    settlement: "Gyõrújbarát",
    countyId: 7,
  },
  {
    zip: 9171,
    settlement: "Gyõrújfalu",
    countyId: 7,
  },
  {
    zip: 9821,
    settlement: "Gyõrvár",
    countyId: 17,
  },
  {
    zip: 9172,
    settlement: "Gyõrzámoly",
    countyId: 7,
  },
  {
    zip: 4625,
    settlement: "Gyõröcske",
    countyId: 15,
  },
  {
    zip: 8692,
    settlement: "Gyugy",
    countyId: 14,
  },
  {
    zip: 5700,
    settlement: "Gyula",
    countyId: 3,
  },
  {
    zip: 5703,
    settlement: "Gyula",
    countyId: 3,
  },
  {
    zip: 5711,
    settlement: "Gyula",
    countyId: 3,
  },
  {
    zip: 4545,
    settlement: "Gyulaháza",
    countyId: 15,
  },
  {
    zip: 7227,
    settlement: "Gyulaj",
    countyId: 16,
  },
  {
    zip: 8286,
    settlement: "Gyulakeszi",
    countyId: 18,
  },
  {
    zip: 2464,
    settlement: "Gyúró",
    countyId: 6,
  },
  {
    zip: 8932,
    settlement: "Gyûrûs",
    countyId: 19,
  },
  {
    zip: 4733,
    settlement: "Gyügye",
    countyId: 15,
  },
  {
    zip: 4813,
    settlement: "Gyüre",
    countyId: 15,
  },
  {
    zip: 2230,
    settlement: "Gyömrõ",
    countyId: 13,
  },
  {
    zip: 9124,
    settlement: "Gyömöre",
    countyId: 7,
  },
  {
    zip: 7954,
    settlement: "Gyöngyfa",
    countyId: 2,
  },
  {
    zip: 3200,
    settlement: "Gyöngyös",
    countyId: 9,
  },
  {
    zip: 3221,
    settlement: "Gyöngyös",
    countyId: 9,
  },
  {
    zip: 3232,
    settlement: "Gyöngyös",
    countyId: 9,
  },
  {
    zip: 3233,
    settlement: "Gyöngyös",
    countyId: 9,
  },
  {
    zip: 9723,
    settlement: "Gyöngyösfalu",
    countyId: 17,
  },
  {
    zip: 3212,
    settlement: "Gyöngyöshalász",
    countyId: 9,
  },
  {
    zip: 7972,
    settlement: "Gyöngyösmellék",
    countyId: 2,
  },
  {
    zip: 3211,
    settlement: "Gyöngyösoroszi",
    countyId: 9,
  },
  {
    zip: 3035,
    settlement: "Gyöngyöspata",
    countyId: 9,
  },
  {
    zip: 3231,
    settlement: "Gyöngyössolymos",
    countyId: 9,
  },
  {
    zip: 3036,
    settlement: "Gyöngyöstarján",
    countyId: 9,
  },
  {
    zip: 7064,
    settlement: "Gyönk",
    countyId: 16,
  },
  {
    zip: 7352,
    settlement: "Györe",
    countyId: 16,
  },
  {
    zip: 3954,
    settlement: "Györgytarló",
    countyId: 4,
  },
  {
    zip: 7045,
    settlement: "Györköny",
    countyId: 16,
  },
  {
    zip: 2131,
    settlement: "Göd",
    countyId: 13,
  },
  {
    zip: 2132,
    settlement: "Göd",
    countyId: 13,
  },
  {
    zip: 7385,
    settlement: "Gödre",
    countyId: 2,
  },
  {
    zip: 7386,
    settlement: "Gödre",
    countyId: 2,
  },
  {
    zip: 2100,
    settlement: "Gödöllõ",
    countyId: 13,
  },
  {
    zip: 7272,
    settlement: "Gölle",
    countyId: 14,
  },
  {
    zip: 3728,
    settlement: "Gömörszõlõs",
    countyId: 4,
  },
  {
    zip: 3895,
    settlement: "Gönc",
    countyId: 4,
  },
  {
    zip: 3894,
    settlement: "Göncruszka",
    countyId: 4,
  },
  {
    zip: 9071,
    settlement: "Gönyû",
    countyId: 7,
  },
  {
    zip: 4075,
    settlement: "Görbeháza",
    countyId: 8,
  },
  {
    zip: 7833,
    settlement: "Görcsöny",
    countyId: 2,
  },
  {
    zip: 7728,
    settlement: "Görcsönydoboka",
    countyId: 2,
  },
  {
    zip: 7553,
    settlement: "Görgeteg",
    countyId: 14,
  },
  {
    zip: 8694,
    settlement: "Hács",
    countyId: 14,
  },
  {
    zip: 8992,
    settlement: "Hagyárosbörönd",
    countyId: 19,
  },
  {
    zip: 8771,
    settlement: "Hahót",
    countyId: 19,
  },
  {
    zip: 4273,
    settlement: "Hajdúbagos",
    countyId: 8,
  },
  {
    zip: 4074,
    settlement: "Hajdúböszörmény",
    countyId: 8,
  },
  {
    zip: 4086,
    settlement: "Hajdúböszörmény",
    countyId: 8,
  },
  {
    zip: 4220,
    settlement: "Hajdúböszörmény",
    countyId: 8,
  },
  {
    zip: 4224,
    settlement: "Hajdúböszörmény",
    countyId: 8,
  },
  {
    zip: 4087,
    settlement: "Hajdúdorog",
    countyId: 8,
  },
  {
    zip: 4242,
    settlement: "Hajdúhadház",
    countyId: 8,
  },
  {
    zip: 4080,
    settlement: "Hajdúnánás",
    countyId: 8,
  },
  {
    zip: 4085,
    settlement: "Hajdúnánás",
    countyId: 8,
  },
  {
    zip: 4251,
    settlement: "Hajdúsámson",
    countyId: 8,
  },
  {
    zip: 4200,
    settlement: "Hajdúszoboszló",
    countyId: 8,
  },
  {
    zip: 4212,
    settlement: "Hajdúszovát",
    countyId: 8,
  },
  {
    zip: 7473,
    settlement: "Hajmás",
    countyId: 14,
  },
  {
    zip: 8192,
    settlement: "Hajmáskér",
    countyId: 18,
  },
  {
    zip: 6344,
    settlement: "Hajós",
    countyId: 1,
  },
  {
    zip: 9814,
    settlement: "Halastó",
    countyId: 17,
  },
  {
    zip: 9228,
    settlement: "Halászi",
    countyId: 7,
  },
  {
    zip: 2314,
    settlement: "Halásztelek",
    countyId: 13,
  },
  {
    zip: 8452,
    settlement: "Halimba",
    countyId: 18,
  },
  {
    zip: 3842,
    settlement: "Halmaj",
    countyId: 4,
  },
  {
    zip: 3273,
    settlement: "Halmajugra",
    countyId: 9,
  },
  {
    zip: 9917,
    settlement: "Halogy",
    countyId: 17,
  },
  {
    zip: 3795,
    settlement: "Hangács",
    countyId: 4,
  },
  {
    zip: 3626,
    settlement: "Hangony",
    countyId: 4,
  },
  {
    zip: 2434,
    settlement: "Hantos",
    countyId: 6,
  },
  {
    zip: 9784,
    settlement: "Harasztifalu",
    countyId: 17,
  },
  {
    zip: 7172,
    settlement: "Harc",
    countyId: 16,
  },
  {
    zip: 9422,
    settlement: "Harka",
    countyId: 7,
  },
  {
    zip: 6136,
    settlement: "Harkakötöny",
    countyId: 1,
  },
  {
    zip: 7815,
    settlement: "Harkány",
    countyId: 2,
  },
  {
    zip: 7585,
    settlement: "Háromfa",
    countyId: 14,
  },
  {
    zip: 3936,
    settlement: "Háromhuta",
    countyId: 4,
  },
  {
    zip: 3555,
    settlement: "Harsány",
    countyId: 4,
  },
  {
    zip: 8442,
    settlement: "Hárskút",
    countyId: 18,
  },
  {
    zip: 6326,
    settlement: "Harta",
    countyId: 1,
  },
  {
    zip: 6327,
    settlement: "Harta",
    countyId: 1,
  },
  {
    zip: 7745,
    settlement: "Hásságy",
    countyId: 2,
  },
  {
    zip: 3000,
    settlement: "Hatvan",
    countyId: 9,
  },
  {
    zip: 9178,
    settlement: "Hédervár",
    countyId: 7,
  },
  {
    zip: 7533,
    settlement: "Hedrehely",
    countyId: 14,
  },
  {
    zip: 8296,
    settlement: "Hegyesd",
    countyId: 18,
  },
  {
    zip: 9222,
    settlement: "Hegyeshalom",
    countyId: 7,
  },
  {
    zip: 9631,
    settlement: "Hegyfalu",
    countyId: 17,
  },
  {
    zip: 9915,
    settlement: "Hegyháthodász",
    countyId: 17,
  },
  {
    zip: 7348,
    settlement: "Hegyhátmaróc",
    countyId: 2,
  },
  {
    zip: 9915,
    settlement: "Hegyhátsál",
    countyId: 17,
  },
  {
    zip: 9934,
    settlement: "Hegyhátszentjakab",
    countyId: 17,
  },
  {
    zip: 9931,
    settlement: "Hegyhátszentmárton",
    countyId: 17,
  },
  {
    zip: 9826,
    settlement: "Hegyhátszentpéter",
    countyId: 17,
  },
  {
    zip: 9437,
    settlement: "Hegykõ",
    countyId: 7,
  },
  {
    zip: 8265,
    settlement: "Hegymagas",
    countyId: 18,
  },
  {
    zip: 3786,
    settlement: "Hegymeg",
    countyId: 4,
  },
  {
    zip: 7837,
    settlement: "Hegyszentmárton",
    countyId: 2,
  },
  {
    zip: 3041,
    settlement: "Héhalom",
    countyId: 12,
  },
  {
    zip: 3892,
    settlement: "Hejce",
    countyId: 4,
  },
  {
    zip: 3593,
    settlement: "Hejõbába",
    countyId: 4,
  },
  {
    zip: 3597,
    settlement: "Hejõkeresztúr",
    countyId: 4,
  },
  {
    zip: 3588,
    settlement: "Hejõkürt",
    countyId: 4,
  },
  {
    zip: 3594,
    settlement: "Hejõpapi",
    countyId: 4,
  },
  {
    zip: 3595,
    settlement: "Hejõszalonta",
    countyId: 4,
  },
  {
    zip: 7683,
    settlement: "Helesfa",
    countyId: 2,
  },
  {
    zip: 6034,
    settlement: "Helvécia",
    countyId: 1,
  },
  {
    zip: 4123,
    settlement: "Hencida",
    countyId: 8,
  },
  {
    zip: 7532,
    settlement: "Hencse",
    countyId: 14,
  },
  {
    zip: 2053,
    settlement: "Herceghalom",
    countyId: 13,
  },
  {
    zip: 3958,
    settlement: "Hercegkút",
    countyId: 4,
  },
  {
    zip: 6525,
    settlement: "Hercegszántó",
    countyId: 1,
  },
  {
    zip: 3011,
    settlement: "Heréd",
    countyId: 9,
  },
  {
    zip: 2832,
    settlement: "Héreg",
    countyId: 11,
  },
  {
    zip: 2677,
    settlement: "Herencsény",
    countyId: 12,
  },
  {
    zip: 8440,
    settlement: "Herend",
    countyId: 18,
  },
  {
    zip: 7587,
    settlement: "Heresznye",
    countyId: 14,
  },
  {
    zip: 4735,
    settlement: "Hermánszeg",
    countyId: 15,
  },
  {
    zip: 2376,
    settlement: "Hernád",
    countyId: 13,
  },
  {
    zip: 3853,
    settlement: "Hernádbûd",
    countyId: 4,
  },
  {
    zip: 3887,
    settlement: "Hernádcéce",
    countyId: 4,
  },
  {
    zip: 3563,
    settlement: "Hernádkak",
    countyId: 4,
  },
  {
    zip: 3846,
    settlement: "Hernádkércs",
    countyId: 4,
  },
  {
    zip: 3564,
    settlement: "Hernádnémeti",
    countyId: 4,
  },
  {
    zip: 3874,
    settlement: "Hernádpetri",
    countyId: 4,
  },
  {
    zip: 3852,
    settlement: "Hernádszentandrás",
    countyId: 4,
  },
  {
    zip: 3875,
    settlement: "Hernádszurdok",
    countyId: 4,
  },
  {
    zip: 3874,
    settlement: "Hernádvécse",
    countyId: 4,
  },
  {
    zip: 8957,
    settlement: "Hernyék",
    countyId: 19,
  },
  {
    zip: 3655,
    settlement: "Hét",
    countyId: 4,
  },
  {
    zip: 4843,
    settlement: "Hetefejércse",
    countyId: 15,
  },
  {
    zip: 7432,
    settlement: "Hetes",
    countyId: 14,
  },
  {
    zip: 7681,
    settlement: "Hetvehely",
    countyId: 2,
  },
  {
    zip: 8344,
    settlement: "Hetyefõ",
    countyId: 18,
  },
  {
    zip: 3360,
    settlement: "Heves",
    countyId: 9,
  },
  {
    zip: 3322,
    settlement: "Hevesaranyos",
    countyId: 9,
  },
  {
    zip: 3383,
    settlement: "Hevesvezekény",
    countyId: 9,
  },
  {
    zip: 8380,
    settlement: "Hévíz",
    countyId: 19,
  },
  {
    zip: 2192,
    settlement: "Hévízgyörk",
    countyId: 13,
  },
  {
    zip: 7696,
    settlement: "Hidas",
    countyId: 2,
  },
  {
    zip: 3876,
    settlement: "Hidasnémeti",
    countyId: 4,
  },
  {
    zip: 8247,
    settlement: "Hidegkút",
    countyId: 18,
  },
  {
    zip: 9491,
    settlement: "Hidegség",
    countyId: 7,
  },
  {
    zip: 3768,
    settlement: "Hidvégardó",
    countyId: 4,
  },
  {
    zip: 7735,
    settlement: "Himesháza",
    countyId: 2,
  },
  {
    zip: 9362,
    settlement: "Himod",
    countyId: 7,
  },
  {
    zip: 7838,
    settlement: "Hirics",
    countyId: 2,
  },
  {
    zip: 7971,
    settlement: "Hobol",
    countyId: 2,
  },
  {
    zip: 4334,
    settlement: "Hodász",
    countyId: 15,
  },
  {
    zip: 6800,
    settlement: "Hódmezõvásárhely",
    countyId: 5,
  },
  {
    zip: 6806,
    settlement: "Hódmezõvásárhely",
    countyId: 5,
  },
  {
    zip: 7191,
    settlement: "Hõgyész",
    countyId: 16,
  },
  {
    zip: 8731,
    settlement: "Hollád",
    countyId: 14,
  },
  {
    zip: 3999,
    settlement: "Hollóháza",
    countyId: 4,
  },
  {
    zip: 3176,
    settlement: "Hollókõ",
    countyId: 12,
  },
  {
    zip: 8563,
    settlement: "Homokbödöge",
    countyId: 18,
  },
  {
    zip: 8777,
    settlement: "Homokkomárom",
    countyId: 19,
  },
  {
    zip: 6341,
    settlement: "Homokmégy",
    countyId: 1,
  },
  {
    zip: 7537,
    settlement: "Homokszentgyörgy",
    countyId: 14,
  },
  {
    zip: 7716,
    settlement: "Homorúd",
    countyId: 2,
  },
  {
    zip: 3812,
    settlement: "Homrogd",
    countyId: 4,
  },
  {
    zip: 2647,
    settlement: "Hont",
    countyId: 12,
  },
  {
    zip: 2658,
    settlement: "Horpács",
    countyId: 12,
  },
  {
    zip: 3014,
    settlement: "Hort",
    countyId: 9,
  },
  {
    zip: 4071,
    settlement: "Hortobágy",
    countyId: 8,
  },
  {
    zip: 7935,
    settlement: "Horváthertelend",
    countyId: 2,
  },
  {
    zip: 9796,
    settlement: "Horvátlövõ",
    countyId: 17,
  },
  {
    zip: 9733,
    settlement: "Horvátzsidány",
    countyId: 17,
  },
  {
    zip: 7694,
    settlement: "Hosszúhetény",
    countyId: 2,
  },
  {
    zip: 4274,
    settlement: "Hosszúpályi",
    countyId: 8,
  },
  {
    zip: 9676,
    settlement: "Hosszúpereszteg",
    countyId: 17,
  },
  {
    zip: 8716,
    settlement: "Hosszúvíz",
    countyId: 14,
  },
  {
    zip: 8777,
    settlement: "Hosszúvölgy",
    countyId: 19,
  },
  {
    zip: 8475,
    settlement: "Hosztót",
    countyId: 18,
  },
  {
    zip: 8991,
    settlement: "Hottó",
    countyId: 19,
  },
  {
    zip: 2672,
    settlement: "Hugyag",
    countyId: 12,
  },
  {
    zip: 5555,
    settlement: "Hunya",
    countyId: 3,
  },
  {
    zip: 5063,
    settlement: "Hunyadfalva",
    countyId: 10,
  },
  {
    zip: 7678,
    settlement: "Husztót",
    countyId: 2,
  },
  {
    zip: 9361,
    settlement: "Hövej",
    countyId: 7,
  },
  {
    zip: 7935,
    settlement: "Ibafa",
    countyId: 2,
  },
  {
    zip: 8984,
    settlement: "Iborfia",
    countyId: 19,
  },
  {
    zip: 4484,
    settlement: "Ibrány",
    countyId: 15,
  },
  {
    zip: 7275,
    settlement: "Igal",
    countyId: 14,
  },
  {
    zip: 7015,
    settlement: "Igar",
    countyId: 6,
  },
  {
    zip: 7016,
    settlement: "Igar",
    countyId: 6,
  },
  {
    zip: 3459,
    settlement: "Igrici",
    countyId: 4,
  },
  {
    zip: 8726,
    settlement: "Iharos",
    countyId: 14,
  },
  {
    zip: 8725,
    settlement: "Iharosberény",
    countyId: 14,
  },
  {
    zip: 9756,
    settlement: "Ikervár",
    countyId: 17,
  },
  {
    zip: 2181,
    settlement: "Iklad",
    countyId: 13,
  },
  {
    zip: 9634,
    settlement: "Iklanberény",
    countyId: 17,
  },
  {
    zip: 8958,
    settlement: "Iklódbördõce",
    countyId: 19,
  },
  {
    zip: 9141,
    settlement: "Ikrény",
    countyId: 7,
  },
  {
    zip: 2675,
    settlement: "Iliny",
    countyId: 12,
  },
  {
    zip: 4566,
    settlement: "Ilk",
    countyId: 15,
  },
  {
    zip: 7775,
    settlement: "Illocska",
    countyId: 2,
  },
  {
    zip: 3724,
    settlement: "Imola",
    countyId: 4,
  },
  {
    zip: 6238,
    settlement: "Imrehegy",
    countyId: 1,
  },
  {
    zip: 3851,
    settlement: "Ináncs",
    countyId: 4,
  },
  {
    zip: 2365,
    settlement: "Inárcs",
    countyId: 13,
  },
  {
    zip: 8724,
    settlement: "Inke",
    countyId: 14,
  },
  {
    zip: 7847,
    settlement: "Ipacsfa",
    countyId: 2,
  },
  {
    zip: 2631,
    settlement: "Ipolydamásd",
    countyId: 13,
  },
  {
    zip: 3138,
    settlement: "Ipolytarnóc",
    countyId: 12,
  },
  {
    zip: 2633,
    settlement: "Ipolytölgyes",
    countyId: 13,
  },
  {
    zip: 2669,
    settlement: "Ipolyvece",
    countyId: 12,
  },
  {
    zip: 7095,
    settlement: "Iregszemcse",
    countyId: 16,
  },
  {
    zip: 3786,
    settlement: "Irota",
    countyId: 4,
  },
  {
    zip: 2117,
    settlement: "Isaszeg",
    countyId: 13,
  },
  {
    zip: 9941,
    settlement: "Ispánk",
    countyId: 17,
  },
  {
    zip: 3253,
    settlement: "Istenmezeje",
    countyId: 9,
  },
  {
    zip: 7987,
    settlement: "Istvándi",
    countyId: 14,
  },
  {
    zip: 8043,
    settlement: "Iszkaszentgyörgy",
    countyId: 6,
  },
  {
    zip: 8493,
    settlement: "Iszkáz",
    countyId: 18,
  },
  {
    zip: 8045,
    settlement: "Isztimér",
    countyId: 6,
  },
  {
    zip: 3248,
    settlement: "Ivád",
    countyId: 9,
  },
  {
    zip: 9374,
    settlement: "Iván",
    countyId: 7,
  },
  {
    zip: 7772,
    settlement: "Ivánbattyán",
    countyId: 2,
  },
  {
    zip: 9931,
    settlement: "Ivánc",
    countyId: 17,
  },
  {
    zip: 2454,
    settlement: "Iváncsa",
    countyId: 6,
  },
  {
    zip: 7781,
    settlement: "Ivándárda",
    countyId: 2,
  },
  {
    zip: 7353,
    settlement: "Izmény",
    countyId: 16,
  },
  {
    zip: 6070,
    settlement: "Izsák",
    countyId: 1,
  },
  {
    zip: 3741,
    settlement: "Izsófalva",
    countyId: 4,
  },
  {
    zip: 7362,
    settlement: "Jágónak",
    countyId: 16,
  },
  {
    zip: 9798,
    settlement: "Ják",
    countyId: 17,
  },
  {
    zip: 6078,
    settlement: "Jakabszállás",
    countyId: 1,
  },
  {
    zip: 9643,
    settlement: "Jákfa",
    countyId: 17,
  },
  {
    zip: 3721,
    settlement: "Jákfalva",
    countyId: 4,
  },
  {
    zip: 7525,
    settlement: "Jákó",
    countyId: 14,
  },
  {
    zip: 4841,
    settlement: "Jánd",
    countyId: 15,
  },
  {
    zip: 4741,
    settlement: "Jánkmajtis",
    countyId: 15,
  },
  {
    zip: 6440,
    settlement: "Jánoshalma",
    countyId: 1,
  },
  {
    zip: 9545,
    settlement: "Jánosháza",
    countyId: 17,
  },
  {
    zip: 5143,
    settlement: "Jánoshida",
    countyId: 10,
  },
  {
    zip: 9241,
    settlement: "Jánossomorja",
    countyId: 7,
  },
  {
    zip: 9242,
    settlement: "Jánossomorja",
    countyId: 7,
  },
  {
    zip: 3664,
    settlement: "Járdánháza",
    countyId: 4,
  },
  {
    zip: 4337,
    settlement: "Jármi",
    countyId: 15,
  },
  {
    zip: 8424,
    settlement: "Jásd",
    countyId: 18,
  },
  {
    zip: 5124,
    settlement: "Jászágó",
    countyId: 10,
  },
  {
    zip: 5054,
    settlement: "Jászalsószentgyörgy",
    countyId: 10,
  },
  {
    zip: 5130,
    settlement: "Jászapáti",
    countyId: 10,
  },
  {
    zip: 5123,
    settlement: "Jászárokszállás",
    countyId: 10,
  },
  {
    zip: 5100,
    settlement: "Jászberény",
    countyId: 10,
  },
  {
    zip: 5152,
    settlement: "Jászberény",
    countyId: 10,
  },
  {
    zip: 5144,
    settlement: "Jászboldogháza",
    countyId: 10,
  },
  {
    zip: 5122,
    settlement: "Jászdózsa",
    countyId: 10,
  },
  {
    zip: 5111,
    settlement: "Jászfelsõszentgyörgy",
    countyId: 10,
  },
  {
    zip: 5126,
    settlement: "Jászfényszaru",
    countyId: 10,
  },
  {
    zip: 5135,
    settlement: "Jászivány",
    countyId: 10,
  },
  {
    zip: 5121,
    settlement: "Jászjákóhalma",
    countyId: 10,
  },
  {
    zip: 2746,
    settlement: "Jászkarajenõ",
    countyId: 13,
  },
  {
    zip: 5137,
    settlement: "Jászkisér",
    countyId: 10,
  },
  {
    zip: 5055,
    settlement: "Jászladány",
    countyId: 10,
  },
  {
    zip: 5136,
    settlement: "Jászszentandrás",
    countyId: 10,
  },
  {
    zip: 6133,
    settlement: "Jászszentlászló",
    countyId: 1,
  },
  {
    zip: 5141,
    settlement: "Jásztelek",
    countyId: 10,
  },
  {
    zip: 4611,
    settlement: "Jéke",
    countyId: 15,
  },
  {
    zip: 8146,
    settlement: "Jenõ",
    countyId: 6,
  },
  {
    zip: 9323,
    settlement: "Jobaháza",
    countyId: 7,
  },
  {
    zip: 3063,
    settlement: "Jobbágyi",
    countyId: 12,
  },
  {
    zip: 3758,
    settlement: "Jósvafõ",
    countyId: 4,
  },
  {
    zip: 7431,
    settlement: "Juta",
    countyId: 14,
  },
  {
    zip: 4183,
    settlement: "Kaba",
    countyId: 8,
  },
  {
    zip: 8773,
    settlement: "Kacorlak",
    countyId: 19,
  },
  {
    zip: 3424,
    settlement: "Kács",
    countyId: 4,
  },
  {
    zip: 7940,
    settlement: "Kacsóta",
    countyId: 2,
  },
  {
    zip: 7530,
    settlement: "Kadarkút",
    countyId: 14,
  },
  {
    zip: 9123,
    settlement: "Kajárpéc",
    countyId: 7,
  },
  {
    zip: 2472,
    settlement: "Kajászó",
    countyId: 6,
  },
  {
    zip: 7051,
    settlement: "Kajdacs",
    countyId: 16,
  },
  {
    zip: 7122,
    settlement: "Kakasd",
    countyId: 16,
  },
  {
    zip: 7958,
    settlement: "Kákics",
    countyId: 2,
  },
  {
    zip: 2366,
    settlement: "Kakucs",
    countyId: 13,
  },
  {
    zip: 3350,
    settlement: "Kál",
    countyId: 9,
  },
  {
    zip: 7194,
    settlement: "Kalaznó",
    countyId: 16,
  },
  {
    zip: 9673,
    settlement: "Káld",
    countyId: 17,
  },
  {
    zip: 2175,
    settlement: "Kálló",
    countyId: 12,
  },
  {
    zip: 8785,
    settlement: "Kallósd",
    countyId: 19,
  },
  {
    zip: 4324,
    settlement: "Kállósemjén",
    countyId: 15,
  },
  {
    zip: 7538,
    settlement: "Kálmáncsa",
    countyId: 14,
  },
  {
    zip: 4434,
    settlement: "Kálmánháza",
    countyId: 15,
  },
  {
    zip: 8988,
    settlement: "Kálócfa",
    countyId: 19,
  },
  {
    zip: 6300,
    settlement: "Kalocsa",
    countyId: 1,
  },
  {
    zip: 8124,
    settlement: "Káloz",
    countyId: 6,
  },
  {
    zip: 9841,
    settlement: "Kám",
    countyId: 17,
  },
  {
    zip: 8469,
    settlement: "Kamond",
    countyId: 18,
  },
  {
    zip: 5673,
    settlement: "Kamut",
    countyId: 3,
  },
  {
    zip: 3735,
    settlement: "Kánó",
    countyId: 4,
  },
  {
    zip: 4335,
    settlement: "Kántorjánosi",
    countyId: 15,
  },
  {
    zip: 3821,
    settlement: "Kány",
    countyId: 4,
  },
  {
    zip: 8667,
    settlement: "Kánya",
    countyId: 14,
  },
  {
    zip: 8956,
    settlement: "Kányavár",
    countyId: 19,
  },
  {
    zip: 8294,
    settlement: "Kapolcs",
    countyId: 18,
  },
  {
    zip: 3355,
    settlement: "Kápolna",
    countyId: 9,
  },
  {
    zip: 2475,
    settlement: "Kápolnásnyék",
    countyId: 6,
  },
  {
    zip: 8671,
    settlement: "Kapoly",
    countyId: 14,
  },
  {
    zip: 7523,
    settlement: "Kaposfõ",
    countyId: 14,
  },
  {
    zip: 7473,
    settlement: "Kaposgyarmat",
    countyId: 14,
  },
  {
    zip: 7261,
    settlement: "Kaposhomok",
    countyId: 14,
  },
  {
    zip: 7258,
    settlement: "Kaposkeresztúr",
    countyId: 14,
  },
  {
    zip: 7521,
    settlement: "Kaposmérõ",
    countyId: 14,
  },
  {
    zip: 7251,
    settlement: "Kapospula",
    countyId: 16,
  },
  {
    zip: 7361,
    settlement: "Kaposszekcsõ",
    countyId: 16,
  },
  {
    zip: 7476,
    settlement: "Kaposszerdahely",
    countyId: 14,
  },
  {
    zip: 7522,
    settlement: "Kaposújlak",
    countyId: 14,
  },
  {
    zip: 7400,
    settlement: "Kaposvár",
    countyId: 14,
  },
  {
    zip: 8471,
    settlement: "Káptalanfa",
    countyId: 18,
  },
  {
    zip: 8283,
    settlement: "Káptalantóti",
    countyId: 18,
  },
  {
    zip: 9330,
    settlement: "Kapuvár",
    countyId: 7,
  },
  {
    zip: 9339,
    settlement: "Kapuvár",
    countyId: 7,
  },
  {
    zip: 7285,
    settlement: "Kára",
    countyId: 14,
  },
  {
    zip: 3281,
    settlement: "Karácsond",
    countyId: 9,
  },
  {
    zip: 8676,
    settlement: "Karád",
    countyId: 14,
  },
  {
    zip: 9547,
    settlement: "Karakó",
    countyId: 17,
  },
  {
    zip: 8491,
    settlement: "Karakószörcsök",
    countyId: 18,
  },
  {
    zip: 3181,
    settlement: "Karancsalja",
    countyId: 12,
  },
  {
    zip: 3137,
    settlement: "Karancsberény",
    countyId: 12,
  },
  {
    zip: 3183,
    settlement: "Karancskeszi",
    countyId: 12,
  },
  {
    zip: 3182,
    settlement: "Karancslapujtõ",
    countyId: 12,
  },
  {
    zip: 3163,
    settlement: "Karancsság",
    countyId: 12,
  },
  {
    zip: 7333,
    settlement: "Kárász",
    countyId: 2,
  },
  {
    zip: 5300,
    settlement: "Karcag",
    countyId: 10,
  },
  {
    zip: 3963,
    settlement: "Karcsa",
    countyId: 4,
  },
  {
    zip: 5552,
    settlement: "Kardos",
    countyId: 3,
  },
  {
    zip: 5945,
    settlement: "Kardoskút",
    countyId: 3,
  },
  {
    zip: 8354,
    settlement: "Karmacs",
    countyId: 19,
  },
  {
    zip: 9182,
    settlement: "Károlyháza",
    countyId: 7,
  },
  {
    zip: 3962,
    settlement: "Karos",
    countyId: 4,
  },
  {
    zip: 2173,
    settlement: "Kartal",
    countyId: 13,
  },
  {
    zip: 7827,
    settlement: "Kásád",
    countyId: 2,
  },
  {
    zip: 6211,
    settlement: "Kaskantyú",
    countyId: 1,
  },
  {
    zip: 7977,
    settlement: "Kastélyosdombó",
    countyId: 14,
  },
  {
    zip: 5948,
    settlement: "Kaszaper",
    countyId: 3,
  },
  {
    zip: 7564,
    settlement: "Kaszó",
    countyId: 14,
  },
  {
    zip: 7914,
    settlement: "Katádfa",
    countyId: 2,
  },
  {
    zip: 9915,
    settlement: "Katafa",
    countyId: 17,
  },
  {
    zip: 7661,
    settlement: "Kátoly",
    countyId: 2,
  },
  {
    zip: 6455,
    settlement: "Katymár",
    countyId: 1,
  },
  {
    zip: 2215,
    settlement: "Káva",
    countyId: 13,
  },
  {
    zip: 8994,
    settlement: "Kávás",
    countyId: 19,
  },
  {
    zip: 3127,
    settlement: "Kazár",
    countyId: 12,
  },
  {
    zip: 3147,
    settlement: "Kazár",
    countyId: 12,
  },
  {
    zip: 3700,
    settlement: "Kazincbarcika",
    countyId: 4,
  },
  {
    zip: 3831,
    settlement: "Kázsmárk",
    countyId: 4,
  },
  {
    zip: 7274,
    settlement: "Kazsok",
    countyId: 14,
  },
  {
    zip: 6237,
    settlement: "Kecel",
    countyId: 1,
  },
  {
    zip: 2852,
    settlement: "Kecskéd",
    countyId: 11,
  },
  {
    zip: 6000,
    settlement: "Kecskemét",
    countyId: 1,
  },
  {
    zip: 6008,
    settlement: "Kecskemét",
    countyId: 1,
  },
  {
    zip: 6044,
    settlement: "Kecskemét",
    countyId: 1,
  },
  {
    zip: 8784,
    settlement: "Kehidakustány",
    countyId: 19,
  },
  {
    zip: 4515,
    settlement: "Kék",
    countyId: 15,
  },
  {
    zip: 4494,
    settlement: "Kékcse",
    countyId: 15,
  },
  {
    zip: 3899,
    settlement: "Kéked",
    countyId: 4,
  },
  {
    zip: 7661,
    settlement: "Kékesd",
    countyId: 2,
  },
  {
    zip: 8254,
    settlement: "Kékkút",
    countyId: 18,
  },
  {
    zip: 6423,
    settlement: "Kelebia",
    countyId: 1,
  },
  {
    zip: 9549,
    settlement: "Keléd",
    countyId: 17,
  },
  {
    zip: 3728,
    settlement: "Kelemér",
    countyId: 4,
  },
  {
    zip: 6444,
    settlement: "Kéleshalom",
    countyId: 1,
  },
  {
    zip: 8714,
    settlement: "Kelevíz",
    countyId: 14,
  },
  {
    zip: 4501,
    settlement: "Kemecse",
    countyId: 15,
  },
  {
    zip: 2638,
    settlement: "Kemence",
    countyId: 13,
  },
  {
    zip: 8931,
    settlement: "Kemendollár",
    countyId: 19,
  },
  {
    zip: 8516,
    settlement: "Kemeneshõgyész",
    countyId: 18,
  },
  {
    zip: 9553,
    settlement: "Kemeneskápolna",
    countyId: 17,
  },
  {
    zip: 9522,
    settlement: "Kemenesmagasi",
    countyId: 17,
  },
  {
    zip: 9511,
    settlement: "Kemenesmihályfa",
    countyId: 17,
  },
  {
    zip: 9544,
    settlement: "Kemenespálfa",
    countyId: 17,
  },
  {
    zip: 9521,
    settlement: "Kemenesszentmárton",
    countyId: 17,
  },
  {
    zip: 8518,
    settlement: "Kemenesszentpéter",
    countyId: 18,
  },
  {
    zip: 9517,
    settlement: "Kemenessömjén",
    countyId: 17,
  },
  {
    zip: 8995,
    settlement: "Keménfa",
    countyId: 19,
  },
  {
    zip: 7843,
    settlement: "Kémes",
    countyId: 2,
  },
  {
    zip: 9923,
    settlement: "Kemestaródfa",
    countyId: 17,
  },
  {
    zip: 7839,
    settlement: "Kemse",
    countyId: 2,
  },
  {
    zip: 5331,
    settlement: "Kenderes",
    countyId: 10,
  },
  {
    zip: 5349,
    settlement: "Kenderes",
    countyId: 10,
  },
  {
    zip: 9752,
    settlement: "Kenéz",
    countyId: 17,
  },
  {
    zip: 3955,
    settlement: "Kenézlõ",
    countyId: 4,
  },
  {
    zip: 5083,
    settlement: "Kengyel",
    countyId: 10,
  },
  {
    zip: 9514,
    settlement: "Kenyeri",
    countyId: 17,
  },
  {
    zip: 9945,
    settlement: "Kercaszomor",
    countyId: 17,
  },
  {
    zip: 7256,
    settlement: "Kercseliget",
    countyId: 14,
  },
  {
    zip: 3396,
    settlement: "Kerecsend",
    countyId: 9,
  },
  {
    zip: 8745,
    settlement: "Kerecseny",
    countyId: 19,
  },
  {
    zip: 6041,
    settlement: "Kerekegyháza",
    countyId: 1,
  },
  {
    zip: 8618,
    settlement: "Kereki",
    countyId: 14,
  },
  {
    zip: 2882,
    settlement: "Kerékteleki",
    countyId: 11,
  },
  {
    zip: 2144,
    settlement: "Kerepes",
    countyId: 13,
  },
  {
    zip: 2145,
    settlement: "Kerepes",
    countyId: 13,
  },
  {
    zip: 3821,
    settlement: "Keresztéte",
    countyId: 4,
  },
  {
    zip: 8971,
    settlement: "Kerkabarabás",
    countyId: 19,
  },
  {
    zip: 8973,
    settlement: "Kerkafalva",
    countyId: 19,
  },
  {
    zip: 8973,
    settlement: "Kerkakutas",
    countyId: 19,
  },
  {
    zip: 9944,
    settlement: "Kerkáskápolna",
    countyId: 17,
  },
  {
    zip: 8874,
    settlement: "Kerkaszentkirály",
    countyId: 19,
  },
  {
    zip: 8879,
    settlement: "Kerkateskánd",
    countyId: 19,
  },
  {
    zip: 4912,
    settlement: "Kérsemjén",
    countyId: 15,
  },
  {
    zip: 8492,
    settlement: "Kerta",
    countyId: 18,
  },
  {
    zip: 5526,
    settlement: "Kertészsziget",
    countyId: 3,
  },
  {
    zip: 2616,
    settlement: "Keszeg",
    countyId: 12,
  },
  {
    zip: 3579,
    settlement: "Kesznyéten",
    countyId: 4,
  },
  {
    zip: 7062,
    settlement: "Keszõhidegkút",
    countyId: 16,
  },
  {
    zip: 8360,
    settlement: "Keszthely",
    countyId: 19,
  },
  {
    zip: 2517,
    settlement: "Kesztölc",
    countyId: 11,
  },
  {
    zip: 7668,
    settlement: "Keszü",
    countyId: 2,
  },
  {
    zip: 2655,
    settlement: "Kétbodony",
    countyId: 12,
  },
  {
    zip: 5741,
    settlement: "Kétegyháza",
    countyId: 3,
  },
  {
    zip: 8713,
    settlement: "Kéthely",
    countyId: 14,
  },
  {
    zip: 5411,
    settlement: "Kétpó",
    countyId: 10,
  },
  {
    zip: 5674,
    settlement: "Kétsoprony",
    countyId: 3,
  },
  {
    zip: 7975,
    settlement: "Kétújfalu",
    countyId: 2,
  },
  {
    zip: 9982,
    settlement: "Kétvölgy",
    countyId: 17,
  },
  {
    zip: 7174,
    settlement: "Kéty",
    countyId: 16,
  },
  {
    zip: 5744,
    settlement: "Kevermes",
    countyId: 3,
  },
  {
    zip: 8774,
    settlement: "Kilimán",
    countyId: 19,
  },
  {
    zip: 9181,
    settlement: "Kimle",
    countyId: 7,
  },
  {
    zip: 8044,
    settlement: "Kincsesbánya",
    countyId: 6,
  },
  {
    zip: 3657,
    settlement: "Királd",
    countyId: 4,
  },
  {
    zip: 7953,
    settlement: "Királyegyháza",
    countyId: 2,
  },
  {
    zip: 6911,
    settlement: "Királyhegyes",
    countyId: 5,
  },
  {
    zip: 8195,
    settlement: "Királyszentistván",
    countyId: 18,
  },
  {
    zip: 8284,
    settlement: "Kisapáti",
    countyId: 18,
  },
  {
    zip: 2428,
    settlement: "Kisapostag",
    countyId: 6,
  },
  {
    zip: 4921,
    settlement: "Kisar",
    countyId: 15,
  },
  {
    zip: 7523,
    settlement: "Kisasszond",
    countyId: 14,
  },
  {
    zip: 7954,
    settlement: "Kisasszonyfa",
    countyId: 2,
  },
  {
    zip: 9133,
    settlement: "Kisbabot",
    countyId: 7,
  },
  {
    zip: 3046,
    settlement: "Kisbágyon",
    countyId: 12,
  },
  {
    zip: 9062,
    settlement: "Kisbajcs",
    countyId: 7,
  },
  {
    zip: 7542,
    settlement: "Kisbajom",
    countyId: 14,
  },
  {
    zip: 7282,
    settlement: "Kisbárapáti",
    countyId: 14,
  },
  {
    zip: 3075,
    settlement: "Kisbárkány",
    countyId: 12,
  },
  {
    zip: 2870,
    settlement: "Kisbér",
    countyId: 11,
  },
  {
    zip: 2879,
    settlement: "Kisbér",
    countyId: 11,
  },
  {
    zip: 8693,
    settlement: "Kisberény",
    countyId: 14,
  },
  {
    zip: 8477,
    settlement: "Kisberzseny",
    countyId: 18,
  },
  {
    zip: 7391,
    settlement: "Kisbeszterce",
    countyId: 2,
  },
  {
    zip: 9234,
    settlement: "Kisbodak",
    countyId: 7,
  },
  {
    zip: 8925,
    settlement: "Kisbucsa",
    countyId: 19,
  },
  {
    zip: 7756,
    settlement: "Kisbudmér",
    countyId: 2,
  },
  {
    zip: 3578,
    settlement: "Kiscsécs",
    countyId: 4,
  },
  {
    zip: 8888,
    settlement: "Kiscsehi",
    countyId: 19,
  },
  {
    zip: 8494,
    settlement: "Kiscsõsz",
    countyId: 18,
  },
  {
    zip: 7814,
    settlement: "Kisdér",
    countyId: 2,
  },
  {
    zip: 7985,
    settlement: "Kisdobsza",
    countyId: 2,
  },
  {
    zip: 5837,
    settlement: "Kisdombegyház",
    countyId: 3,
  },
  {
    zip: 7159,
    settlement: "Kisdorog",
    countyId: 16,
  },
  {
    zip: 2655,
    settlement: "Kisecset",
    countyId: 12,
  },
  {
    zip: 9341,
    settlement: "Kisfalud",
    countyId: 7,
  },
  {
    zip: 3256,
    settlement: "Kisfüzes",
    countyId: 9,
  },
  {
    zip: 7279,
    settlement: "Kisgyalán",
    countyId: 14,
  },
  {
    zip: 3556,
    settlement: "Kisgyõr",
    countyId: 4,
  },
  {
    zip: 8356,
    settlement: "Kisgörbõ",
    countyId: 19,
  },
  {
    zip: 7391,
    settlement: "Kishajmás",
    countyId: 2,
  },
  {
    zip: 7800,
    settlement: "Kisharsány",
    countyId: 2,
  },
  {
    zip: 3161,
    settlement: "Kishartyán",
    countyId: 12,
  },
  {
    zip: 7763,
    settlement: "Kisherend",
    countyId: 2,
  },
  {
    zip: 4977,
    settlement: "Kishódos",
    countyId: 15,
  },
  {
    zip: 3994,
    settlement: "Kishuta",
    countyId: 4,
  },
  {
    zip: 2948,
    settlement: "Kisigmánd",
    countyId: 11,
  },
  {
    zip: 7773,
    settlement: "Kisjakabfalva",
    countyId: 2,
  },
  {
    zip: 7766,
    settlement: "Kiskassa",
    countyId: 2,
  },
  {
    zip: 3843,
    settlement: "Kiskinizs",
    countyId: 4,
  },
  {
    zip: 7524,
    settlement: "Kiskorpád",
    countyId: 14,
  },
  {
    zip: 6200,
    settlement: "Kiskõrös",
    countyId: 1,
  },
  {
    zip: 6100,
    settlement: "Kiskunfélegyháza",
    countyId: 1,
  },
  {
    zip: 6400,
    settlement: "Kiskunhalas",
    countyId: 1,
  },
  {
    zip: 2340,
    settlement: "Kiskunlacháza",
    countyId: 13,
  },
  {
    zip: 6120,
    settlement: "Kiskunmajsa",
    countyId: 1,
  },
  {
    zip: 8911,
    settlement: "Kiskutas",
    countyId: 19,
  },
  {
    zip: 3384,
    settlement: "Kisköre",
    countyId: 9,
  },
  {
    zip: 8156,
    settlement: "Kisláng",
    countyId: 6,
  },
  {
    zip: 4325,
    settlement: "Kisléta",
    countyId: 15,
  },
  {
    zip: 7775,
    settlement: "Kislippó",
    countyId: 2,
  },
  {
    zip: 8446,
    settlement: "Kislõd",
    countyId: 18,
  },
  {
    zip: 7356,
    settlement: "Kismányok",
    countyId: 16,
  },
  {
    zip: 4126,
    settlement: "Kismarja",
    countyId: 8,
  },
  {
    zip: 2623,
    settlement: "Kismaros",
    countyId: 13,
  },
  {
    zip: 4737,
    settlement: "Kisnamény",
    countyId: 15,
  },
  {
    zip: 3264,
    settlement: "Kisnána",
    countyId: 9,
  },
  {
    zip: 2165,
    settlement: "Kisnémedi",
    countyId: 13,
  },
  {
    zip: 7759,
    settlement: "Kisnyárád",
    countyId: 2,
  },
  {
    zip: 2024,
    settlement: "Kisoroszi",
    countyId: 13,
  },
  {
    zip: 4956,
    settlement: "Kispalád",
    countyId: 15,
  },
  {
    zip: 8912,
    settlement: "Kispáli",
    countyId: 19,
  },
  {
    zip: 8496,
    settlement: "Kispirit",
    countyId: 18,
  },
  {
    zip: 9936,
    settlement: "Kisrákos",
    countyId: 17,
  },
  {
    zip: 8756,
    settlement: "Kisrécse",
    countyId: 19,
  },
  {
    zip: 3965,
    settlement: "Kisrozvágy",
    countyId: 4,
  },
  {
    zip: 3627,
    settlement: "Kissikátor",
    countyId: 4,
  },
  {
    zip: 9555,
    settlement: "Kissomlyó",
    countyId: 17,
  },
  {
    zip: 6421,
    settlement: "Kisszállás",
    countyId: 1,
  },
  {
    zip: 7082,
    settlement: "Kisszékely",
    countyId: 16,
  },
  {
    zip: 4963,
    settlement: "Kisszekeres",
    countyId: 15,
  },
  {
    zip: 7841,
    settlement: "Kisszentmárton",
    countyId: 2,
  },
  {
    zip: 8957,
    settlement: "Kissziget",
    countyId: 19,
  },
  {
    zip: 8483,
    settlement: "Kisszõlõs",
    countyId: 18,
  },
  {
    zip: 7981,
    settlement: "Kistamási",
    countyId: 2,
  },
  {
    zip: 7823,
    settlement: "Kistapolca",
    countyId: 2,
  },
  {
    zip: 2143,
    settlement: "Kistarcsa",
    countyId: 13,
  },
  {
    zip: 6760,
    settlement: "Kistelek",
    countyId: 5,
  },
  {
    zip: 3553,
    settlement: "Kistokaj",
    countyId: 4,
  },
  {
    zip: 8868,
    settlement: "Kistolmács",
    countyId: 19,
  },
  {
    zip: 7068,
    settlement: "Kistormás",
    countyId: 16,
  },
  {
    zip: 7768,
    settlement: "Kistótfalu",
    countyId: 2,
  },
  {
    zip: 5310,
    settlement: "Kisújszállás",
    countyId: 10,
  },
  {
    zip: 9772,
    settlement: "Kisunyom",
    countyId: 17,
  },
  {
    zip: 4600,
    settlement: "Kisvárda",
    countyId: 15,
  },
  {
    zip: 4811,
    settlement: "Kisvarsány",
    countyId: 15,
  },
  {
    zip: 8341,
    settlement: "Kisvásárhely",
    countyId: 19,
  },
  {
    zip: 7381,
    settlement: "Kisvaszar",
    countyId: 2,
  },
  {
    zip: 7183,
    settlement: "Kisvejke",
    countyId: 16,
  },
  {
    zip: 6775,
    settlement: "Kiszombor",
    countyId: 5,
  },
  {
    zip: 9733,
    settlement: "Kiszsidány",
    countyId: 17,
  },
  {
    zip: 6773,
    settlement: "Klárafalva",
    countyId: 5,
  },
  {
    zip: 2898,
    settlement: "Kocs",
    countyId: 11,
  },
  {
    zip: 2755,
    settlement: "Kocsér",
    countyId: 13,
  },
  {
    zip: 7212,
    settlement: "Kocsola",
    countyId: 16,
  },
  {
    zip: 4751,
    settlement: "Kocsord",
    countyId: 15,
  },
  {
    zip: 2243,
    settlement: "Kóka",
    countyId: 13,
  },
  {
    zip: 4284,
    settlement: "Kokad",
    countyId: 8,
  },
  {
    zip: 7530,
    settlement: "Kõkút",
    countyId: 14,
  },
  {
    zip: 8468,
    settlement: "Kolontár",
    countyId: 18,
  },
  {
    zip: 4138,
    settlement: "Komádi",
    countyId: 8,
  },
  {
    zip: 2900,
    settlement: "Komárom",
    countyId: 11,
  },
  {
    zip: 2903,
    settlement: "Komárom",
    countyId: 11,
  },
  {
    zip: 2921,
    settlement: "Komárom",
    countyId: 11,
  },
  {
    zip: 3765,
    settlement: "Komjáti",
    countyId: 4,
  },
  {
    zip: 7300,
    settlement: "Komló",
    countyId: 2,
  },
  {
    zip: 7305,
    settlement: "Komló",
    countyId: 2,
  },
  {
    zip: 4765,
    settlement: "Komlódtótfalu",
    countyId: 15,
  },
  {
    zip: 7582,
    settlement: "Komlósd",
    countyId: 14,
  },
  {
    zip: 3937,
    settlement: "Komlóska",
    countyId: 4,
  },
  {
    zip: 4622,
    settlement: "Komoró",
    countyId: 15,
  },
  {
    zip: 3356,
    settlement: "Kompolt",
    countyId: 9,
  },
  {
    zip: 3775,
    settlement: "Kondó",
    countyId: 4,
  },
  {
    zip: 9943,
    settlement: "Kondorfa",
    countyId: 17,
  },
  {
    zip: 5553,
    settlement: "Kondoros",
    countyId: 3,
  },
  {
    zip: 9144,
    settlement: "Kóny",
    countyId: 7,
  },
  {
    zip: 4133,
    settlement: "Konyár",
    countyId: 8,
  },
  {
    zip: 9495,
    settlement: "Kópháza",
    countyId: 7,
  },
  {
    zip: 7094,
    settlement: "Koppányszántó",
    countyId: 16,
  },
  {
    zip: 3886,
    settlement: "Korlát",
    countyId: 4,
  },
  {
    zip: 9113,
    settlement: "Koroncó",
    countyId: 7,
  },
  {
    zip: 7841,
    settlement: "Kórós",
    countyId: 2,
  },
  {
    zip: 8617,
    settlement: "Kõröshegy",
    countyId: 14,
  },
  {
    zip: 2745,
    settlement: "Kõröstetétlen",
    countyId: 13,
  },
  {
    zip: 2612,
    settlement: "Kosd",
    countyId: 13,
  },
  {
    zip: 2625,
    settlement: "Kóspallag",
    countyId: 13,
  },
  {
    zip: 8152,
    settlement: "Kõszárhegy",
    countyId: 6,
  },
  {
    zip: 9730,
    settlement: "Kõszeg",
    countyId: 17,
  },
  {
    zip: 9725,
    settlement: "Kõszegdoroszló",
    countyId: 17,
  },
  {
    zip: 9739,
    settlement: "Kõszegpaty",
    countyId: 17,
  },
  {
    zip: 9725,
    settlement: "Kõszegszerdahely",
    countyId: 17,
  },
  {
    zip: 4482,
    settlement: "Kótaj",
    countyId: 15,
  },
  {
    zip: 5062,
    settlement: "Kõtelek",
    countyId: 10,
  },
  {
    zip: 7847,
    settlement: "Kovácshida",
    countyId: 2,
  },
  {
    zip: 7678,
    settlement: "Kovácsszénája",
    countyId: 2,
  },
  {
    zip: 3992,
    settlement: "Kovácsvágás",
    countyId: 4,
  },
  {
    zip: 7673,
    settlement: "Kõvágószõlõs",
    countyId: 2,
  },
  {
    zip: 7675,
    settlement: "Kõvágótõttõs",
    countyId: 2,
  },
  {
    zip: 8254,
    settlement: "Kõvágóörs",
    countyId: 18,
  },
  {
    zip: 3053,
    settlement: "Kozárd",
    countyId: 12,
  },
  {
    zip: 7761,
    settlement: "Kozármisleny",
    countyId: 2,
  },
  {
    zip: 8988,
    settlement: "Kozmadombja",
    countyId: 19,
  },
  {
    zip: 3821,
    settlement: "Krasznokvajda",
    countyId: 4,
  },
  {
    zip: 2458,
    settlement: "Kulcs",
    countyId: 6,
  },
  {
    zip: 6097,
    settlement: "Kunadacs",
    countyId: 1,
  },
  {
    zip: 5746,
    settlement: "Kunágota",
    countyId: 3,
  },
  {
    zip: 6435,
    settlement: "Kunbaja",
    countyId: 1,
  },
  {
    zip: 6043,
    settlement: "Kunbaracs",
    countyId: 1,
  },
  {
    zip: 5412,
    settlement: "Kuncsorba",
    countyId: 10,
  },
  {
    zip: 6413,
    settlement: "Kunfehértó",
    countyId: 1,
  },
  {
    zip: 5340,
    settlement: "Kunhegyes",
    countyId: 10,
  },
  {
    zip: 5321,
    settlement: "Kunmadaras",
    countyId: 10,
  },
  {
    zip: 6096,
    settlement: "Kunpeszér",
    countyId: 1,
  },
  {
    zip: 6115,
    settlement: "Kunszállás",
    countyId: 1,
  },
  {
    zip: 5440,
    settlement: "Kunszentmárton",
    countyId: 10,
  },
  {
    zip: 5449,
    settlement: "Kunszentmárton",
    countyId: 10,
  },
  {
    zip: 6090,
    settlement: "Kunszentmiklós",
    countyId: 1,
  },
  {
    zip: 9184,
    settlement: "Kunsziget",
    countyId: 7,
  },
  {
    zip: 8595,
    settlement: "Kup",
    countyId: 18,
  },
  {
    zip: 3813,
    settlement: "Kupa",
    countyId: 4,
  },
  {
    zip: 7226,
    settlement: "Kurd",
    countyId: 16,
  },
  {
    zip: 3732,
    settlement: "Kurityán",
    countyId: 4,
  },
  {
    zip: 8919,
    settlement: "Kustánszeg",
    countyId: 19,
  },
  {
    zip: 7541,
    settlement: "Kutas",
    countyId: 14,
  },
  {
    zip: 3066,
    settlement: "Kutasó",
    countyId: 12,
  },
  {
    zip: 6755,
    settlement: "Kübekháza",
    countyId: 5,
  },
  {
    zip: 8978,
    settlement: "Külsõsárd",
    countyId: 19,
  },
  {
    zip: 9532,
    settlement: "Külsõvat",
    countyId: 18,
  },
  {
    zip: 8162,
    settlement: "Küngös",
    countyId: 18,
  },
  {
    zip: 7334,
    settlement: "Köblény",
    countyId: 2,
  },
  {
    zip: 9553,
    settlement: "Köcsk",
    countyId: 17,
  },
  {
    zip: 7668,
    settlement: "Kökény",
    countyId: 2,
  },
  {
    zip: 4965,
    settlement: "Kölcse",
    countyId: 15,
  },
  {
    zip: 7052,
    settlement: "Kölesd",
    countyId: 16,
  },
  {
    zip: 7717,
    settlement: "Kölked",
    countyId: 2,
  },
  {
    zip: 3372,
    settlement: "Kömlõ",
    countyId: 9,
  },
  {
    zip: 2853,
    settlement: "Kömlõd",
    countyId: 11,
  },
  {
    zip: 6134,
    settlement: "Kömpöc",
    countyId: 1,
  },
  {
    zip: 4943,
    settlement: "Kömörõ",
    countyId: 15,
  },
  {
    zip: 9900,
    settlement: "Körmend",
    countyId: 17,
  },
  {
    zip: 9909,
    settlement: "Körmend",
    countyId: 17,
  },
  {
    zip: 2851,
    settlement: "Környe",
    countyId: 11,
  },
  {
    zip: 3577,
    settlement: "Köröm",
    countyId: 4,
  },
  {
    zip: 5516,
    settlement: "Körösladány",
    countyId: 3,
  },
  {
    zip: 5539,
    settlement: "Körösnagyharsány",
    countyId: 3,
  },
  {
    zip: 4136,
    settlement: "Körösszakál",
    countyId: 8,
  },
  {
    zip: 4135,
    settlement: "Körösszegapáti",
    countyId: 8,
  },
  {
    zip: 5622,
    settlement: "Köröstarcsa",
    countyId: 3,
  },
  {
    zip: 5536,
    settlement: "Körösújfalu",
    countyId: 3,
  },
  {
    zip: 8627,
    settlement: "Kötcse",
    countyId: 14,
  },
  {
    zip: 5725,
    settlement: "Kötegyán",
    countyId: 3,
  },
  {
    zip: 6912,
    settlement: "Kövegy",
    countyId: 5,
  },
  {
    zip: 8274,
    settlement: "Köveskál",
    countyId: 18,
  },
  {
    zip: 2541,
    settlement: "Lábatlan",
    countyId: 11,
  },
  {
    zip: 7551,
    settlement: "Lábod",
    countyId: 14,
  },
  {
    zip: 3967,
    settlement: "Lácacséke",
    countyId: 4,
  },
  {
    zip: 7535,
    settlement: "Lad",
    countyId: 14,
  },
  {
    zip: 6045,
    settlement: "Ladánybene",
    countyId: 1,
  },
  {
    zip: 3780,
    settlement: "Ládbesenyõ",
    countyId: 4,
  },
  {
    zip: 8136,
    settlement: "Lajoskomárom",
    countyId: 6,
  },
  {
    zip: 6050,
    settlement: "Lajosmizse",
    countyId: 1,
  },
  {
    zip: 3786,
    settlement: "Lak",
    countyId: 4,
  },
  {
    zip: 8913,
    settlement: "Lakhegy",
    countyId: 19,
  },
  {
    zip: 6065,
    settlement: "Lakitelek",
    countyId: 1,
  },
  {
    zip: 7918,
    settlement: "Lakócsa",
    countyId: 14,
  },
  {
    zip: 7759,
    settlement: "Lánycsók",
    countyId: 2,
  },
  {
    zip: 7214,
    settlement: "Lápafõ",
    countyId: 16,
  },
  {
    zip: 7775,
    settlement: "Lapáncsa",
    countyId: 2,
  },
  {
    zip: 4543,
    settlement: "Laskod",
    countyId: 15,
  },
  {
    zip: 8887,
    settlement: "Lasztonya",
    countyId: 19,
  },
  {
    zip: 8681,
    settlement: "Látrány",
    countyId: 14,
  },
  {
    zip: 9089,
    settlement: "Lázi",
    countyId: 7,
  },
  {
    zip: 2016,
    settlement: "Leányfalu",
    countyId: 13,
  },
  {
    zip: 2518,
    settlement: "Leányvár",
    countyId: 11,
  },
  {
    zip: 9155,
    settlement: "Lébény",
    countyId: 7,
  },
  {
    zip: 2619,
    settlement: "Legénd",
    countyId: 12,
  },
  {
    zip: 3904,
    settlement: "Legyesbénye",
    countyId: 4,
  },
  {
    zip: 3832,
    settlement: "Léh",
    countyId: 4,
  },
  {
    zip: 3648,
    settlement: "Lénárddaróc",
    countyId: 4,
  },
  {
    zip: 8978,
    settlement: "Lendvadedes",
    countyId: 19,
  },
  {
    zip: 8977,
    settlement: "Lendvajakabfa",
    countyId: 19,
  },
  {
    zip: 7184,
    settlement: "Lengyel",
    countyId: 16,
  },
  {
    zip: 8693,
    settlement: "Lengyeltóti",
    countyId: 14,
  },
  {
    zip: 8960,
    settlement: "Lenti",
    countyId: 19,
  },
  {
    zip: 8966,
    settlement: "Lenti",
    countyId: 19,
  },
  {
    zip: 8132,
    settlement: "Lepsény",
    countyId: 6,
  },
  {
    zip: 8318,
    settlement: "Lesencefalu",
    countyId: 18,
  },
  {
    zip: 8319,
    settlement: "Lesenceistvánd",
    countyId: 18,
  },
  {
    zip: 8318,
    settlement: "Lesencetomaj",
    countyId: 18,
  },
  {
    zip: 4281,
    settlement: "Létavértes",
    countyId: 8,
  },
  {
    zip: 4283,
    settlement: "Létavértes",
    countyId: 8,
  },
  {
    zip: 8868,
    settlement: "Letenye",
    countyId: 19,
  },
  {
    zip: 2632,
    settlement: "Letkés",
    countyId: 13,
  },
  {
    zip: 9221,
    settlement: "Levél",
    countyId: 7,
  },
  {
    zip: 4555,
    settlement: "Levelek",
    countyId: 15,
  },
  {
    zip: 8707,
    settlement: "Libickozma",
    countyId: 14,
  },
  {
    zip: 8981,
    settlement: "Lickóvadamos",
    countyId: 19,
  },
  {
    zip: 7331,
    settlement: "Liget",
    countyId: 2,
  },
  {
    zip: 8782,
    settlement: "Ligetfalva",
    countyId: 19,
  },
  {
    zip: 9233,
    settlement: "Lipót",
    countyId: 7,
  },
  {
    zip: 7781,
    settlement: "Lippó",
    countyId: 2,
  },
  {
    zip: 7757,
    settlement: "Liptód",
    countyId: 2,
  },
  {
    zip: 8888,
    settlement: "Lispeszentadorján",
    countyId: 19,
  },
  {
    zip: 8831,
    settlement: "Liszó",
    countyId: 19,
  },
  {
    zip: 8196,
    settlement: "Litér",
    countyId: 18,
  },
  {
    zip: 3866,
    settlement: "Litka",
    countyId: 4,
  },
  {
    zip: 3186,
    settlement: "Litke",
    countyId: 12,
  },
  {
    zip: 9634,
    settlement: "Lócs",
    countyId: 17,
  },
  {
    zip: 8425,
    settlement: "Lókút",
    countyId: 18,
  },
  {
    zip: 5743,
    settlement: "Lõkösháza",
    countyId: 3,
  },
  {
    zip: 4836,
    settlement: "Lónya",
    countyId: 15,
  },
  {
    zip: 2309,
    settlement: "Lórév",
    countyId: 13,
  },
  {
    zip: 3021,
    settlement: "Lõrinci",
    countyId: 9,
  },
  {
    zip: 3022,
    settlement: "Lõrinci",
    countyId: 9,
  },
  {
    zip: 3024,
    settlement: "Lõrinci",
    countyId: 9,
  },
  {
    zip: 7761,
    settlement: "Lothárd",
    countyId: 2,
  },
  {
    zip: 8228,
    settlement: "Lovas",
    countyId: 18,
  },
  {
    zip: 8093,
    settlement: "Lovasberény",
    countyId: 6,
  },
  {
    zip: 7720,
    settlement: "Lovászhetény",
    countyId: 2,
  },
  {
    zip: 8878,
    settlement: "Lovászi",
    countyId: 19,
  },
  {
    zip: 8553,
    settlement: "Lovászpatona",
    countyId: 18,
  },
  {
    zip: 3129,
    settlement: "Lucfalva",
    countyId: 12,
  },
  {
    zip: 3188,
    settlement: "Ludányhalászi",
    countyId: 12,
  },
  {
    zip: 3274,
    settlement: "Ludas",
    countyId: 9,
  },
  {
    zip: 9724,
    settlement: "Lukácsháza",
    countyId: 17,
  },
  {
    zip: 8660,
    settlement: "Lulla",
    countyId: 14,
  },
  {
    zip: 7838,
    settlement: "Lúzsok",
    countyId: 2,
  },
  {
    zip: 9461,
    settlement: "Lövõ",
    countyId: 7,
  },
  {
    zip: 4633,
    settlement: "Lövõpetri",
    countyId: 15,
  },
  {
    zip: 3909,
    settlement: "Mád",
    countyId: 4,
  },
  {
    zip: 6456,
    settlement: "Madaras",
    countyId: 1,
  },
  {
    zip: 7026,
    settlement: "Madocsa",
    countyId: 16,
  },
  {
    zip: 9169,
    settlement: "Maglóca",
    countyId: 7,
  },
  {
    zip: 2234,
    settlement: "Maglód",
    countyId: 13,
  },
  {
    zip: 7342,
    settlement: "Mágocs",
    countyId: 2,
  },
  {
    zip: 4953,
    settlement: "Magosliget",
    countyId: 15,
  },
  {
    zip: 4556,
    settlement: "Magy",
    countyId: 15,
  },
  {
    zip: 8071,
    settlement: "Magyaralmás",
    countyId: 6,
  },
  {
    zip: 7463,
    settlement: "Magyaratád",
    countyId: 14,
  },
  {
    zip: 5667,
    settlement: "Magyarbánhegyes",
    countyId: 3,
  },
  {
    zip: 7775,
    settlement: "Magyarbóly",
    countyId: 2,
  },
  {
    zip: 6932,
    settlement: "Magyarcsanád",
    countyId: 5,
  },
  {
    zip: 5838,
    settlement: "Magyardombegyház",
    countyId: 3,
  },
  {
    zip: 7332,
    settlement: "Magyaregregy",
    countyId: 2,
  },
  {
    zip: 7441,
    settlement: "Magyaregres",
    countyId: 14,
  },
  {
    zip: 8973,
    settlement: "Magyarföld",
    countyId: 19,
  },
  {
    zip: 3133,
    settlement: "Magyargéc",
    countyId: 12,
  },
  {
    zip: 8517,
    settlement: "Magyargencs",
    countyId: 18,
  },
  {
    zip: 7394,
    settlement: "Magyarhertelend",
    countyId: 2,
  },
  {
    zip: 4137,
    settlement: "Magyarhomorog",
    countyId: 8,
  },
  {
    zip: 9346,
    settlement: "Magyarkeresztúr",
    countyId: 7,
  },
  {
    zip: 7098,
    settlement: "Magyarkeszi",
    countyId: 16,
  },
  {
    zip: 9962,
    settlement: "Magyarlak",
    countyId: 17,
  },
  {
    zip: 7925,
    settlement: "Magyarlukafa",
    countyId: 2,
  },
  {
    zip: 7954,
    settlement: "Magyarmecske",
    countyId: 2,
  },
  {
    zip: 9909,
    settlement: "Magyarnádalja",
    countyId: 17,
  },
  {
    zip: 2694,
    settlement: "Magyarnándor",
    countyId: 12,
  },
  {
    zip: 8449,
    settlement: "Magyarpolány",
    countyId: 18,
  },
  {
    zip: 7761,
    settlement: "Magyarsarlós",
    countyId: 2,
  },
  {
    zip: 9912,
    settlement: "Magyarszecsõd",
    countyId: 17,
  },
  {
    zip: 7396,
    settlement: "Magyarszék",
    countyId: 2,
  },
  {
    zip: 8776,
    settlement: "Magyarszentmiklós",
    countyId: 19,
  },
  {
    zip: 8776,
    settlement: "Magyarszerdahely",
    countyId: 19,
  },
  {
    zip: 9946,
    settlement: "Magyarszombatfa",
    countyId: 17,
  },
  {
    zip: 7954,
    settlement: "Magyartelek",
    countyId: 2,
  },
  {
    zip: 2339,
    settlement: "Majosháza",
    countyId: 13,
  },
  {
    zip: 7783,
    settlement: "Majs",
    countyId: 2,
  },
  {
    zip: 2322,
    settlement: "Makád",
    countyId: 13,
  },
  {
    zip: 3959,
    settlement: "Makkoshotyka",
    countyId: 4,
  },
  {
    zip: 3397,
    settlement: "Maklár",
    countyId: 9,
  },
  {
    zip: 6900,
    settlement: "Makó",
    countyId: 5,
  },
  {
    zip: 6903,
    settlement: "Makó",
    countyId: 5,
  },
  {
    zip: 8533,
    settlement: "Malomsok",
    countyId: 18,
  },
  {
    zip: 3434,
    settlement: "Mályi",
    countyId: 4,
  },
  {
    zip: 3645,
    settlement: "Mályinka",
    countyId: 4,
  },
  {
    zip: 4942,
    settlement: "Mánd",
    countyId: 15,
  },
  {
    zip: 4644,
    settlement: "Mándok",
    countyId: 15,
  },
  {
    zip: 7304,
    settlement: "Mánfa",
    countyId: 2,
  },
  {
    zip: 2065,
    settlement: "Mány",
    countyId: 6,
  },
  {
    zip: 7733,
    settlement: "Maráza",
    countyId: 2,
  },
  {
    zip: 9534,
    settlement: "Marcalgergelyi",
    countyId: 18,
  },
  {
    zip: 8700,
    settlement: "Marcali",
    countyId: 14,
  },
  {
    zip: 8709,
    settlement: "Marcali",
    countyId: 14,
  },
  {
    zip: 8714,
    settlement: "Marcali",
    countyId: 14,
  },
  {
    zip: 8531,
    settlement: "Marcaltõ",
    countyId: 18,
  },
  {
    zip: 8532,
    settlement: "Marcaltõ",
    countyId: 18,
  },
  {
    zip: 7817,
    settlement: "Márfa",
    countyId: 2,
  },
  {
    zip: 2527,
    settlement: "Máriahalom",
    countyId: 11,
  },
  {
    zip: 9231,
    settlement: "Máriakálnok",
    countyId: 7,
  },
  {
    zip: 7663,
    settlement: "Máriakéménd",
    countyId: 2,
  },
  {
    zip: 2629,
    settlement: "Márianosztra",
    countyId: 13,
  },
  {
    zip: 4326,
    settlement: "Máriapócs",
    countyId: 15,
  },
  {
    zip: 3262,
    settlement: "Markaz",
    countyId: 9,
  },
  {
    zip: 3075,
    settlement: "Márkháza",
    countyId: 12,
  },
  {
    zip: 8441,
    settlement: "Márkó",
    countyId: 18,
  },
  {
    zip: 7967,
    settlement: "Markóc",
    countyId: 2,
  },
  {
    zip: 9164,
    settlement: "Markotabödöge",
    countyId: 7,
  },
  {
    zip: 8888,
    settlement: "Maróc",
    countyId: 19,
  },
  {
    zip: 7960,
    settlement: "Marócsa",
    countyId: 2,
  },
  {
    zip: 7774,
    settlement: "Márok",
    countyId: 2,
  },
  {
    zip: 8976,
    settlement: "Márokföld",
    countyId: 19,
  },
  {
    zip: 4932,
    settlement: "Márokpapi",
    countyId: 15,
  },
  {
    zip: 6921,
    settlement: "Maroslele",
    countyId: 5,
  },
  {
    zip: 6636,
    settlement: "Mártély",
    countyId: 5,
  },
  {
    zip: 5435,
    settlement: "Martfû",
    countyId: 10,
  },
  {
    zip: 7720,
    settlement: "Martonfa",
    countyId: 2,
  },
  {
    zip: 2462,
    settlement: "Martonvásár",
    countyId: 6,
  },
  {
    zip: 3755,
    settlement: "Martonyi",
    countyId: 4,
  },
  {
    zip: 4700,
    settlement: "Mátészalka",
    countyId: 15,
  },
  {
    zip: 6452,
    settlement: "Mátételke",
    countyId: 1,
  },
  {
    zip: 3247,
    settlement: "Mátraballa",
    countyId: 9,
  },
  {
    zip: 3246,
    settlement: "Mátraderecske",
    countyId: 9,
  },
  {
    zip: 3155,
    settlement: "Mátramindszent",
    countyId: 12,
  },
  {
    zip: 3143,
    settlement: "Mátranovák",
    countyId: 12,
  },
  {
    zip: 3144,
    settlement: "Mátranovák",
    countyId: 12,
  },
  {
    zip: 3142,
    settlement: "Mátraszele",
    countyId: 12,
  },
  {
    zip: 3234,
    settlement: "Mátraszentimre",
    countyId: 9,
  },
  {
    zip: 3235,
    settlement: "Mátraszentimre",
    countyId: 9,
  },
  {
    zip: 3068,
    settlement: "Mátraszõlõs",
    countyId: 12,
  },
  {
    zip: 3145,
    settlement: "Mátraterenye",
    countyId: 12,
  },
  {
    zip: 3146,
    settlement: "Mátraterenye",
    countyId: 12,
  },
  {
    zip: 3077,
    settlement: "Mátraverebély",
    countyId: 12,
  },
  {
    zip: 7854,
    settlement: "Matty",
    countyId: 2,
  },
  {
    zip: 8134,
    settlement: "Mátyásdomb",
    countyId: 6,
  },
  {
    zip: 4835,
    settlement: "Mátyus",
    countyId: 15,
  },
  {
    zip: 7351,
    settlement: "Máza",
    countyId: 2,
  },
  {
    zip: 7695,
    settlement: "Mecseknádasd",
    countyId: 2,
  },
  {
    zip: 7300,
    settlement: "Mecsekpölöske",
    countyId: 2,
  },
  {
    zip: 9176,
    settlement: "Mecsér",
    countyId: 7,
  },
  {
    zip: 5663,
    settlement: "Medgyesbodzás",
    countyId: 3,
  },
  {
    zip: 5664,
    settlement: "Medgyesbodzás",
    countyId: 3,
  },
  {
    zip: 5666,
    settlement: "Medgyesegyháza",
    countyId: 3,
  },
  {
    zip: 5752,
    settlement: "Medgyesegyháza",
    countyId: 3,
  },
  {
    zip: 7057,
    settlement: "Medina",
    countyId: 16,
  },
  {
    zip: 9757,
    settlement: "Meggyeskovácsi",
    countyId: 17,
  },
  {
    zip: 3718,
    settlement: "Megyaszó",
    countyId: 4,
  },
  {
    zip: 9754,
    settlement: "Megyehid",
    countyId: 17,
  },
  {
    zip: 8348,
    settlement: "Megyer",
    countyId: 18,
  },
  {
    zip: 5726,
    settlement: "Méhkerék",
    countyId: 3,
  },
  {
    zip: 4975,
    settlement: "Méhtelek",
    countyId: 15,
  },
  {
    zip: 7344,
    settlement: "Mekényes",
    countyId: 2,
  },
  {
    zip: 6449,
    settlement: "Mélykút",
    countyId: 1,
  },
  {
    zip: 8271,
    settlement: "Mencshely",
    countyId: 18,
  },
  {
    zip: 2235,
    settlement: "Mende",
    countyId: 13,
  },
  {
    zip: 3871,
    settlement: "Méra",
    countyId: 4,
  },
  {
    zip: 7981,
    settlement: "Merenye",
    countyId: 2,
  },
  {
    zip: 9136,
    settlement: "Mérges",
    countyId: 7,
  },
  {
    zip: 4352,
    settlement: "Mérk",
    countyId: 15,
  },
  {
    zip: 7453,
    settlement: "Mernye",
    countyId: 14,
  },
  {
    zip: 9531,
    settlement: "Mersevát",
    countyId: 17,
  },
  {
    zip: 9662,
    settlement: "Mesterháza",
    countyId: 17,
  },
  {
    zip: 9551,
    settlement: "Mesteri",
    countyId: 17,
  },
  {
    zip: 5452,
    settlement: "Mesterszállás",
    countyId: 10,
  },
  {
    zip: 3754,
    settlement: "Meszes",
    countyId: 4,
  },
  {
    zip: 9745,
    settlement: "Meszlen",
    countyId: 17,
  },
  {
    zip: 8716,
    settlement: "Mesztegnyõ",
    countyId: 14,
  },
  {
    zip: 5650,
    settlement: "Mezõberény",
    countyId: 3,
  },
  {
    zip: 3450,
    settlement: "Mezõcsát",
    countyId: 4,
  },
  {
    zip: 7434,
    settlement: "Mezõcsokonya",
    countyId: 14,
  },
  {
    zip: 7370,
    settlement: "Mezõd",
    countyId: 2,
  },
  {
    zip: 2422,
    settlement: "Mezõfalva",
    countyId: 6,
  },
  {
    zip: 5732,
    settlement: "Mezõgyán",
    countyId: 3,
  },
  {
    zip: 5820,
    settlement: "Mezõhegyes",
    countyId: 3,
  },
  {
    zip: 5453,
    settlement: "Mezõhék",
    countyId: 10,
  },
  {
    zip: 3441,
    settlement: "Mezõkeresztes",
    countyId: 4,
  },
  {
    zip: 8137,
    settlement: "Mezõkomárom",
    countyId: 6,
  },
  {
    zip: 5800,
    settlement: "Mezõkovácsháza",
    countyId: 3,
  },
  {
    zip: 3400,
    settlement: "Mezõkövesd",
    countyId: 4,
  },
  {
    zip: 4641,
    settlement: "Mezõladány",
    countyId: 15,
  },
  {
    zip: 8514,
    settlement: "Mezõlak",
    countyId: 18,
  },
  {
    zip: 3443,
    settlement: "Mezõnagymihály",
    countyId: 4,
  },
  {
    zip: 3421,
    settlement: "Mezõnyárád",
    countyId: 4,
  },
  {
    zip: 4118,
    settlement: "Mezõpeterd",
    countyId: 8,
  },
  {
    zip: 4134,
    settlement: "Mezõsas",
    countyId: 8,
  },
  {
    zip: 3378,
    settlement: "Mezõszemere",
    countyId: 9,
  },
  {
    zip: 8133,
    settlement: "Mezõszentgyörgy",
    countyId: 6,
  },
  {
    zip: 7017,
    settlement: "Mezõszilas",
    countyId: 6,
  },
  {
    zip: 3375,
    settlement: "Mezõtárkány",
    countyId: 9,
  },
  {
    zip: 5400,
    settlement: "Mezõtúr",
    countyId: 10,
  },
  {
    zip: 3931,
    settlement: "Mezõzombor",
    countyId: 4,
  },
  {
    zip: 9097,
    settlement: "Mezõörs",
    countyId: 7,
  },
  {
    zip: 9098,
    settlement: "Mezõörs",
    countyId: 7,
  },
  {
    zip: 8825,
    settlement: "Miháld",
    countyId: 19,
  },
  {
    zip: 8341,
    settlement: "Mihályfa",
    countyId: 19,
  },
  {
    zip: 3184,
    settlement: "Mihálygerge",
    countyId: 12,
  },
  {
    zip: 8513,
    settlement: "Mihályháza",
    countyId: 18,
  },
  {
    zip: 9342,
    settlement: "Mihályi",
    countyId: 7,
  },
  {
    zip: 7512,
    settlement: "Mike",
    countyId: 14,
  },
  {
    zip: 2736,
    settlement: "Mikebuda",
    countyId: 13,
  },
  {
    zip: 8949,
    settlement: "Mikekarácsonyfa",
    countyId: 19,
  },
  {
    zip: 4271,
    settlement: "Mikepércs",
    countyId: 8,
  },
  {
    zip: 7286,
    settlement: "Miklósi",
    countyId: 14,
  },
  {
    zip: 3344,
    settlement: "Mikófalva",
    countyId: 9,
  },
  {
    zip: 3989,
    settlement: "Mikóháza",
    countyId: 4,
  },
  {
    zip: 9835,
    settlement: "Mikosszéplak",
    countyId: 17,
  },
  {
    zip: 8917,
    settlement: "Milejszeg",
    countyId: 19,
  },
  {
    zip: 4948,
    settlement: "Milota",
    countyId: 15,
  },
  {
    zip: 6630,
    settlement: "Mindszent",
    countyId: 5,
  },
  {
    zip: 7391,
    settlement: "Mindszentgodisa",
    countyId: 2,
  },
  {
    zip: 8282,
    settlement: "Mindszentkálla",
    countyId: 18,
  },
  {
    zip: 8935,
    settlement: "Misefa",
    countyId: 19,
  },
  {
    zip: 6343,
    settlement: "Miske",
    countyId: 1,
  },
  {
    zip: 3500,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3501,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3508,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3510,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3515,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3516,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3517,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3518,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3519,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3521,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3524,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3525,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3526,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3527,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3528,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3529,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3530,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3531,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3532,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3533,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3534,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 3535,
    settlement: "Miskolc",
    countyId: 4,
  },
  {
    zip: 7065,
    settlement: "Miszla",
    countyId: 16,
  },
  {
    zip: 2911,
    settlement: "Mocsa",
    countyId: 11,
  },
  {
    zip: 7163,
    settlement: "Mõcsény",
    countyId: 16,
  },
  {
    zip: 2146,
    settlement: "Mogyoród",
    countyId: 13,
  },
  {
    zip: 2535,
    settlement: "Mogyorósbánya",
    countyId: 11,
  },
  {
    zip: 3893,
    settlement: "Mogyoróska",
    countyId: 4,
  },
  {
    zip: 8042,
    settlement: "Moha",
    countyId: 6,
  },
  {
    zip: 7700,
    settlement: "Mohács",
    countyId: 2,
  },
  {
    zip: 7714,
    settlement: "Mohács",
    countyId: 2,
  },
  {
    zip: 7715,
    settlement: "Mohács",
    countyId: 2,
  },
  {
    zip: 2698,
    settlement: "Mohora",
    countyId: 12,
  },
  {
    zip: 8863,
    settlement: "Molnári",
    countyId: 19,
  },
  {
    zip: 9912,
    settlement: "Molnaszecsõd",
    countyId: 17,
  },
  {
    zip: 7981,
    settlement: "Molvány",
    countyId: 2,
  },
  {
    zip: 3812,
    settlement: "Monaj",
    countyId: 4,
  },
  {
    zip: 3905,
    settlement: "Monok",
    countyId: 4,
  },
  {
    zip: 2200,
    settlement: "Monor",
    countyId: 13,
  },
  {
    zip: 2213,
    settlement: "Monor",
    countyId: 13,
  },
  {
    zip: 3345,
    settlement: "Mónosbél",
    countyId: 9,
  },
  {
    zip: 8296,
    settlement: "Monostorapáti",
    countyId: 18,
  },
  {
    zip: 4275,
    settlement: "Monostorpályi",
    countyId: 8,
  },
  {
    zip: 8273,
    settlement: "Monoszló",
    countyId: 18,
  },
  {
    zip: 7751,
    settlement: "Monyoród",
    countyId: 2,
  },
  {
    zip: 8060,
    settlement: "Mór",
    countyId: 6,
  },
  {
    zip: 7165,
    settlement: "Mórágy",
    countyId: 16,
  },
  {
    zip: 6782,
    settlement: "Mórahalom",
    countyId: 5,
  },
  {
    zip: 6132,
    settlement: "Móricgát",
    countyId: 1,
  },
  {
    zip: 9131,
    settlement: "Mórichida",
    countyId: 7,
  },
  {
    zip: 7257,
    settlement: "Mosdós",
    countyId: 14,
  },
  {
    zip: 9200,
    settlement: "Mosonmagyaróvár",
    countyId: 7,
  },
  {
    zip: 9154,
    settlement: "Mosonszentmiklós",
    countyId: 7,
  },
  {
    zip: 9183,
    settlement: "Mosonszentmiklós",
    countyId: 7,
  },
  {
    zip: 9245,
    settlement: "Mosonszolnok",
    countyId: 7,
  },
  {
    zip: 7932,
    settlement: "Mozsgó",
    countyId: 2,
  },
  {
    zip: 7185,
    settlement: "Mucsfa",
    countyId: 16,
  },
  {
    zip: 7195,
    settlement: "Mucsi",
    countyId: 16,
  },
  {
    zip: 3744,
    settlement: "Múcsony",
    countyId: 4,
  },
  {
    zip: 3552,
    settlement: "Muhi",
    countyId: 4,
  },
  {
    zip: 8834,
    settlement: "Murakeresztúr",
    countyId: 19,
  },
  {
    zip: 8868,
    settlement: "Murarátka",
    countyId: 19,
  },
  {
    zip: 8872,
    settlement: "Muraszemenye",
    countyId: 19,
  },
  {
    zip: 7176,
    settlement: "Murga",
    countyId: 16,
  },
  {
    zip: 5672,
    settlement: "Murony",
    countyId: 3,
  },
  {
    zip: 4911,
    settlement: "Nábrád",
    countyId: 15,
  },
  {
    zip: 8097,
    settlement: "Nadap",
    countyId: 6,
  },
  {
    zip: 9915,
    settlement: "Nádasd",
    countyId: 17,
  },
  {
    zip: 8145,
    settlement: "Nádasdladány",
    countyId: 6,
  },
  {
    zip: 4181,
    settlement: "Nádudvar",
    countyId: 8,
  },
  {
    zip: 8674,
    settlement: "Nágocs",
    countyId: 14,
  },
  {
    zip: 8521,
    settlement: "Nagyacsád",
    countyId: 18,
  },
  {
    zip: 8484,
    settlement: "Nagyalásony",
    countyId: 18,
  },
  {
    zip: 4922,
    settlement: "Nagyar",
    countyId: 15,
  },
  {
    zip: 7500,
    settlement: "Nagyatád",
    countyId: 14,
  },
  {
    zip: 9063,
    settlement: "Nagybajcs",
    countyId: 7,
  },
  {
    zip: 7561,
    settlement: "Nagybajom",
    countyId: 14,
  },
  {
    zip: 8821,
    settlement: "Nagybakónak",
    countyId: 19,
  },
  {
    zip: 5668,
    settlement: "Nagybánhegyes",
    countyId: 3,
  },
  {
    zip: 6527,
    settlement: "Nagybaracska",
    countyId: 1,
  },
  {
    zip: 3641,
    settlement: "Nagybarca",
    countyId: 4,
  },
  {
    zip: 3075,
    settlement: "Nagybárkány",
    countyId: 12,
  },
  {
    zip: 8656,
    settlement: "Nagyberény",
    countyId: 14,
  },
  {
    zip: 7255,
    settlement: "Nagyberki",
    countyId: 14,
  },
  {
    zip: 7756,
    settlement: "Nagybudmér",
    countyId: 2,
  },
  {
    zip: 2634,
    settlement: "Nagybörzsöny",
    countyId: 13,
  },
  {
    zip: 9485,
    settlement: "Nagycenk",
    countyId: 7,
  },
  {
    zip: 7838,
    settlement: "Nagycsány",
    countyId: 2,
  },
  {
    zip: 3598,
    settlement: "Nagycsécs",
    countyId: 4,
  },
  {
    zip: 8628,
    settlement: "Nagycsepely",
    countyId: 14,
  },
  {
    zip: 4445,
    settlement: "Nagycserkesz",
    countyId: 15,
  },
  {
    zip: 8554,
    settlement: "Nagydém",
    countyId: 18,
  },
  {
    zip: 4823,
    settlement: "Nagydobos",
    countyId: 15,
  },
  {
    zip: 7985,
    settlement: "Nagydobsza",
    countyId: 2,
  },
  {
    zip: 7044,
    settlement: "Nagydorog",
    countyId: 16,
  },
  {
    zip: 4355,
    settlement: "Nagyecsed",
    countyId: 15,
  },
  {
    zip: 6917,
    settlement: "Nagyér",
    countyId: 5,
  },
  {
    zip: 8415,
    settlement: "Nagyesztergár",
    countyId: 18,
  },
  {
    zip: 3282,
    settlement: "Nagyfüged",
    countyId: 9,
  },
  {
    zip: 9664,
    settlement: "Nagygeresd",
    countyId: 17,
  },
  {
    zip: 8551,
    settlement: "Nagygyimót",
    countyId: 18,
  },
  {
    zip: 8356,
    settlement: "Nagygörbõ",
    countyId: 19,
  },
  {
    zip: 7343,
    settlement: "Nagyhajmás",
    countyId: 2,
  },
  {
    zip: 4485,
    settlement: "Nagyhalász",
    countyId: 15,
  },
  {
    zip: 7822,
    settlement: "Nagyharsány",
    countyId: 2,
  },
  {
    zip: 4064,
    settlement: "Nagyhegyes",
    countyId: 8,
  },
  {
    zip: 4977,
    settlement: "Nagyhódos",
    countyId: 15,
  },
  {
    zip: 3994,
    settlement: "Nagyhuta",
    countyId: 4,
  },
  {
    zip: 2942,
    settlement: "Nagyigmánd",
    countyId: 11,
  },
  {
    zip: 5363,
    settlement: "Nagyiván",
    countyId: 10,
  },
  {
    zip: 4320,
    settlement: "Nagykálló",
    countyId: 15,
  },
  {
    zip: 5751,
    settlement: "Nagykamarás",
    countyId: 3,
  },
  {
    zip: 8800,
    settlement: "Nagykanizsa",
    countyId: 19,
  },
  {
    zip: 8808,
    settlement: "Nagykanizsa",
    countyId: 19,
  },
  {
    zip: 8809,
    settlement: "Nagykanizsa",
    countyId: 19,
  },
  {
    zip: 8831,
    settlement: "Nagykanizsa",
    countyId: 19,
  },
  {
    zip: 8935,
    settlement: "Nagykapornak",
    countyId: 19,
  },
  {
    zip: 2425,
    settlement: "Nagykarácsony",
    countyId: 6,
  },
  {
    zip: 2760,
    settlement: "Nagykáta",
    countyId: 13,
  },
  {
    zip: 4127,
    settlement: "Nagykereki",
    countyId: 8,
  },
  {
    zip: 3129,
    settlement: "Nagykeresztúr",
    countyId: 12,
  },
  {
    zip: 3844,
    settlement: "Nagykinizs",
    countyId: 4,
  },
  {
    zip: 7092,
    settlement: "Nagykónyi",
    countyId: 16,
  },
  {
    zip: 7545,
    settlement: "Nagykorpád",
    countyId: 14,
  },
  {
    zip: 2750,
    settlement: "Nagykõrös",
    countyId: 13,
  },
  {
    zip: 2094,
    settlement: "Nagykovácsi",
    countyId: 13,
  },
  {
    zip: 7741,
    settlement: "Nagykozár",
    countyId: 2,
  },
  {
    zip: 8911,
    settlement: "Nagykutas",
    countyId: 19,
  },
  {
    zip: 3012,
    settlement: "Nagykökényes",
    countyId: 9,
  },
  {
    zip: 9784,
    settlement: "Nagykölked",
    countyId: 17,
  },
  {
    zip: 5065,
    settlement: "Nagykörû",
    countyId: 10,
  },
  {
    zip: 6933,
    settlement: "Nagylak",
    countyId: 5,
  },
  {
    zip: 8983,
    settlement: "Nagylengyel",
    countyId: 19,
  },
  {
    zip: 3175,
    settlement: "Nagylóc",
    countyId: 12,
  },
  {
    zip: 2435,
    settlement: "Nagylók",
    countyId: 6,
  },
  {
    zip: 9482,
    settlement: "Nagylózs",
    countyId: 7,
  },
  {
    zip: 6622,
    settlement: "Nagymágocs",
    countyId: 5,
  },
  {
    zip: 7355,
    settlement: "Nagymányok",
    countyId: 16,
  },
  {
    zip: 2626,
    settlement: "Nagymaros",
    countyId: 13,
  },
  {
    zip: 9913,
    settlement: "Nagymizdó",
    countyId: 17,
  },
  {
    zip: 7784,
    settlement: "Nagynyárád",
    countyId: 2,
  },
  {
    zip: 2645,
    settlement: "Nagyoroszi",
    countyId: 12,
  },
  {
    zip: 8912,
    settlement: "Nagypáli",
    countyId: 19,
  },
  {
    zip: 7731,
    settlement: "Nagypall",
    countyId: 2,
  },
  {
    zip: 7912,
    settlement: "Nagypeterd",
    countyId: 2,
  },
  {
    zip: 8496,
    settlement: "Nagypirit",
    countyId: 18,
  },
  {
    zip: 4173,
    settlement: "Nagyrábé",
    countyId: 8,
  },
  {
    zip: 8746,
    settlement: "Nagyrada",
    countyId: 19,
  },
  {
    zip: 9938,
    settlement: "Nagyrákos",
    countyId: 17,
  },
  {
    zip: 8756,
    settlement: "Nagyrécse",
    countyId: 19,
  },
  {
    zip: 3214,
    settlement: "Nagyréde",
    countyId: 9,
  },
  {
    zip: 5463,
    settlement: "Nagyrév",
    countyId: 10,
  },
  {
    zip: 3965,
    settlement: "Nagyrozvágy",
    countyId: 4,
  },
  {
    zip: 2524,
    settlement: "Nagysáp",
    countyId: 11,
  },
  {
    zip: 9561,
    settlement: "Nagysimonyi",
    countyId: 17,
  },
  {
    zip: 8739,
    settlement: "Nagyszakácsi",
    countyId: 14,
  },
  {
    zip: 7085,
    settlement: "Nagyszékely",
    countyId: 16,
  },
  {
    zip: 4962,
    settlement: "Nagyszekeres",
    countyId: 15,
  },
  {
    zip: 5931,
    settlement: "Nagyszénás",
    countyId: 3,
  },
  {
    zip: 9072,
    settlement: "Nagyszentjános",
    countyId: 7,
  },
  {
    zip: 7097,
    settlement: "Nagyszokoly",
    countyId: 16,
  },
  {
    zip: 3398,
    settlement: "Nagytálya",
    countyId: 9,
  },
  {
    zip: 2142,
    settlement: "Nagytarcsa",
    countyId: 13,
  },
  {
    zip: 8562,
    settlement: "Nagytevel",
    countyId: 18,
  },
  {
    zip: 9832,
    settlement: "Nagytilaj",
    countyId: 17,
  },
  {
    zip: 6612,
    settlement: "Nagytõke",
    countyId: 5,
  },
  {
    zip: 7800,
    settlement: "Nagytótfalu",
    countyId: 2,
  },
  {
    zip: 3357,
    settlement: "Nagyút",
    countyId: 9,
  },
  {
    zip: 4812,
    settlement: "Nagyvarsány",
    countyId: 15,
  },
  {
    zip: 7912,
    settlement: "Nagyváty",
    countyId: 2,
  },
  {
    zip: 8291,
    settlement: "Nagyvázsony",
    countyId: 18,
  },
  {
    zip: 7186,
    settlement: "Nagyvejke",
    countyId: 16,
  },
  {
    zip: 8065,
    settlement: "Nagyveleg",
    countyId: 6,
  },
  {
    zip: 2421,
    settlement: "Nagyvenyim",
    countyId: 6,
  },
  {
    zip: 3349,
    settlement: "Nagyvisnyó",
    countyId: 9,
  },
  {
    zip: 7215,
    settlement: "Nak",
    countyId: 16,
  },
  {
    zip: 4552,
    settlement: "Napkor",
    countyId: 15,
  },
  {
    zip: 9797,
    settlement: "Nárai",
    countyId: 17,
  },
  {
    zip: 9793,
    settlement: "Narda",
    countyId: 17,
  },
  {
    zip: 2899,
    settlement: "Naszály",
    countyId: 11,
  },
  {
    zip: 3463,
    settlement: "Négyes",
    countyId: 4,
  },
  {
    zip: 3646,
    settlement: "Nekézseny",
    countyId: 4,
  },
  {
    zip: 8923,
    settlement: "Nemesapáti",
    countyId: 19,
  },
  {
    zip: 3592,
    settlement: "Nemesbikk",
    countyId: 4,
  },
  {
    zip: 9749,
    settlement: "Nemesbõd",
    countyId: 17,
  },
  {
    zip: 4942,
    settlement: "Nemesborzova",
    countyId: 15,
  },
  {
    zip: 8371,
    settlement: "Nemesbük",
    countyId: 19,
  },
  {
    zip: 9739,
    settlement: "Nemescsó",
    countyId: 17,
  },
  {
    zip: 8722,
    settlement: "Nemesdéd",
    countyId: 14,
  },
  {
    zip: 8284,
    settlement: "Nemesgulács",
    countyId: 18,
  },
  {
    zip: 8522,
    settlement: "Nemesgörzsöny",
    countyId: 18,
  },
  {
    zip: 8471,
    settlement: "Nemeshany",
    countyId: 18,
  },
  {
    zip: 8925,
    settlement: "Nemeshetés",
    countyId: 19,
  },
  {
    zip: 7981,
    settlement: "Nemeske",
    countyId: 2,
  },
  {
    zip: 9471,
    settlement: "Nemeskér",
    countyId: 7,
  },
  {
    zip: 9548,
    settlement: "Nemeskeresztúr",
    countyId: 17,
  },
  {
    zip: 8717,
    settlement: "Nemeskisfalud",
    countyId: 14,
  },
  {
    zip: 9542,
    settlement: "Nemeskocs",
    countyId: 17,
  },
  {
    zip: 9775,
    settlement: "Nemeskolta",
    countyId: 17,
  },
  {
    zip: 9663,
    settlement: "Nemesládony",
    countyId: 17,
  },
  {
    zip: 9953,
    settlement: "Nemesmedves",
    countyId: 17,
  },
  {
    zip: 6345,
    settlement: "Nemesnádudvar",
    countyId: 1,
  },
  {
    zip: 8976,
    settlement: "Nemesnép",
    countyId: 19,
  },
  {
    zip: 8856,
    settlement: "Nemespátró",
    countyId: 19,
  },
  {
    zip: 8915,
    settlement: "Nemesrádó",
    countyId: 19,
  },
  {
    zip: 9782,
    settlement: "Nemesrempehollós",
    countyId: 17,
  },
  {
    zip: 8925,
    settlement: "Nemessándorháza",
    countyId: 19,
  },
  {
    zip: 9533,
    settlement: "Nemesszalók",
    countyId: 18,
  },
  {
    zip: 8925,
    settlement: "Nemesszentandrás",
    countyId: 19,
  },
  {
    zip: 8248,
    settlement: "Nemesvámos",
    countyId: 18,
  },
  {
    zip: 8738,
    settlement: "Nemesvid",
    countyId: 14,
  },
  {
    zip: 8311,
    settlement: "Nemesvita",
    countyId: 18,
  },
  {
    zip: 8581,
    settlement: "Németbánya",
    countyId: 18,
  },
  {
    zip: 8918,
    settlement: "Németfalu",
    countyId: 19,
  },
  {
    zip: 7039,
    settlement: "Németkér",
    countyId: 16,
  },
  {
    zip: 3152,
    settlement: "Nemti",
    countyId: 12,
  },
  {
    zip: 2544,
    settlement: "Neszmély",
    countyId: 11,
  },
  {
    zip: 2618,
    settlement: "Nézsa",
    countyId: 12,
  },
  {
    zip: 9652,
    settlement: "Nick",
    countyId: 17,
  },
  {
    zip: 8706,
    settlement: "Nikla",
    countyId: 14,
  },
  {
    zip: 2642,
    settlement: "Nógrád",
    countyId: 12,
  },
  {
    zip: 2691,
    settlement: "Nógrádkövesd",
    countyId: 12,
  },
  {
    zip: 2675,
    settlement: "Nógrádmarcal",
    countyId: 12,
  },
  {
    zip: 3132,
    settlement: "Nógrádmegyer",
    countyId: 12,
  },
  {
    zip: 2685,
    settlement: "Nógrádsáp",
    countyId: 12,
  },
  {
    zip: 3179,
    settlement: "Nógrádsipek",
    countyId: 12,
  },
  {
    zip: 3187,
    settlement: "Nógrádszakál",
    countyId: 12,
  },
  {
    zip: 8591,
    settlement: "Nóráp",
    countyId: 18,
  },
  {
    zip: 8456,
    settlement: "Noszlop",
    countyId: 18,
  },
  {
    zip: 3325,
    settlement: "Noszvaj",
    countyId: 9,
  },
  {
    zip: 2610,
    settlement: "Nõtincs",
    countyId: 12,
  },
  {
    zip: 8948,
    settlement: "Nova",
    countyId: 19,
  },
  {
    zip: 3327,
    settlement: "Novaj",
    countyId: 9,
  },
  {
    zip: 3872,
    settlement: "Novajidrány",
    countyId: 4,
  },
  {
    zip: 9096,
    settlement: "Nyalka",
    countyId: 7,
  },
  {
    zip: 8512,
    settlement: "Nyárád",
    countyId: 18,
  },
  {
    zip: 2723,
    settlement: "Nyáregyháza",
    countyId: 13,
  },
  {
    zip: 6032,
    settlement: "Nyárlõrinc",
    countyId: 1,
  },
  {
    zip: 2712,
    settlement: "Nyársapát",
    countyId: 13,
  },
  {
    zip: 3433,
    settlement: "Nyékládháza",
    countyId: 4,
  },
  {
    zip: 2536,
    settlement: "Nyergesújfalu",
    countyId: 11,
  },
  {
    zip: 2537,
    settlement: "Nyergesújfalu",
    countyId: 11,
  },
  {
    zip: 3809,
    settlement: "Nyésta",
    countyId: 4,
  },
  {
    zip: 8612,
    settlement: "Nyim",
    countyId: 14,
  },
  {
    zip: 4264,
    settlement: "Nyírábrány",
    countyId: 8,
  },
  {
    zip: 4262,
    settlement: "Nyíracsád",
    countyId: 8,
  },
  {
    zip: 8454,
    settlement: "Nyirád",
    countyId: 18,
  },
  {
    zip: 4252,
    settlement: "Nyíradony",
    countyId: 8,
  },
  {
    zip: 4253,
    settlement: "Nyíradony",
    countyId: 8,
  },
  {
    zip: 4254,
    settlement: "Nyíradony",
    countyId: 8,
  },
  {
    zip: 4300,
    settlement: "Nyírbátor",
    countyId: 15,
  },
  {
    zip: 4372,
    settlement: "Nyírbéltek",
    countyId: 15,
  },
  {
    zip: 4361,
    settlement: "Nyírbogát",
    countyId: 15,
  },
  {
    zip: 4511,
    settlement: "Nyírbogdány",
    countyId: 15,
  },
  {
    zip: 4356,
    settlement: "Nyírcsaholy",
    countyId: 15,
  },
  {
    zip: 4331,
    settlement: "Nyírcsászári",
    countyId: 15,
  },
  {
    zip: 4332,
    settlement: "Nyírderzs",
    countyId: 15,
  },
  {
    zip: 4246,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4400,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4405,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4412,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4431,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4432,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4433,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4481,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4551,
    settlement: "Nyíregyháza",
    countyId: 15,
  },
  {
    zip: 4362,
    settlement: "Nyírgelse",
    countyId: 15,
  },
  {
    zip: 4311,
    settlement: "Nyírgyulaj",
    countyId: 15,
  },
  {
    zip: 3997,
    settlement: "Nyíri",
    countyId: 4,
  },
  {
    zip: 4535,
    settlement: "Nyíribrony",
    countyId: 15,
  },
  {
    zip: 4541,
    settlement: "Nyírjákó",
    countyId: 15,
  },
  {
    zip: 4544,
    settlement: "Nyírkarász",
    countyId: 15,
  },
  {
    zip: 4333,
    settlement: "Nyírkáta",
    countyId: 15,
  },
  {
    zip: 4537,
    settlement: "Nyírkércs",
    countyId: 15,
  },
  {
    zip: 4371,
    settlement: "Nyírlugos",
    countyId: 15,
  },
  {
    zip: 4632,
    settlement: "Nyírlövõ",
    countyId: 15,
  },
  {
    zip: 4564,
    settlement: "Nyírmada",
    countyId: 15,
  },
  {
    zip: 4263,
    settlement: "Nyírmártonfalva",
    countyId: 8,
  },
  {
    zip: 4722,
    settlement: "Nyírmeggyes",
    countyId: 15,
  },
  {
    zip: 4363,
    settlement: "Nyírmihálydi",
    countyId: 15,
  },
  {
    zip: 4822,
    settlement: "Nyírparasznya",
    countyId: 15,
  },
  {
    zip: 4531,
    settlement: "Nyírpazony",
    countyId: 15,
  },
  {
    zip: 4376,
    settlement: "Nyírpilis",
    countyId: 15,
  },
  {
    zip: 4522,
    settlement: "Nyírtass",
    countyId: 15,
  },
  {
    zip: 4461,
    settlement: "Nyírtelek",
    countyId: 15,
  },
  {
    zip: 4554,
    settlement: "Nyírtét",
    countyId: 15,
  },
  {
    zip: 4532,
    settlement: "Nyírtura",
    countyId: 15,
  },
  {
    zip: 4341,
    settlement: "Nyírvasvári",
    countyId: 15,
  },
  {
    zip: 9682,
    settlement: "Nyõgér",
    countyId: 17,
  },
  {
    zip: 3795,
    settlement: "Nyomár",
    countyId: 4,
  },
  {
    zip: 7912,
    settlement: "Nyugotszenterzsébet",
    countyId: 2,
  },
  {
    zip: 9082,
    settlement: "Nyúl",
    countyId: 7,
  },
  {
    zip: 7695,
    settlement: "Óbánya",
    countyId: 2,
  },
  {
    zip: 2063,
    settlement: "Óbarok",
    countyId: 6,
  },
  {
    zip: 8272,
    settlement: "Óbudavár",
    countyId: 18,
  },
  {
    zip: 2364,
    settlement: "Ócsa",
    countyId: 13,
  },
  {
    zip: 7814,
    settlement: "Ócsárd",
    countyId: 2,
  },
  {
    zip: 7143,
    settlement: "Õcsény",
    countyId: 16,
  },
  {
    zip: 7695,
    settlement: "Ófalu",
    countyId: 2,
  },
  {
    zip: 4558,
    settlement: "Ófehértó",
    countyId: 15,
  },
  {
    zip: 6923,
    settlement: "Óföldeák",
    countyId: 5,
  },
  {
    zip: 8342,
    settlement: "Óhid",
    countyId: 19,
  },
  {
    zip: 5534,
    settlement: "Okány",
    countyId: 3,
  },
  {
    zip: 7957,
    settlement: "Okorág",
    countyId: 2,
  },
  {
    zip: 7681,
    settlement: "Okorvölgy",
    countyId: 2,
  },
  {
    zip: 7745,
    settlement: "Olasz",
    countyId: 2,
  },
  {
    zip: 9824,
    settlement: "Olaszfa",
    countyId: 17,
  },
  {
    zip: 8414,
    settlement: "Olaszfalu",
    countyId: 18,
  },
  {
    zip: 3933,
    settlement: "Olaszliszka",
    countyId: 4,
  },
  {
    zip: 4826,
    settlement: "Olcsva",
    countyId: 15,
  },
  {
    zip: 4914,
    settlement: "Olcsvaapáti",
    countyId: 15,
  },
  {
    zip: 7824,
    settlement: "Old",
    countyId: 2,
  },
  {
    zip: 9733,
    settlement: "Ólmod",
    countyId: 17,
  },
  {
    zip: 8886,
    settlement: "Oltárc",
    countyId: 19,
  },
  {
    zip: 3562,
    settlement: "Onga",
    countyId: 4,
  },
  {
    zip: 3551,
    settlement: "Ónod",
    countyId: 4,
  },
  {
    zip: 4821,
    settlement: "Ópályi",
    countyId: 15,
  },
  {
    zip: 6767,
    settlement: "Ópusztaszer",
    countyId: 5,
  },
  {
    zip: 4336,
    settlement: "Õr",
    countyId: 15,
  },
  {
    zip: 8935,
    settlement: "Orbányosfa",
    countyId: 19,
  },
  {
    zip: 2162,
    settlement: "Õrbottyán",
    countyId: 13,
  },
  {
    zip: 7400,
    settlement: "Orci",
    countyId: 14,
  },
  {
    zip: 8635,
    settlement: "Ordacsehi",
    countyId: 14,
  },
  {
    zip: 6335,
    settlement: "Ordas",
    countyId: 1,
  },
  {
    zip: 9982,
    settlement: "Orfalu",
    countyId: 17,
  },
  {
    zip: 7677,
    settlement: "Orfû",
    countyId: 2,
  },
  {
    zip: 6077,
    settlement: "Orgovány",
    countyId: 1,
  },
  {
    zip: 2671,
    settlement: "Õrhalom",
    countyId: 12,
  },
  {
    zip: 9933,
    settlement: "Õrimagyarósd",
    countyId: 17,
  },
  {
    zip: 9941,
    settlement: "Õriszentpéter",
    countyId: 17,
  },
  {
    zip: 8983,
    settlement: "Ormándlak",
    countyId: 19,
  },
  {
    zip: 3743,
    settlement: "Ormosbánya",
    countyId: 4,
  },
  {
    zip: 5900,
    settlement: "Orosháza",
    countyId: 3,
  },
  {
    zip: 5903,
    settlement: "Orosháza",
    countyId: 3,
  },
  {
    zip: 5904,
    settlement: "Orosháza",
    countyId: 3,
  },
  {
    zip: 5905,
    settlement: "Orosháza",
    countyId: 3,
  },
  {
    zip: 8458,
    settlement: "Oroszi",
    countyId: 18,
  },
  {
    zip: 2840,
    settlement: "Oroszlány",
    countyId: 11,
  },
  {
    zip: 7370,
    settlement: "Oroszló",
    countyId: 2,
  },
  {
    zip: 8744,
    settlement: "Orosztony",
    countyId: 19,
  },
  {
    zip: 8954,
    settlement: "Ortaháza",
    countyId: 19,
  },
  {
    zip: 8854,
    settlement: "Õrtilos",
    countyId: 14,
  },
  {
    zip: 2610,
    settlement: "Õsagárd",
    countyId: 12,
  },
  {
    zip: 8161,
    settlement: "Õsi",
    countyId: 18,
  },
  {
    zip: 9354,
    settlement: "Osli",
    countyId: 7,
  },
  {
    zip: 9512,
    settlement: "Ostffyasszonyfa",
    countyId: 17,
  },
  {
    zip: 3326,
    settlement: "Ostoros",
    countyId: 9,
  },
  {
    zip: 9825,
    settlement: "Oszkó",
    countyId: 17,
  },
  {
    zip: 3591,
    settlement: "Oszlár",
    countyId: 4,
  },
  {
    zip: 7444,
    settlement: "Osztopán",
    countyId: 14,
  },
  {
    zip: 3600,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 3603,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 3604,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 3621,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 3625,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 3651,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 3661,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 3662,
    settlement: "Ózd",
    countyId: 4,
  },
  {
    zip: 7836,
    settlement: "Ózdfalu",
    countyId: 2,
  },
  {
    zip: 8998,
    settlement: "Ozmánbük",
    countyId: 19,
  },
  {
    zip: 7086,
    settlement: "Ozora",
    countyId: 16,
  },
  {
    zip: 3964,
    settlement: "Pácin",
    countyId: 4,
  },
  {
    zip: 8761,
    settlement: "Pacsa",
    countyId: 19,
  },
  {
    zip: 9823,
    settlement: "Pácsony",
    countyId: 17,
  },
  {
    zip: 8935,
    settlement: "Padár",
    countyId: 19,
  },
  {
    zip: 6075,
    settlement: "Páhi",
    countyId: 1,
  },
  {
    zip: 8956,
    settlement: "Páka",
    countyId: 19,
  },
  {
    zip: 8799,
    settlement: "Pakod",
    countyId: 19,
  },
  {
    zip: 8095,
    settlement: "Pákozd",
    countyId: 6,
  },
  {
    zip: 7027,
    settlement: "Paks",
    countyId: 16,
  },
  {
    zip: 7030,
    settlement: "Paks",
    countyId: 16,
  },
  {
    zip: 7370,
    settlement: "Palé",
    countyId: 2,
  },
  {
    zip: 7042,
    settlement: "Pálfa",
    countyId: 16,
  },
  {
    zip: 8990,
    settlement: "Pálfiszeg",
    countyId: 19,
  },
  {
    zip: 3994,
    settlement: "Pálháza",
    countyId: 4,
  },
  {
    zip: 9345,
    settlement: "Páli",
    countyId: 7,
  },
  {
    zip: 7771,
    settlement: "Palkonya",
    countyId: 2,
  },
  {
    zip: 7561,
    settlement: "Pálmajor",
    countyId: 14,
  },
  {
    zip: 6112,
    settlement: "Pálmonostora",
    countyId: 1,
  },
  {
    zip: 7727,
    settlement: "Palotabozsok",
    countyId: 2,
  },
  {
    zip: 3042,
    settlement: "Palotás",
    countyId: 12,
  },
  {
    zip: 8229,
    settlement: "Paloznak",
    countyId: 18,
  },
  {
    zip: 3821,
    settlement: "Pamlény",
    countyId: 4,
  },
  {
    zip: 8698,
    settlement: "Pamuk",
    countyId: 14,
  },
  {
    zip: 2214,
    settlement: "Pánd",
    countyId: 13,
  },
  {
    zip: 9937,
    settlement: "Pankasz",
    countyId: 17,
  },
  {
    zip: 9090,
    settlement: "Pannonhalma",
    countyId: 7,
  },
  {
    zip: 3898,
    settlement: "Pányok",
    countyId: 4,
  },
  {
    zip: 4913,
    settlement: "Panyola",
    countyId: 15,
  },
  {
    zip: 4631,
    settlement: "Pap",
    countyId: 15,
  },
  {
    zip: 8500,
    settlement: "Pápa",
    countyId: 18,
  },
  {
    zip: 8511,
    settlement: "Pápa",
    countyId: 18,
  },
  {
    zip: 8591,
    settlement: "Pápa",
    countyId: 18,
  },
  {
    zip: 8598,
    settlement: "Pápa",
    countyId: 18,
  },
  {
    zip: 8593,
    settlement: "Pápadereske",
    countyId: 18,
  },
  {
    zip: 8596,
    settlement: "Pápakovácsi",
    countyId: 18,
  },
  {
    zip: 8594,
    settlement: "Pápasalamon",
    countyId: 18,
  },
  {
    zip: 8556,
    settlement: "Pápateszér",
    countyId: 18,
  },
  {
    zip: 8183,
    settlement: "Papkeszi",
    countyId: 18,
  },
  {
    zip: 9515,
    settlement: "Pápoc",
    countyId: 17,
  },
  {
    zip: 4338,
    settlement: "Papos",
    countyId: 15,
  },
  {
    zip: 7838,
    settlement: "Páprád",
    countyId: 2,
  },
  {
    zip: 3240,
    settlement: "Parád",
    countyId: 9,
  },
  {
    zip: 3244,
    settlement: "Parád",
    countyId: 9,
  },
  {
    zip: 3242,
    settlement: "Parádsasvár",
    countyId: 9,
  },
  {
    zip: 3777,
    settlement: "Parasznya",
    countyId: 4,
  },
  {
    zip: 4475,
    settlement: "Paszab",
    countyId: 15,
  },
  {
    zip: 3060,
    settlement: "Pásztó",
    countyId: 12,
  },
  {
    zip: 3065,
    settlement: "Pásztó",
    countyId: 12,
  },
  {
    zip: 3082,
    settlement: "Pásztó",
    countyId: 12,
  },
  {
    zip: 9311,
    settlement: "Pásztori",
    countyId: 7,
  },
  {
    zip: 8825,
    settlement: "Pat",
    countyId: 19,
  },
  {
    zip: 2648,
    settlement: "Patak",
    countyId: 12,
  },
  {
    zip: 7463,
    settlement: "Patalom",
    countyId: 14,
  },
  {
    zip: 7923,
    settlement: "Patapoklosi",
    countyId: 2,
  },
  {
    zip: 7477,
    settlement: "Patca",
    countyId: 14,
  },
  {
    zip: 8092,
    settlement: "Pátka",
    countyId: 6,
  },
  {
    zip: 7536,
    settlement: "Patosfa",
    countyId: 14,
  },
  {
    zip: 4523,
    settlement: "Pátroha",
    countyId: 15,
  },
  {
    zip: 2668,
    settlement: "Patvarc",
    countyId: 12,
  },
  {
    zip: 2071,
    settlement: "Páty",
    countyId: 13,
  },
  {
    zip: 4766,
    settlement: "Pátyod",
    countyId: 15,
  },
  {
    zip: 2476,
    settlement: "Pázmánd",
    countyId: 6,
  },
  {
    zip: 9085,
    settlement: "Pázmándfalu",
    countyId: 7,
  },
  {
    zip: 2119,
    settlement: "Pécel",
    countyId: 13,
  },
  {
    zip: 7600,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7621,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7622,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7623,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7624,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7625,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7626,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7627,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7628,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7629,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7630,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7631,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7632,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7633,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7634,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7635,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7636,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7691,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7693,
    settlement: "Pécs",
    countyId: 2,
  },
  {
    zip: 7951,
    settlement: "Pécsbagota",
    countyId: 2,
  },
  {
    zip: 7766,
    settlement: "Pécsdevecser",
    countyId: 2,
  },
  {
    zip: 8245,
    settlement: "Pécsely",
    countyId: 18,
  },
  {
    zip: 7762,
    settlement: "Pécsudvard",
    countyId: 2,
  },
  {
    zip: 7720,
    settlement: "Pécsvárad",
    countyId: 2,
  },
  {
    zip: 9754,
    settlement: "Pecöl",
    countyId: 17,
  },
  {
    zip: 7831,
    settlement: "Pellérd",
    countyId: 2,
  },
  {
    zip: 3381,
    settlement: "Pély",
    countyId: 9,
  },
  {
    zip: 2614,
    settlement: "Penc",
    countyId: 13,
  },
  {
    zip: 4267,
    settlement: "Penészlek",
    countyId: 15,
  },
  {
    zip: 4941,
    settlement: "Penyige",
    countyId: 15,
  },
  {
    zip: 8426,
    settlement: "Pénzesgyõr",
    countyId: 18,
  },
  {
    zip: 9099,
    settlement: "Pér",
    countyId: 7,
  },
  {
    zip: 2074,
    settlement: "Perbál",
    countyId: 13,
  },
  {
    zip: 3853,
    settlement: "Pere",
    countyId: 4,
  },
  {
    zip: 3821,
    settlement: "Perecse",
    countyId: 4,
  },
  {
    zip: 7664,
    settlement: "Pereked",
    countyId: 2,
  },
  {
    zip: 9722,
    settlement: "Perenye",
    countyId: 17,
  },
  {
    zip: 9734,
    settlement: "Peresznye",
    countyId: 17,
  },
  {
    zip: 9484,
    settlement: "Pereszteg",
    countyId: 7,
  },
  {
    zip: 2431,
    settlement: "Perkáta",
    countyId: 6,
  },
  {
    zip: 3756,
    settlement: "Perkupa",
    countyId: 4,
  },
  {
    zip: 2637,
    settlement: "Perõcsény",
    countyId: 13,
  },
  {
    zip: 7766,
    settlement: "Peterd",
    countyId: 2,
  },
  {
    zip: 7582,
    settlement: "Péterhida",
    countyId: 14,
  },
  {
    zip: 2209,
    settlement: "Péteri",
    countyId: 13,
  },
  {
    zip: 3250,
    settlement: "Pétervására",
    countyId: 9,
  },
  {
    zip: 8105,
    settlement: "Pétfürdõ",
    countyId: 18,
  },
  {
    zip: 8921,
    settlement: "Pethõhenye",
    countyId: 19,
  },
  {
    zip: 4542,
    settlement: "Petneháza",
    countyId: 15,
  },
  {
    zip: 3023,
    settlement: "Petõfibánya",
    countyId: 9,
  },
  {
    zip: 6113,
    settlement: "Petõfiszállás",
    countyId: 1,
  },
  {
    zip: 9443,
    settlement: "Petõháza",
    countyId: 7,
  },
  {
    zip: 9826,
    settlement: "Petõmihályfa",
    countyId: 17,
  },
  {
    zip: 8984,
    settlement: "Petrikeresztúr",
    countyId: 19,
  },
  {
    zip: 8866,
    settlement: "Petrivente",
    countyId: 19,
  },
  {
    zip: 7980,
    settlement: "Pettend",
    countyId: 2,
  },
  {
    zip: 3134,
    settlement: "Piliny",
    countyId: 12,
  },
  {
    zip: 2721,
    settlement: "Pilis",
    countyId: 13,
  },
  {
    zip: 2097,
    settlement: "Pilisborosjenõ",
    countyId: 13,
  },
  {
    zip: 2081,
    settlement: "Piliscsaba",
    countyId: 13,
  },
  {
    zip: 2087,
    settlement: "Piliscsaba",
    countyId: 13,
  },
  {
    zip: 2519,
    settlement: "Piliscsév",
    countyId: 11,
  },
  {
    zip: 2080,
    settlement: "Pilisjászfalu",
    countyId: 13,
  },
  {
    zip: 2028,
    settlement: "Pilismarót",
    countyId: 11,
  },
  {
    zip: 2095,
    settlement: "Pilisszántó",
    countyId: 13,
  },
  {
    zip: 2084,
    settlement: "Pilisszentiván",
    countyId: 13,
  },
  {
    zip: 2098,
    settlement: "Pilisszentkereszt",
    countyId: 13,
  },
  {
    zip: 2099,
    settlement: "Pilisszentkereszt",
    countyId: 13,
  },
  {
    zip: 2009,
    settlement: "Pilisszentlászló",
    countyId: 13,
  },
  {
    zip: 2085,
    settlement: "Pilisvörösvár",
    countyId: 13,
  },
  {
    zip: 7084,
    settlement: "Pincehely",
    countyId: 16,
  },
  {
    zip: 9922,
    settlement: "Pinkamindszent",
    countyId: 17,
  },
  {
    zip: 9481,
    settlement: "Pinnye",
    countyId: 7,
  },
  {
    zip: 4375,
    settlement: "Piricse",
    countyId: 15,
  },
  {
    zip: 6414,
    settlement: "Pirtó",
    countyId: 1,
  },
  {
    zip: 7838,
    settlement: "Piskó",
    countyId: 2,
  },
  {
    zip: 6914,
    settlement: "Pitvaros",
    countyId: 5,
  },
  {
    zip: 7756,
    settlement: "Pócsa",
    countyId: 2,
  },
  {
    zip: 4125,
    settlement: "Pocsaj",
    countyId: 8,
  },
  {
    zip: 2017,
    settlement: "Pócsmegyer",
    countyId: 13,
  },
  {
    zip: 4327,
    settlement: "Pócspetri",
    countyId: 15,
  },
  {
    zip: 7666,
    settlement: "Pogány",
    countyId: 2,
  },
  {
    zip: 8728,
    settlement: "Pogányszentpéter",
    countyId: 14,
  },
  {
    zip: 8932,
    settlement: "Pókaszepetk",
    countyId: 19,
  },
  {
    zip: 7458,
    settlement: "Polány",
    countyId: 14,
  },
  {
    zip: 4090,
    settlement: "Polgár",
    countyId: 8,
  },
  {
    zip: 8153,
    settlement: "Polgárdi",
    countyId: 6,
  },
  {
    zip: 8154,
    settlement: "Polgárdi",
    countyId: 6,
  },
  {
    zip: 8155,
    settlement: "Polgárdi",
    countyId: 6,
  },
  {
    zip: 2013,
    settlement: "Pomáz",
    countyId: 13,
  },
  {
    zip: 4761,
    settlement: "Porcsalma",
    countyId: 15,
  },
  {
    zip: 9796,
    settlement: "Pornóapáti",
    countyId: 17,
  },
  {
    zip: 3388,
    settlement: "Poroszló",
    countyId: 9,
  },
  {
    zip: 9612,
    settlement: "Porpác",
    countyId: 17,
  },
  {
    zip: 8858,
    settlement: "Porrog",
    countyId: 14,
  },
  {
    zip: 8858,
    settlement: "Porrogszentkirály",
    countyId: 14,
  },
  {
    zip: 8858,
    settlement: "Porrogszentpál",
    countyId: 14,
  },
  {
    zip: 8986,
    settlement: "Pórszombat",
    countyId: 19,
  },
  {
    zip: 8429,
    settlement: "Porva",
    countyId: 18,
  },
  {
    zip: 9636,
    settlement: "Pósfa",
    countyId: 17,
  },
  {
    zip: 7977,
    settlement: "Potony",
    countyId: 14,
  },
  {
    zip: 9324,
    settlement: "Potyond",
    countyId: 7,
  },
  {
    zip: 3925,
    settlement: "Prügy",
    countyId: 4,
  },
  {
    zip: 8291,
    settlement: "Pula",
    countyId: 18,
  },
  {
    zip: 8986,
    settlement: "Pusztaapáti",
    countyId: 19,
  },
  {
    zip: 2658,
    settlement: "Pusztaberki",
    countyId: 12,
  },
  {
    zip: 9373,
    settlement: "Pusztacsalád",
    countyId: 7,
  },
  {
    zip: 9739,
    settlement: "Pusztacsó",
    countyId: 17,
  },
  {
    zip: 4565,
    settlement: "Pusztadobos",
    countyId: 15,
  },
  {
    zip: 8946,
    settlement: "Pusztaederics",
    countyId: 19,
  },
  {
    zip: 3995,
    settlement: "Pusztafalu",
    countyId: 4,
  },
  {
    zip: 5919,
    settlement: "Pusztaföldvár",
    countyId: 3,
  },
  {
    zip: 7038,
    settlement: "Pusztahencse",
    countyId: 16,
  },
  {
    zip: 8707,
    settlement: "Pusztakovácsi",
    countyId: 14,
  },
  {
    zip: 8895,
    settlement: "Pusztamagyaród",
    countyId: 19,
  },
  {
    zip: 6785,
    settlement: "Pusztamérges",
    countyId: 5,
  },
  {
    zip: 8455,
    settlement: "Pusztamiske",
    countyId: 18,
  },
  {
    zip: 5125,
    settlement: "Pusztamonostor",
    countyId: 10,
  },
  {
    zip: 5665,
    settlement: "Pusztaottlaka",
    countyId: 3,
  },
  {
    zip: 3874,
    settlement: "Pusztaradvány",
    countyId: 4,
  },
  {
    zip: 2490,
    settlement: "Pusztaszabolcs",
    countyId: 6,
  },
  {
    zip: 8619,
    settlement: "Pusztaszemes",
    countyId: 14,
  },
  {
    zip: 8896,
    settlement: "Pusztaszentlászló",
    countyId: 19,
  },
  {
    zip: 6769,
    settlement: "Pusztaszer",
    countyId: 5,
  },
  {
    zip: 2378,
    settlement: "Pusztavacs",
    countyId: 13,
  },
  {
    zip: 8066,
    settlement: "Pusztavám",
    countyId: 6,
  },
  {
    zip: 2039,
    settlement: "Pusztazámor",
    countyId: 13,
  },
  {
    zip: 3630,
    settlement: "Putnok",
    countyId: 4,
  },
  {
    zip: 9235,
    settlement: "Püski",
    countyId: 7,
  },
  {
    zip: 2682,
    settlement: "Püspökhatvan",
    countyId: 13,
  },
  {
    zip: 4150,
    settlement: "Püspökladány",
    countyId: 8,
  },
  {
    zip: 9776,
    settlement: "Püspökmolnári",
    countyId: 17,
  },
  {
    zip: 2166,
    settlement: "Püspökszilágy",
    countyId: 13,
  },
  {
    zip: 8929,
    settlement: "Pölöske",
    countyId: 19,
  },
  {
    zip: 8773,
    settlement: "Pölöskefõ",
    countyId: 19,
  },
  {
    zip: 7142,
    settlement: "Pörböly",
    countyId: 16,
  },
  {
    zip: 8956,
    settlement: "Pördefölde",
    countyId: 19,
  },
  {
    zip: 8767,
    settlement: "Pötréte",
    countyId: 19,
  },
  {
    zip: 9313,
    settlement: "Rábacsanak",
    countyId: 7,
  },
  {
    zip: 9136,
    settlement: "Rábacsécsény",
    countyId: 7,
  },
  {
    zip: 9961,
    settlement: "Rábagyarmat",
    countyId: 17,
  },
  {
    zip: 9777,
    settlement: "Rábahidvég",
    countyId: 17,
  },
  {
    zip: 9344,
    settlement: "Rábakecöl",
    countyId: 7,
  },
  {
    zip: 9142,
    settlement: "Rábapatona",
    countyId: 7,
  },
  {
    zip: 9641,
    settlement: "Rábapaty",
    countyId: 17,
  },
  {
    zip: 9146,
    settlement: "Rábapordány",
    countyId: 7,
  },
  {
    zip: 9327,
    settlement: "Rábasebes",
    countyId: 7,
  },
  {
    zip: 9316,
    settlement: "Rábaszentandrás",
    countyId: 7,
  },
  {
    zip: 9135,
    settlement: "Rábaszentmihály",
    countyId: 7,
  },
  {
    zip: 9133,
    settlement: "Rábaszentmiklós",
    countyId: 7,
  },
  {
    zip: 9322,
    settlement: "Rábatamási",
    countyId: 7,
  },
  {
    zip: 9766,
    settlement: "Rábatöttös",
    countyId: 17,
  },
  {
    zip: 9165,
    settlement: "Rábcakapi",
    countyId: 7,
  },
  {
    zip: 2459,
    settlement: "Rácalmás",
    countyId: 6,
  },
  {
    zip: 2465,
    settlement: "Ráckeresztúr",
    countyId: 6,
  },
  {
    zip: 2300,
    settlement: "Ráckeve",
    countyId: 13,
  },
  {
    zip: 2613,
    settlement: "Rád",
    countyId: 13,
  },
  {
    zip: 7817,
    settlement: "Rádfalva",
    countyId: 2,
  },
  {
    zip: 9784,
    settlement: "Rádóckölked",
    countyId: 17,
  },
  {
    zip: 3776,
    settlement: "Radostyán",
    countyId: 4,
  },
  {
    zip: 3724,
    settlement: "Ragály",
    countyId: 4,
  },
  {
    zip: 9224,
    settlement: "Rajka",
    countyId: 7,
  },
  {
    zip: 3825,
    settlement: "Rakaca",
    countyId: 4,
  },
  {
    zip: 3826,
    settlement: "Rakacaszend",
    countyId: 4,
  },
  {
    zip: 4465,
    settlement: "Rakamaz",
    countyId: 15,
  },
  {
    zip: 3151,
    settlement: "Rákóczibánya",
    countyId: 12,
  },
  {
    zip: 5085,
    settlement: "Rákóczifalva",
    countyId: 10,
  },
  {
    zip: 5084,
    settlement: "Rákócziújfalu",
    countyId: 10,
  },
  {
    zip: 7464,
    settlement: "Ráksi",
    countyId: 14,
  },
  {
    zip: 8973,
    settlement: "Ramocsa",
    countyId: 19,
  },
  {
    zip: 4536,
    settlement: "Ramocsaháza",
    countyId: 15,
  },
  {
    zip: 4756,
    settlement: "Rápolt",
    countyId: 15,
  },
  {
    zip: 8300,
    settlement: "Raposka",
    countyId: 18,
  },
  {
    zip: 3833,
    settlement: "Rásonysápberencs",
    countyId: 4,
  },
  {
    zip: 3908,
    settlement: "Rátka",
    countyId: 4,
  },
  {
    zip: 9951,
    settlement: "Rátót",
    countyId: 17,
  },
  {
    zip: 9091,
    settlement: "Ravazd",
    countyId: 7,
  },
  {
    zip: 3245,
    settlement: "Recsk",
    countyId: 9,
  },
  {
    zip: 2886,
    settlement: "Réde",
    countyId: 11,
  },
  {
    zip: 8978,
    settlement: "Rédics",
    countyId: 19,
  },
  {
    zip: 3893,
    settlement: "Regéc",
    countyId: 4,
  },
  {
    zip: 7833,
    settlement: "Regenye",
    countyId: 2,
  },
  {
    zip: 7193,
    settlement: "Regöly",
    countyId: 16,
  },
  {
    zip: 6446,
    settlement: "Rém",
    countyId: 1,
  },
  {
    zip: 2090,
    settlement: "Remeteszõlõs",
    countyId: 13,
  },
  {
    zip: 3559,
    settlement: "Répáshuta",
    countyId: 4,
  },
  {
    zip: 9653,
    settlement: "Répcelak",
    countyId: 17,
  },
  {
    zip: 9375,
    settlement: "Répceszemere",
    countyId: 7,
  },
  {
    zip: 9623,
    settlement: "Répceszentgyörgy",
    countyId: 17,
  },
  {
    zip: 9475,
    settlement: "Répcevis",
    countyId: 7,
  },
  {
    zip: 8977,
    settlement: "Resznek",
    countyId: 19,
  },
  {
    zip: 9074,
    settlement: "Rétalap",
    countyId: 7,
  },
  {
    zip: 4525,
    settlement: "Rétközberencs",
    countyId: 15,
  },
  {
    zip: 2651,
    settlement: "Rétság",
    countyId: 12,
  },
  {
    zip: 8253,
    settlement: "Révfülöp",
    countyId: 18,
  },
  {
    zip: 3976,
    settlement: "Révleányvár",
    countyId: 4,
  },
  {
    zip: 8373,
    settlement: "Rezi",
    countyId: 19,
  },
  {
    zip: 3974,
    settlement: "Ricse",
    countyId: 4,
  },
  {
    zip: 8348,
    settlement: "Rigács",
    countyId: 18,
  },
  {
    zip: 8883,
    settlement: "Rigyác",
    countyId: 19,
  },
  {
    zip: 3177,
    settlement: "Rimóc",
    countyId: 12,
  },
  {
    zip: 7552,
    settlement: "Rinyabesenyõ",
    countyId: 14,
  },
  {
    zip: 7527,
    settlement: "Rinyakovácsi",
    countyId: 14,
  },
  {
    zip: 7513,
    settlement: "Rinyaszentkirály",
    countyId: 14,
  },
  {
    zip: 7556,
    settlement: "Rinyaújlak",
    countyId: 14,
  },
  {
    zip: 7584,
    settlement: "Rinyaújnép",
    countyId: 14,
  },
  {
    zip: 4563,
    settlement: "Rohod",
    countyId: 15,
  },
  {
    zip: 8434,
    settlement: "Románd",
    countyId: 7,
  },
  {
    zip: 2654,
    settlement: "Romhány",
    countyId: 12,
  },
  {
    zip: 7743,
    settlement: "Romonya",
    countyId: 2,
  },
  {
    zip: 7914,
    settlement: "Rózsafa",
    countyId: 2,
  },
  {
    zip: 4971,
    settlement: "Rozsály",
    countyId: 15,
  },
  {
    zip: 3033,
    settlement: "Rózsaszentmárton",
    countyId: 9,
  },
  {
    zip: 3733,
    settlement: "Rudabánya",
    countyId: 4,
  },
  {
    zip: 3742,
    settlement: "Rudolftelep",
    countyId: 4,
  },
  {
    zip: 9766,
    settlement: "Rum",
    countyId: 17,
  },
  {
    zip: 6786,
    settlement: "Ruzsa",
    countyId: 5,
  },
  {
    zip: 9451,
    settlement: "Röjtökmuzsaj",
    countyId: 7,
  },
  {
    zip: 9954,
    settlement: "Rönök",
    countyId: 17,
  },
  {
    zip: 6758,
    settlement: "Röszke",
    countyId: 5,
  },
  {
    zip: 3162,
    settlement: "Ságújfalu",
    countyId: 12,
  },
  {
    zip: 8654,
    settlement: "Ságvár",
    countyId: 14,
  },
  {
    zip: 3792,
    settlement: "Sajóbábony",
    countyId: 4,
  },
  {
    zip: 3793,
    settlement: "Sajóecseg",
    countyId: 4,
  },
  {
    zip: 3636,
    settlement: "Sajógalgóc",
    countyId: 4,
  },
  {
    zip: 3576,
    settlement: "Sajóhidvég",
    countyId: 4,
  },
  {
    zip: 3720,
    settlement: "Sajóivánka",
    countyId: 4,
  },
  {
    zip: 3773,
    settlement: "Sajókápolna",
    countyId: 4,
  },
  {
    zip: 3720,
    settlement: "Sajókaza",
    countyId: 4,
  },
  {
    zip: 3791,
    settlement: "Sajókeresztúr",
    countyId: 4,
  },
  {
    zip: 3572,
    settlement: "Sajólád",
    countyId: 4,
  },
  {
    zip: 3773,
    settlement: "Sajólászlófalva",
    countyId: 4,
  },
  {
    zip: 3656,
    settlement: "Sajómercse",
    countyId: 4,
  },
  {
    zip: 3652,
    settlement: "Sajónémeti",
    countyId: 4,
  },
  {
    zip: 3714,
    settlement: "Sajópálfala",
    countyId: 4,
  },
  {
    zip: 3573,
    settlement: "Sajópetri",
    countyId: 4,
  },
  {
    zip: 3653,
    settlement: "Sajópüspöki",
    countyId: 4,
  },
  {
    zip: 3712,
    settlement: "Sajósenye",
    countyId: 4,
  },
  {
    zip: 3770,
    settlement: "Sajószentpéter",
    countyId: 4,
  },
  {
    zip: 3599,
    settlement: "Sajószöged",
    countyId: 4,
  },
  {
    zip: 3712,
    settlement: "Sajóvámos",
    countyId: 4,
  },
  {
    zip: 3656,
    settlement: "Sajóvelezd",
    countyId: 4,
  },
  {
    zip: 3586,
    settlement: "Sajóörös",
    countyId: 4,
  },
  {
    zip: 9632,
    settlement: "Sajtoskál",
    countyId: 17,
  },
  {
    zip: 8256,
    settlement: "Salföld",
    countyId: 18,
  },
  {
    zip: 3100,
    settlement: "Salgótarján",
    countyId: 12,
  },
  {
    zip: 3102,
    settlement: "Salgótarján",
    countyId: 12,
  },
  {
    zip: 3104,
    settlement: "Salgótarján",
    countyId: 12,
  },
  {
    zip: 3109,
    settlement: "Salgótarján",
    countyId: 12,
  },
  {
    zip: 3121,
    settlement: "Salgótarján",
    countyId: 12,
  },
  {
    zip: 3141,
    settlement: "Salgótarján",
    countyId: 12,
  },
  {
    zip: 9742,
    settlement: "Salköveskút",
    countyId: 17,
  },
  {
    zip: 8995,
    settlement: "Salomvár",
    countyId: 19,
  },
  {
    zip: 3425,
    settlement: "Sály",
    countyId: 4,
  },
  {
    zip: 7841,
    settlement: "Sámod",
    countyId: 2,
  },
  {
    zip: 3074,
    settlement: "Sámsonháza",
    countyId: 12,
  },
  {
    zip: 8824,
    settlement: "Sand",
    countyId: 19,
  },
  {
    zip: 6762,
    settlement: "Sándorfalva",
    countyId: 5,
  },
  {
    zip: 7479,
    settlement: "Sántos",
    countyId: 14,
  },
  {
    zip: 4176,
    settlement: "Sáp",
    countyId: 8,
  },
  {
    zip: 4272,
    settlement: "Sáránd",
    countyId: 8,
  },
  {
    zip: 3942,
    settlement: "Sárazsadány",
    countyId: 4,
  },
  {
    zip: 7000,
    settlement: "Sárbogárd",
    countyId: 6,
  },
  {
    zip: 7003,
    settlement: "Sárbogárd",
    countyId: 6,
  },
  {
    zip: 7018,
    settlement: "Sárbogárd",
    countyId: 6,
  },
  {
    zip: 7019,
    settlement: "Sárbogárd",
    countyId: 6,
  },
  {
    zip: 7014,
    settlement: "Sáregres",
    countyId: 6,
  },
  {
    zip: 9813,
    settlement: "Sárfimizdó",
    countyId: 17,
  },
  {
    zip: 8944,
    settlement: "Sárhida",
    countyId: 19,
  },
  {
    zip: 2523,
    settlement: "Sárisáp",
    countyId: 11,
  },
  {
    zip: 5720,
    settlement: "Sarkad",
    countyId: 3,
  },
  {
    zip: 5731,
    settlement: "Sarkadkeresztúr",
    countyId: 3,
  },
  {
    zip: 8051,
    settlement: "Sárkeresztes",
    countyId: 6,
  },
  {
    zip: 8125,
    settlement: "Sárkeresztúr",
    countyId: 6,
  },
  {
    zip: 8144,
    settlement: "Sárkeszi",
    countyId: 6,
  },
  {
    zip: 8391,
    settlement: "Sármellék",
    countyId: 19,
  },
  {
    zip: 7781,
    settlement: "Sárok",
    countyId: 2,
  },
  {
    zip: 2433,
    settlement: "Sárosd",
    countyId: 6,
  },
  {
    zip: 3950,
    settlement: "Sárospatak",
    countyId: 4,
  },
  {
    zip: 3952,
    settlement: "Sárospatak",
    countyId: 4,
  },
  {
    zip: 7145,
    settlement: "Sárpilis",
    countyId: 16,
  },
  {
    zip: 4171,
    settlement: "Sárrétudvari",
    countyId: 8,
  },
  {
    zip: 9434,
    settlement: "Sarród",
    countyId: 7,
  },
  {
    zip: 9435,
    settlement: "Sarród",
    countyId: 7,
  },
  {
    zip: 8126,
    settlement: "Sárszentágota",
    countyId: 6,
  },
  {
    zip: 7047,
    settlement: "Sárszentlõrinc",
    countyId: 16,
  },
  {
    zip: 8141,
    settlement: "Sárszentmihály",
    countyId: 6,
  },
  {
    zip: 8143,
    settlement: "Sárszentmihály",
    countyId: 6,
  },
  {
    zip: 3386,
    settlement: "Sarud",
    countyId: 9,
  },
  {
    zip: 9600,
    settlement: "Sárvár",
    countyId: 17,
  },
  {
    zip: 9608,
    settlement: "Sárvár",
    countyId: 17,
  },
  {
    zip: 9609,
    settlement: "Sárvár",
    countyId: 17,
  },
  {
    zip: 7370,
    settlement: "Sásd",
    countyId: 2,
  },
  {
    zip: 8308,
    settlement: "Sáska",
    countyId: 18,
  },
  {
    zip: 3659,
    settlement: "Sáta",
    countyId: 4,
  },
  {
    zip: 3944,
    settlement: "Sátoraljaújhely",
    countyId: 4,
  },
  {
    zip: 3945,
    settlement: "Sátoraljaújhely",
    countyId: 4,
  },
  {
    zip: 3980,
    settlement: "Sátoraljaújhely",
    countyId: 4,
  },
  {
    zip: 3988,
    settlement: "Sátoraljaújhely",
    countyId: 4,
  },
  {
    zip: 7785,
    settlement: "Sátorhely",
    countyId: 2,
  },
  {
    zip: 8732,
    settlement: "Sávoly",
    countyId: 14,
  },
  {
    zip: 9789,
    settlement: "Sé",
    countyId: 17,
  },
  {
    zip: 7562,
    settlement: "Segesd",
    countyId: 14,
  },
  {
    zip: 7960,
    settlement: "Sellye",
    countyId: 2,
  },
  {
    zip: 3809,
    settlement: "Selyeb",
    countyId: 4,
  },
  {
    zip: 3974,
    settlement: "Semjén",
    countyId: 4,
  },
  {
    zip: 8862,
    settlement: "Semjénháza",
    countyId: 19,
  },
  {
    zip: 8788,
    settlement: "Sénye",
    countyId: 19,
  },
  {
    zip: 4533,
    settlement: "Sényõ",
    countyId: 15,
  },
  {
    zip: 8111,
    settlement: "Seregélyes",
    countyId: 6,
  },
  {
    zip: 3729,
    settlement: "Serényfalva",
    countyId: 4,
  },
  {
    zip: 8660,
    settlement: "Sérsekszõlõs",
    countyId: 14,
  },
  {
    zip: 8439,
    settlement: "Sikátor",
    countyId: 7,
  },
  {
    zip: 7800,
    settlement: "Siklós",
    countyId: 2,
  },
  {
    zip: 7818,
    settlement: "Siklós",
    countyId: 2,
  },
  {
    zip: 7814,
    settlement: "Siklósbodony",
    countyId: 2,
  },
  {
    zip: 7823,
    settlement: "Siklósnagyfalu",
    countyId: 2,
  },
  {
    zip: 3881,
    settlement: "Sima",
    countyId: 4,
  },
  {
    zip: 9633,
    settlement: "Simaság",
    countyId: 17,
  },
  {
    zip: 7474,
    settlement: "Simonfa",
    countyId: 14,
  },
  {
    zip: 7081,
    settlement: "Simontornya",
    countyId: 16,
  },
  {
    zip: 7171,
    settlement: "Sióagárd",
    countyId: 16,
  },
  {
    zip: 8600,
    settlement: "Siófok",
    countyId: 14,
  },
  {
    zip: 8609,
    settlement: "Siófok",
    countyId: 14,
  },
  {
    zip: 8611,
    settlement: "Siófok",
    countyId: 14,
  },
  {
    zip: 8652,
    settlement: "Siójut",
    countyId: 14,
  },
  {
    zip: 3332,
    settlement: "Sirok",
    countyId: 9,
  },
  {
    zip: 9671,
    settlement: "Sitke",
    countyId: 17,
  },
  {
    zip: 9315,
    settlement: "Sobor",
    countyId: 7,
  },
  {
    zip: 9112,
    settlement: "Sokorópátka",
    countyId: 7,
  },
  {
    zip: 6320,
    settlement: "Solt",
    countyId: 1,
  },
  {
    zip: 6223,
    settlement: "Soltszentimre",
    countyId: 1,
  },
  {
    zip: 6230,
    settlement: "Soltvadkert",
    countyId: 1,
  },
  {
    zip: 8193,
    settlement: "Sóly",
    countyId: 18,
  },
  {
    zip: 2083,
    settlement: "Solymár",
    countyId: 13,
  },
  {
    zip: 8655,
    settlement: "Som",
    countyId: 14,
  },
  {
    zip: 7728,
    settlement: "Somberek",
    countyId: 2,
  },
  {
    zip: 8478,
    settlement: "Somlójenõ",
    countyId: 18,
  },
  {
    zip: 8483,
    settlement: "Somlószõlõs",
    countyId: 18,
  },
  {
    zip: 8481,
    settlement: "Somlóvásárhely",
    countyId: 18,
  },
  {
    zip: 8484,
    settlement: "Somlóvecse",
    countyId: 18,
  },
  {
    zip: 7454,
    settlement: "Somodor",
    countyId: 14,
  },
  {
    zip: 7283,
    settlement: "Somogyacsa",
    countyId: 14,
  },
  {
    zip: 7922,
    settlement: "Somogyapáti",
    countyId: 2,
  },
  {
    zip: 7584,
    settlement: "Somogyaracs",
    countyId: 14,
  },
  {
    zip: 7452,
    settlement: "Somogyaszaló",
    countyId: 14,
  },
  {
    zip: 8684,
    settlement: "Somogybabod",
    countyId: 14,
  },
  {
    zip: 8858,
    settlement: "Somogybükkösd",
    countyId: 14,
  },
  {
    zip: 8726,
    settlement: "Somogycsicsó",
    countyId: 14,
  },
  {
    zip: 7284,
    settlement: "Somogydöröcske",
    countyId: 14,
  },
  {
    zip: 8666,
    settlement: "Somogyegres",
    countyId: 14,
  },
  {
    zip: 8708,
    settlement: "Somogyfajsz",
    countyId: 14,
  },
  {
    zip: 7455,
    settlement: "Somogygeszti",
    countyId: 14,
  },
  {
    zip: 7925,
    settlement: "Somogyhárságy",
    countyId: 2,
  },
  {
    zip: 7921,
    settlement: "Somogyhatvan",
    countyId: 2,
  },
  {
    zip: 7443,
    settlement: "Somogyjád",
    countyId: 14,
  },
  {
    zip: 8673,
    settlement: "Somogymeggyes",
    countyId: 14,
  },
  {
    zip: 8733,
    settlement: "Somogysámson",
    countyId: 14,
  },
  {
    zip: 7435,
    settlement: "Somogysárd",
    countyId: 14,
  },
  {
    zip: 8737,
    settlement: "Somogysimonyi",
    countyId: 14,
  },
  {
    zip: 8705,
    settlement: "Somogyszentpál",
    countyId: 14,
  },
  {
    zip: 7276,
    settlement: "Somogyszil",
    countyId: 14,
  },
  {
    zip: 7563,
    settlement: "Somogyszob",
    countyId: 14,
  },
  {
    zip: 8683,
    settlement: "Somogytúr",
    countyId: 14,
  },
  {
    zip: 7515,
    settlement: "Somogyudvarhely",
    countyId: 14,
  },
  {
    zip: 8699,
    settlement: "Somogyvámos",
    countyId: 14,
  },
  {
    zip: 8698,
    settlement: "Somogyvár",
    countyId: 14,
  },
  {
    zip: 7924,
    settlement: "Somogyviszló",
    countyId: 2,
  },
  {
    zip: 8734,
    settlement: "Somogyzsitfa",
    countyId: 14,
  },
  {
    zip: 4954,
    settlement: "Sonkád",
    countyId: 15,
  },
  {
    zip: 8123,
    settlement: "Soponya",
    countyId: 6,
  },
  {
    zip: 9400,
    settlement: "Sopron",
    countyId: 7,
  },
  {
    zip: 9407,
    settlement: "Sopron",
    countyId: 7,
  },
  {
    zip: 9408,
    settlement: "Sopron",
    countyId: 7,
  },
  {
    zip: 9494,
    settlement: "Sopron",
    countyId: 7,
  },
  {
    zip: 9463,
    settlement: "Sopronhorpács",
    countyId: 7,
  },
  {
    zip: 9483,
    settlement: "Sopronkövesd",
    countyId: 7,
  },
  {
    zip: 9325,
    settlement: "Sopronnémeti",
    countyId: 7,
  },
  {
    zip: 9774,
    settlement: "Sorkifalud",
    countyId: 17,
  },
  {
    zip: 9774,
    settlement: "Sorkikápolna",
    countyId: 17,
  },
  {
    zip: 8881,
    settlement: "Sormás",
    countyId: 19,
  },
  {
    zip: 9773,
    settlement: "Sorokpolány",
    countyId: 17,
  },
  {
    zip: 3131,
    settlement: "Sóshartyán",
    countyId: 12,
  },
  {
    zip: 2038,
    settlement: "Sóskút",
    countyId: 13,
  },
  {
    zip: 3716,
    settlement: "Sóstófalva",
    countyId: 4,
  },
  {
    zip: 7960,
    settlement: "Sósvertike",
    countyId: 2,
  },
  {
    zip: 9681,
    settlement: "Sótony",
    countyId: 17,
  },
  {
    zip: 8096,
    settlement: "Sukoró",
    countyId: 6,
  },
  {
    zip: 7960,
    settlement: "Sumony",
    countyId: 2,
  },
  {
    zip: 2889,
    settlement: "Súr",
    countyId: 11,
  },
  {
    zip: 8856,
    settlement: "Surd",
    countyId: 19,
  },
  {
    zip: 6346,
    settlement: "Sükösd",
    countyId: 1,
  },
  {
    zip: 2241,
    settlement: "Sülysáp",
    countyId: 13,
  },
  {
    zip: 2242,
    settlement: "Sülysáp",
    countyId: 13,
  },
  {
    zip: 8330,
    settlement: "Sümeg",
    countyId: 18,
  },
  {
    zip: 8357,
    settlement: "Sümegcsehi",
    countyId: 19,
  },
  {
    zip: 8351,
    settlement: "Sümegprága",
    countyId: 18,
  },
  {
    zip: 2543,
    settlement: "Süttõ",
    countyId: 11,
  },
  {
    zip: 8151,
    settlement: "Szabadbattyán",
    countyId: 6,
  },
  {
    zip: 2432,
    settlement: "Szabadegyháza",
    countyId: 6,
  },
  {
    zip: 8138,
    settlement: "Szabadhidvég",
    countyId: 6,
  },
  {
    zip: 8139,
    settlement: "Szabadhidvég",
    countyId: 6,
  },
  {
    zip: 7253,
    settlement: "Szabadi",
    countyId: 14,
  },
  {
    zip: 5712,
    settlement: "Szabadkígyós",
    countyId: 3,
  },
  {
    zip: 6080,
    settlement: "Szabadszállás",
    countyId: 1,
  },
  {
    zip: 7951,
    settlement: "Szabadszentkirály",
    countyId: 2,
  },
  {
    zip: 7544,
    settlement: "Szabás",
    countyId: 14,
  },
  {
    zip: 4467,
    settlement: "Szabolcs",
    countyId: 15,
  },
  {
    zip: 4547,
    settlement: "Szabolcsbáka",
    countyId: 15,
  },
  {
    zip: 4496,
    settlement: "Szabolcsveresmart",
    countyId: 15,
  },
  {
    zip: 2111,
    settlement: "Szada",
    countyId: 13,
  },
  {
    zip: 7383,
    settlement: "Szágy",
    countyId: 2,
  },
  {
    zip: 7753,
    settlement: "Szajk",
    countyId: 2,
  },
  {
    zip: 3334,
    settlement: "Szajla",
    countyId: 9,
  },
  {
    zip: 5081,
    settlement: "Szajol",
    countyId: 10,
  },
  {
    zip: 3786,
    settlement: "Szakácsi",
    countyId: 4,
  },
  {
    zip: 7071,
    settlement: "Szakadát",
    countyId: 16,
  },
  {
    zip: 3596,
    settlement: "Szakáld",
    countyId: 4,
  },
  {
    zip: 7192,
    settlement: "Szakály",
    countyId: 16,
  },
  {
    zip: 7213,
    settlement: "Szakcs",
    countyId: 16,
  },
  {
    zip: 6336,
    settlement: "Szakmár",
    countyId: 1,
  },
  {
    zip: 9934,
    settlement: "Szaknyér",
    countyId: 17,
  },
  {
    zip: 4234,
    settlement: "Szakoly",
    countyId: 15,
  },
  {
    zip: 9474,
    settlement: "Szakony",
    countyId: 7,
  },
  {
    zip: 9983,
    settlement: "Szakonyfalu",
    countyId: 17,
  },
  {
    zip: 2856,
    settlement: "Szákszend",
    countyId: 11,
  },
  {
    zip: 9942,
    settlement: "Szalafõ",
    countyId: 17,
  },
  {
    zip: 7811,
    settlement: "Szalánta",
    countyId: 2,
  },
  {
    zip: 8341,
    settlement: "Szalapa",
    countyId: 19,
  },
  {
    zip: 3863,
    settlement: "Szalaszend",
    countyId: 4,
  },
  {
    zip: 7334,
    settlement: "Szalatnak",
    countyId: 2,
  },
  {
    zip: 7121,
    settlement: "Szálka",
    countyId: 16,
  },
  {
    zip: 6086,
    settlement: "Szalkszentmárton",
    countyId: 1,
  },
  {
    zip: 3163,
    settlement: "Szalmatercs",
    countyId: 12,
  },
  {
    zip: 3754,
    settlement: "Szalonna",
    countyId: 4,
  },
  {
    zip: 4767,
    settlement: "Szamosangyalos",
    countyId: 15,
  },
  {
    zip: 4745,
    settlement: "Szamosbecs",
    countyId: 15,
  },
  {
    zip: 4721,
    settlement: "Szamoskér",
    countyId: 15,
  },
  {
    zip: 4735,
    settlement: "Szamossályi",
    countyId: 15,
  },
  {
    zip: 4824,
    settlement: "Szamosszeg",
    countyId: 15,
  },
  {
    zip: 4746,
    settlement: "Szamostatárfalva",
    countyId: 15,
  },
  {
    zip: 4734,
    settlement: "Szamosújlak",
    countyId: 15,
  },
  {
    zip: 2697,
    settlement: "Szanda",
    countyId: 12,
  },
  {
    zip: 6131,
    settlement: "Szank",
    countyId: 1,
  },
  {
    zip: 8622,
    settlement: "Szántód",
    countyId: 14,
  },
  {
    zip: 9317,
    settlement: "Szany",
    countyId: 7,
  },
  {
    zip: 8423,
    settlement: "Szápár",
    countyId: 18,
  },
  {
    zip: 7843,
    settlement: "Szaporca",
    countyId: 2,
  },
  {
    zip: 2066,
    settlement: "Szár",
    countyId: 6,
  },
  {
    zip: 7184,
    settlement: "Szárász",
    countyId: 2,
  },
  {
    zip: 7063,
    settlement: "Szárazd",
    countyId: 16,
  },
  {
    zip: 9353,
    settlement: "Szárföld",
    countyId: 7,
  },
  {
    zip: 2067,
    settlement: "Szárliget",
    countyId: 11,
  },
  {
    zip: 5540,
    settlement: "Szarvas",
    countyId: 3,
  },
  {
    zip: 3051,
    settlement: "Szarvasgede",
    countyId: 12,
  },
  {
    zip: 9913,
    settlement: "Szarvaskend",
    countyId: 17,
  },
  {
    zip: 3323,
    settlement: "Szarvaskõ",
    countyId: 9,
  },
  {
    zip: 5053,
    settlement: "Szászberek",
    countyId: 10,
  },
  {
    zip: 3821,
    settlement: "Szászfa",
    countyId: 4,
  },
  {
    zip: 7349,
    settlement: "Szászvár",
    countyId: 2,
  },
  {
    zip: 4945,
    settlement: "Szatmárcseke",
    countyId: 15,
  },
  {
    zip: 2656,
    settlement: "Szátok",
    countyId: 12,
  },
  {
    zip: 9938,
    settlement: "Szatta",
    countyId: 17,
  },
  {
    zip: 6763,
    settlement: "Szatymaz",
    countyId: 5,
  },
  {
    zip: 7813,
    settlement: "Szava",
    countyId: 2,
  },
  {
    zip: 2440,
    settlement: "Százhalombatta",
    countyId: 13,
  },
  {
    zip: 7725,
    settlement: "Szebény",
    countyId: 2,
  },
  {
    zip: 2692,
    settlement: "Szécsénke",
    countyId: 12,
  },
  {
    zip: 3170,
    settlement: "Szécsény",
    countyId: 12,
  },
  {
    zip: 3135,
    settlement: "Szécsényfelfalu",
    countyId: 12,
  },
  {
    zip: 8879,
    settlement: "Szécsisziget",
    countyId: 19,
  },
  {
    zip: 7751,
    settlement: "Szederkény",
    countyId: 2,
  },
  {
    zip: 7056,
    settlement: "Szedres",
    countyId: 16,
  },
  {
    zip: 6700,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6710,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6720,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6721,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6722,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6723,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6724,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6725,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6726,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6727,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6728,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6729,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6753,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6757,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6771,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 6791,
    settlement: "Szeged",
    countyId: 5,
  },
  {
    zip: 8732,
    settlement: "Szegerdõ",
    countyId: 14,
  },
  {
    zip: 5520,
    settlement: "Szeghalom",
    countyId: 3,
  },
  {
    zip: 3918,
    settlement: "Szegi",
    countyId: 4,
  },
  {
    zip: 3918,
    settlement: "Szegilong",
    countyId: 4,
  },
  {
    zip: 6635,
    settlement: "Szegvár",
    countyId: 5,
  },
  {
    zip: 4534,
    settlement: "Székely",
    countyId: 15,
  },
  {
    zip: 7737,
    settlement: "Székelyszabar",
    countyId: 2,
  },
  {
    zip: 8000,
    settlement: "Székesfehérvár",
    countyId: 6,
  },
  {
    zip: 8019,
    settlement: "Székesfehérvár",
    countyId: 6,
  },
  {
    zip: 6821,
    settlement: "Székkutas",
    countyId: 5,
  },
  {
    zip: 7100,
    settlement: "Szekszárd",
    countyId: 16,
  },
  {
    zip: 9622,
    settlement: "Szeleste",
    countyId: 17,
  },
  {
    zip: 5476,
    settlement: "Szelevény",
    countyId: 10,
  },
  {
    zip: 7661,
    settlement: "Szellõ",
    countyId: 2,
  },
  {
    zip: 7763,
    settlement: "Szemely",
    countyId: 2,
  },
  {
    zip: 9685,
    settlement: "Szemenye",
    countyId: 17,
  },
  {
    zip: 3866,
    settlement: "Szemere",
    countyId: 4,
  },
  {
    zip: 2640,
    settlement: "Szendehely",
    countyId: 12,
  },
  {
    zip: 3752,
    settlement: "Szendrõ",
    countyId: 4,
  },
  {
    zip: 3751,
    settlement: "Szendrõlád",
    countyId: 4,
  },
  {
    zip: 7477,
    settlement: "Szenna",
    countyId: 14,
  },
  {
    zip: 8849,
    settlement: "Szenta",
    countyId: 14,
  },
  {
    zip: 8272,
    settlement: "Szentantalfa",
    countyId: 18,
  },
  {
    zip: 7472,
    settlement: "Szentbalázs",
    countyId: 14,
  },
  {
    zip: 8281,
    settlement: "Szentbékkálla",
    countyId: 18,
  },
  {
    zip: 7918,
    settlement: "Szentborbás",
    countyId: 14,
  },
  {
    zip: 7913,
    settlement: "Szentdénes",
    countyId: 2,
  },
  {
    zip: 3259,
    settlement: "Szentdomonkos",
    countyId: 9,
  },
  {
    zip: 2655,
    settlement: "Szente",
    countyId: 12,
  },
  {
    zip: 7915,
    settlement: "Szentegát",
    countyId: 2,
  },
  {
    zip: 2000,
    settlement: "Szentendre",
    countyId: 13,
  },
  {
    zip: 6600,
    settlement: "Szentes",
    countyId: 5,
  },
  {
    zip: 8444,
    settlement: "Szentgál",
    countyId: 18,
  },
  {
    zip: 7465,
    settlement: "Szentgáloskér",
    countyId: 14,
  },
  {
    zip: 9955,
    settlement: "Szentgotthárd",
    countyId: 17,
  },
  {
    zip: 9970,
    settlement: "Szentgotthárd",
    countyId: 17,
  },
  {
    zip: 9981,
    settlement: "Szentgotthárd",
    countyId: 17,
  },
  {
    zip: 8393,
    settlement: "Szentgyörgyvár",
    countyId: 19,
  },
  {
    zip: 8975,
    settlement: "Szentgyörgyvölgy",
    countyId: 19,
  },
  {
    zip: 8475,
    settlement: "Szentimrefalva",
    countyId: 18,
  },
  {
    zip: 3418,
    settlement: "Szentistván",
    countyId: 4,
  },
  {
    zip: 3844,
    settlement: "Szentistvánbaksa",
    countyId: 4,
  },
  {
    zip: 8272,
    settlement: "Szentjakabfa",
    countyId: 18,
  },
  {
    zip: 7681,
    settlement: "Szentkatalin",
    countyId: 2,
  },
  {
    zip: 6031,
    settlement: "Szentkirály",
    countyId: 1,
  },
  {
    zip: 8225,
    settlement: "Szentkirályszabadja",
    countyId: 18,
  },
  {
    zip: 8947,
    settlement: "Szentkozmadombja",
    countyId: 19,
  },
  {
    zip: 7936,
    settlement: "Szentlászló",
    countyId: 2,
  },
  {
    zip: 8893,
    settlement: "Szentliszló",
    countyId: 19,
  },
  {
    zip: 7940,
    settlement: "Szentlõrinc",
    countyId: 2,
  },
  {
    zip: 2255,
    settlement: "Szentlõrinckáta",
    countyId: 13,
  },
  {
    zip: 8872,
    settlement: "Szentmargitfalva",
    countyId: 19,
  },
  {
    zip: 2254,
    settlement: "Szentmártonkáta",
    countyId: 13,
  },
  {
    zip: 9799,
    settlement: "Szentpéterfa",
    countyId: 17,
  },
  {
    zip: 8953,
    settlement: "Szentpéterfölde",
    countyId: 19,
  },
  {
    zip: 4121,
    settlement: "Szentpéterszeg",
    countyId: 8,
  },
  {
    zip: 8762,
    settlement: "Szentpéterúr",
    countyId: 19,
  },
  {
    zip: 8717,
    settlement: "Szenyér",
    countyId: 14,
  },
  {
    zip: 8861,
    settlement: "Szepetnek",
    countyId: 19,
  },
  {
    zip: 9125,
    settlement: "Szerecseny",
    countyId: 7,
  },
  {
    zip: 6512,
    settlement: "Szeremle",
    countyId: 1,
  },
  {
    zip: 3900,
    settlement: "Szerencs",
    countyId: 4,
  },
  {
    zip: 4162,
    settlement: "Szerep",
    countyId: 8,
  },
  {
    zip: 4163,
    settlement: "Szerep",
    countyId: 8,
  },
  {
    zip: 9523,
    settlement: "Szergény",
    countyId: 17,
  },
  {
    zip: 2321,
    settlement: "Szigetbecse",
    countyId: 13,
  },
  {
    zip: 2317,
    settlement: "Szigetcsép",
    countyId: 13,
  },
  {
    zip: 2315,
    settlement: "Szigethalom",
    countyId: 13,
  },
  {
    zip: 2015,
    settlement: "Szigetmonostor",
    countyId: 13,
  },
  {
    zip: 2318,
    settlement: "Szigetszentmárton",
    countyId: 13,
  },
  {
    zip: 2310,
    settlement: "Szigetszentmiklós",
    countyId: 13,
  },
  {
    zip: 2319,
    settlement: "Szigetújfalu",
    countyId: 13,
  },
  {
    zip: 7900,
    settlement: "Szigetvár",
    countyId: 2,
  },
  {
    zip: 8264,
    settlement: "Szigliget",
    countyId: 18,
  },
  {
    zip: 3377,
    settlement: "Szihalom",
    countyId: 9,
  },
  {
    zip: 8969,
    settlement: "Szijártóháza",
    countyId: 19,
  },
  {
    zip: 3800,
    settlement: "Szikszó",
    countyId: 4,
  },
  {
    zip: 9326,
    settlement: "Szil",
    countyId: 7,
  },
  {
    zip: 7664,
    settlement: "Szilágy",
    countyId: 2,
  },
  {
    zip: 3125,
    settlement: "Szilaspogony",
    countyId: 12,
  },
  {
    zip: 9312,
    settlement: "Szilsárkány",
    countyId: 7,
  },
  {
    zip: 8986,
    settlement: "Szilvágy",
    countyId: 19,
  },
  {
    zip: 7811,
    settlement: "Szilvás",
    countyId: 2,
  },
  {
    zip: 7477,
    settlement: "Szilvásszentmárton",
    countyId: 14,
  },
  {
    zip: 3348,
    settlement: "Szilvásvárad",
    countyId: 9,
  },
  {
    zip: 3761,
    settlement: "Szin",
    countyId: 4,
  },
  {
    zip: 3761,
    settlement: "Szinpetri",
    countyId: 4,
  },
  {
    zip: 3044,
    settlement: "Szirák",
    countyId: 12,
  },
  {
    zip: 3711,
    settlement: "Szirmabesenyõ",
    countyId: 4,
  },
  {
    zip: 2628,
    settlement: "Szob",
    countyId: 13,
  },
  {
    zip: 8452,
    settlement: "Szõc",
    countyId: 18,
  },
  {
    zip: 9935,
    settlement: "Szõce",
    countyId: 17,
  },
  {
    zip: 2134,
    settlement: "Szõd",
    countyId: 13,
  },
  {
    zip: 2133,
    settlement: "Szõdliget",
    countyId: 13,
  },
  {
    zip: 7833,
    settlement: "Szõke",
    countyId: 2,
  },
  {
    zip: 7763,
    settlement: "Szõkéd",
    countyId: 2,
  },
  {
    zip: 8736,
    settlement: "Szõkedencs",
    countyId: 14,
  },
  {
    zip: 2624,
    settlement: "Szokolya",
    countyId: 13,
  },
  {
    zip: 8625,
    settlement: "Szólád",
    countyId: 14,
  },
  {
    zip: 5000,
    settlement: "Szolnok",
    countyId: 10,
  },
  {
    zip: 5008,
    settlement: "Szolnok",
    countyId: 10,
  },
  {
    zip: 3757,
    settlement: "Szõlõsardó",
    countyId: 4,
  },
  {
    zip: 8692,
    settlement: "Szõlõsgyörök",
    countyId: 14,
  },
  {
    zip: 9700,
    settlement: "Szombathely",
    countyId: 17,
  },
  {
    zip: 9707,
    settlement: "Szombathely",
    countyId: 17,
  },
  {
    zip: 9719,
    settlement: "Szombathely",
    countyId: 17,
  },
  {
    zip: 2896,
    settlement: "Szomód",
    countyId: 11,
  },
  {
    zip: 3411,
    settlement: "Szomolya",
    countyId: 4,
  },
  {
    zip: 2822,
    settlement: "Szomor",
    countyId: 11,
  },
  {
    zip: 4441,
    settlement: "Szorgalmatos",
    countyId: 15,
  },
  {
    zip: 7285,
    settlement: "Szorosad",
    countyId: 14,
  },
  {
    zip: 3341,
    settlement: "Szúcs",
    countyId: 9,
  },
  {
    zip: 3034,
    settlement: "Szûcsi",
    countyId: 9,
  },
  {
    zip: 3154,
    settlement: "Szuha",
    countyId: 12,
  },
  {
    zip: 3726,
    settlement: "Szuhafõ",
    countyId: 4,
  },
  {
    zip: 3731,
    settlement: "Szuhakálló",
    countyId: 4,
  },
  {
    zip: 3734,
    settlement: "Szuhogy",
    countyId: 4,
  },
  {
    zip: 7932,
    settlement: "Szulimán",
    countyId: 2,
  },
  {
    zip: 7539,
    settlement: "Szulok",
    countyId: 14,
  },
  {
    zip: 7735,
    settlement: "Szûr",
    countyId: 2,
  },
  {
    zip: 3064,
    settlement: "Szurdokpüspöki",
    countyId: 12,
  },
  {
    zip: 2699,
    settlement: "Szügy",
    countyId: 12,
  },
  {
    zip: 3762,
    settlement: "Szögliget",
    countyId: 4,
  },
  {
    zip: 7976,
    settlement: "Szörény",
    countyId: 2,
  },
  {
    zip: 8897,
    settlement: "Söjtör",
    countyId: 19,
  },
  {
    zip: 9743,
    settlement: "Söpte",
    countyId: 17,
  },
  {
    zip: 8072,
    settlement: "Söréd",
    countyId: 6,
  },
  {
    zip: 8660,
    settlement: "Tab",
    countyId: 14,
  },
  {
    zip: 8088,
    settlement: "Tabajd",
    countyId: 6,
  },
  {
    zip: 6224,
    settlement: "Tabdi",
    countyId: 1,
  },
  {
    zip: 2381,
    settlement: "Táborfalva",
    countyId: 13,
  },
  {
    zip: 8121,
    settlement: "Tác",
    countyId: 6,
  },
  {
    zip: 8272,
    settlement: "Tagyon",
    countyId: 18,
  },
  {
    zip: 2021,
    settlement: "Tahitótfalu",
    countyId: 13,
  },
  {
    zip: 2022,
    settlement: "Tahitótfalu",
    countyId: 13,
  },
  {
    zip: 8541,
    settlement: "Takácsi",
    countyId: 18,
  },
  {
    zip: 4845,
    settlement: "Tákos",
    countyId: 15,
  },
  {
    zip: 2335,
    settlement: "Taksony",
    countyId: 13,
  },
  {
    zip: 3926,
    settlement: "Taktabáj",
    countyId: 4,
  },
  {
    zip: 3922,
    settlement: "Taktaharkány",
    countyId: 4,
  },
  {
    zip: 3924,
    settlement: "Taktakenéz",
    countyId: 4,
  },
  {
    zip: 3921,
    settlement: "Taktaszada",
    countyId: 4,
  },
  {
    zip: 8295,
    settlement: "Taliándörögd",
    countyId: 18,
  },
  {
    zip: 3907,
    settlement: "Tállya",
    countyId: 4,
  },
  {
    zip: 7090,
    settlement: "Tamási",
    countyId: 16,
  },
  {
    zip: 7091,
    settlement: "Tamási",
    countyId: 16,
  },
  {
    zip: 9762,
    settlement: "Tanakajd",
    countyId: 17,
  },
  {
    zip: 9095,
    settlement: "Táp",
    countyId: 7,
  },
  {
    zip: 2764,
    settlement: "Tápióbicske",
    countyId: 13,
  },
  {
    zip: 2767,
    settlement: "Tápiógyörgye",
    countyId: 13,
  },
  {
    zip: 2253,
    settlement: "Tápióság",
    countyId: 13,
  },
  {
    zip: 2251,
    settlement: "Tápiószecsõ",
    countyId: 13,
  },
  {
    zip: 2766,
    settlement: "Tápiószele",
    countyId: 13,
  },
  {
    zip: 2711,
    settlement: "Tápiószentmárton",
    countyId: 13,
  },
  {
    zip: 2769,
    settlement: "Tápiószõlõs",
    countyId: 13,
  },
  {
    zip: 9761,
    settlement: "Táplánszentkereszt",
    countyId: 17,
  },
  {
    zip: 8297,
    settlement: "Tapolca",
    countyId: 18,
  },
  {
    zip: 8300,
    settlement: "Tapolca",
    countyId: 18,
  },
  {
    zip: 8718,
    settlement: "Tapsony",
    countyId: 14,
  },
  {
    zip: 9094,
    settlement: "Tápszentmiklós",
    countyId: 7,
  },
  {
    zip: 3073,
    settlement: "Tar",
    countyId: 12,
  },
  {
    zip: 7514,
    settlement: "Tarany",
    countyId: 14,
  },
  {
    zip: 3915,
    settlement: "Tarcal",
    countyId: 4,
  },
  {
    zip: 3416,
    settlement: "Tard",
    countyId: 4,
  },
  {
    zip: 3644,
    settlement: "Tardona",
    countyId: 4,
  },
  {
    zip: 2834,
    settlement: "Tardos",
    countyId: 11,
  },
  {
    zip: 5641,
    settlement: "Tarhos",
    countyId: 3,
  },
  {
    zip: 2831,
    settlement: "Tarján",
    countyId: 11,
  },
  {
    zip: 9092,
    settlement: "Tarjánpuszta",
    countyId: 7,
  },
  {
    zip: 2945,
    settlement: "Tárkány",
    countyId: 11,
  },
  {
    zip: 3369,
    settlement: "Tarnabod",
    countyId: 9,
  },
  {
    zip: 3258,
    settlement: "Tarnalelesz",
    countyId: 9,
  },
  {
    zip: 3284,
    settlement: "Tarnaméra",
    countyId: 9,
  },
  {
    zip: 3331,
    settlement: "Tarnaszentmária",
    countyId: 9,
  },
  {
    zip: 3382,
    settlement: "Tarnaszentmiklós",
    countyId: 9,
  },
  {
    zip: 3283,
    settlement: "Tarnazsadány",
    countyId: 9,
  },
  {
    zip: 3294,
    settlement: "Tarnaörs",
    countyId: 9,
  },
  {
    zip: 2461,
    settlement: "Tárnok",
    countyId: 13,
  },
  {
    zip: 9165,
    settlement: "Tárnokréti",
    countyId: 7,
  },
  {
    zip: 4931,
    settlement: "Tarpa",
    countyId: 15,
  },
  {
    zip: 7362,
    settlement: "Tarrós",
    countyId: 2,
  },
  {
    zip: 8696,
    settlement: "Táska",
    countyId: 14,
  },
  {
    zip: 6098,
    settlement: "Tass",
    countyId: 1,
  },
  {
    zip: 7261,
    settlement: "Taszár",
    countyId: 14,
  },
  {
    zip: 2534,
    settlement: "Tát",
    countyId: 11,
  },
  {
    zip: 2835,
    settlement: "Tata",
    countyId: 11,
  },
  {
    zip: 2890,
    settlement: "Tata",
    countyId: 11,
  },
  {
    zip: 2800,
    settlement: "Tatabánya",
    countyId: 11,
  },
  {
    zip: 6451,
    settlement: "Tataháza",
    countyId: 1,
  },
  {
    zip: 2375,
    settlement: "Tatárszentgyörgy",
    countyId: 13,
  },
  {
    zip: 6236,
    settlement: "Tázlár",
    countyId: 1,
  },
  {
    zip: 4243,
    settlement: "Téglás",
    countyId: 8,
  },
  {
    zip: 7381,
    settlement: "Tékes",
    countyId: 2,
  },
  {
    zip: 7973,
    settlement: "Teklafalu",
    countyId: 2,
  },
  {
    zip: 9812,
    settlement: "Telekes",
    countyId: 17,
  },
  {
    zip: 5675,
    settlement: "Telekgerendás",
    countyId: 3,
  },
  {
    zip: 8626,
    settlement: "Teleki",
    countyId: 14,
  },
  {
    zip: 2089,
    settlement: "Telki",
    countyId: 13,
  },
  {
    zip: 3896,
    settlement: "Telkibánya",
    countyId: 4,
  },
  {
    zip: 7054,
    settlement: "Tengelic",
    countyId: 16,
  },
  {
    zip: 7834,
    settlement: "Tengeri",
    countyId: 2,
  },
  {
    zip: 8668,
    settlement: "Tengõd",
    countyId: 14,
  },
  {
    zip: 3359,
    settlement: "Tenk",
    countyId: 9,
  },
  {
    zip: 9111,
    settlement: "Tényõ",
    countyId: 7,
  },
  {
    zip: 4132,
    settlement: "Tépe",
    countyId: 8,
  },
  {
    zip: 4342,
    settlement: "Terem",
    countyId: 15,
  },
  {
    zip: 2696,
    settlement: "Terény",
    countyId: 12,
  },
  {
    zip: 2652,
    settlement: "Tereske",
    countyId: 12,
  },
  {
    zip: 3757,
    settlement: "Teresztenye",
    countyId: 4,
  },
  {
    zip: 3334,
    settlement: "Terpes",
    countyId: 9,
  },
  {
    zip: 8109,
    settlement: "Tés",
    countyId: 18,
  },
  {
    zip: 2635,
    settlement: "Tésa",
    countyId: 13,
  },
  {
    zip: 7843,
    settlement: "Tésenfa",
    countyId: 2,
  },
  {
    zip: 7834,
    settlement: "Téseny",
    countyId: 2,
  },
  {
    zip: 8991,
    settlement: "Teskánd",
    countyId: 19,
  },
  {
    zip: 9100,
    settlement: "Tét",
    countyId: 7,
  },
  {
    zip: 4184,
    settlement: "Tetétlen",
    countyId: 8,
  },
  {
    zip: 7181,
    settlement: "Tevel",
    countyId: 16,
  },
  {
    zip: 3423,
    settlement: "Tibolddaróc",
    countyId: 4,
  },
  {
    zip: 4353,
    settlement: "Tiborszállás",
    countyId: 15,
  },
  {
    zip: 8237,
    settlement: "Tihany",
    countyId: 18,
  },
  {
    zip: 8731,
    settlement: "Tikos",
    countyId: 14,
  },
  {
    zip: 8782,
    settlement: "Tilaj",
    countyId: 19,
  },
  {
    zip: 4466,
    settlement: "Timár",
    countyId: 15,
  },
  {
    zip: 2086,
    settlement: "Tinnye",
    countyId: 13,
  },
  {
    zip: 4833,
    settlement: "Tiszaadony",
    countyId: 15,
  },
  {
    zip: 6066,
    settlement: "Tiszaalpár",
    countyId: 1,
  },
  {
    zip: 6067,
    settlement: "Tiszaalpár",
    countyId: 1,
  },
  {
    zip: 3465,
    settlement: "Tiszabábolna",
    countyId: 4,
  },
  {
    zip: 4951,
    settlement: "Tiszabecs",
    countyId: 15,
  },
  {
    zip: 4474,
    settlement: "Tiszabercel",
    countyId: 15,
  },
  {
    zip: 4624,
    settlement: "Tiszabezdéd",
    countyId: 15,
  },
  {
    zip: 5232,
    settlement: "Tiszabõ",
    countyId: 10,
  },
  {
    zip: 5235,
    settlement: "Tiszabura",
    countyId: 10,
  },
  {
    zip: 4947,
    settlement: "Tiszacsécse",
    countyId: 15,
  },
  {
    zip: 4066,
    settlement: "Tiszacsege",
    countyId: 8,
  },
  {
    zip: 3972,
    settlement: "Tiszacsermely",
    countyId: 4,
  },
  {
    zip: 4455,
    settlement: "Tiszadada",
    countyId: 15,
  },
  {
    zip: 5243,
    settlement: "Tiszaderzs",
    countyId: 10,
  },
  {
    zip: 4456,
    settlement: "Tiszadob",
    countyId: 15,
  },
  {
    zip: 3466,
    settlement: "Tiszadorogma",
    countyId: 4,
  },
  {
    zip: 4446,
    settlement: "Tiszaeszlár",
    countyId: 15,
  },
  {
    zip: 4464,
    settlement: "Tiszaeszlár",
    countyId: 15,
  },
  {
    zip: 5350,
    settlement: "Tiszafüred",
    countyId: 10,
  },
  {
    zip: 5358,
    settlement: "Tiszafüred",
    countyId: 10,
  },
  {
    zip: 5359,
    settlement: "Tiszafüred",
    countyId: 10,
  },
  {
    zip: 5430,
    settlement: "Tiszaföldvár",
    countyId: 10,
  },
  {
    zip: 5461,
    settlement: "Tiszaföldvár",
    countyId: 10,
  },
  {
    zip: 5233,
    settlement: "Tiszagyenda",
    countyId: 10,
  },
  {
    zip: 4097,
    settlement: "Tiszagyulaháza",
    countyId: 8,
  },
  {
    zip: 5361,
    settlement: "Tiszaigar",
    countyId: 10,
  },
  {
    zip: 5464,
    settlement: "Tiszainoka",
    countyId: 10,
  },
  {
    zip: 5094,
    settlement: "Tiszajenõ",
    countyId: 10,
  },
  {
    zip: 4493,
    settlement: "Tiszakanyár",
    countyId: 15,
  },
  {
    zip: 3971,
    settlement: "Tiszakarád",
    countyId: 4,
  },
  {
    zip: 6060,
    settlement: "Tiszakécske",
    countyId: 1,
  },
  {
    zip: 6062,
    settlement: "Tiszakécske",
    countyId: 1,
  },
  {
    zip: 4834,
    settlement: "Tiszakerecseny",
    countyId: 15,
  },
  {
    zip: 3458,
    settlement: "Tiszakeszi",
    countyId: 4,
  },
  {
    zip: 4946,
    settlement: "Tiszakóród",
    countyId: 15,
  },
  {
    zip: 5471,
    settlement: "Tiszakürt",
    countyId: 10,
  },
  {
    zip: 5472,
    settlement: "Tiszakürt",
    countyId: 10,
  },
  {
    zip: 3929,
    settlement: "Tiszaladány",
    countyId: 4,
  },
  {
    zip: 3565,
    settlement: "Tiszalúc",
    countyId: 4,
  },
  {
    zip: 4447,
    settlement: "Tiszalök",
    countyId: 15,
  },
  {
    zip: 4450,
    settlement: "Tiszalök",
    countyId: 15,
  },
  {
    zip: 4645,
    settlement: "Tiszamogyorós",
    countyId: 15,
  },
  {
    zip: 4463,
    settlement: "Tiszanagyfalu",
    countyId: 15,
  },
  {
    zip: 3385,
    settlement: "Tiszanána",
    countyId: 9,
  },
  {
    zip: 3587,
    settlement: "Tiszapalkonya",
    countyId: 4,
  },
  {
    zip: 5211,
    settlement: "Tiszapüspöki",
    countyId: 10,
  },
  {
    zip: 4503,
    settlement: "Tiszarád",
    countyId: 15,
  },
  {
    zip: 5234,
    settlement: "Tiszaroff",
    countyId: 10,
  },
  {
    zip: 5474,
    settlement: "Tiszasas",
    countyId: 10,
  },
  {
    zip: 5061,
    settlement: "Tiszasüly",
    countyId: 10,
  },
  {
    zip: 4831,
    settlement: "Tiszaszalka",
    countyId: 15,
  },
  {
    zip: 5322,
    settlement: "Tiszaszentimre",
    countyId: 10,
  },
  {
    zip: 5323,
    settlement: "Tiszaszentimre",
    countyId: 10,
  },
  {
    zip: 4628,
    settlement: "Tiszaszentmárton",
    countyId: 15,
  },
  {
    zip: 6756,
    settlement: "Tiszasziget",
    countyId: 5,
  },
  {
    zip: 5244,
    settlement: "Tiszaszõlõs",
    countyId: 10,
  },
  {
    zip: 3928,
    settlement: "Tiszatardos",
    countyId: 4,
  },
  {
    zip: 3589,
    settlement: "Tiszatarján",
    countyId: 4,
  },
  {
    zip: 4486,
    settlement: "Tiszatelek",
    countyId: 15,
  },
  {
    zip: 4487,
    settlement: "Tiszatelek",
    countyId: 15,
  },
  {
    zip: 5082,
    settlement: "Tiszatenyõ",
    countyId: 10,
  },
  {
    zip: 6064,
    settlement: "Tiszaug",
    countyId: 1,
  },
  {
    zip: 3580,
    settlement: "Tiszaújváros",
    countyId: 4,
  },
  {
    zip: 3464,
    settlement: "Tiszavalk",
    countyId: 4,
  },
  {
    zip: 5092,
    settlement: "Tiszavárkony",
    countyId: 10,
  },
  {
    zip: 5095,
    settlement: "Tiszavárkony",
    countyId: 10,
  },
  {
    zip: 4440,
    settlement: "Tiszavasvári",
    countyId: 15,
  },
  {
    zip: 4832,
    settlement: "Tiszavid",
    countyId: 15,
  },
  {
    zip: 5362,
    settlement: "Tiszaörs",
    countyId: 10,
  },
  {
    zip: 4969,
    settlement: "Tisztaberek",
    countyId: 15,
  },
  {
    zip: 4921,
    settlement: "Tivadar",
    countyId: 15,
  },
  {
    zip: 2252,
    settlement: "Tóalmás",
    countyId: 13,
  },
  {
    zip: 3354,
    settlement: "Tófalu",
    countyId: 9,
  },
  {
    zip: 8946,
    settlement: "Tófej",
    countyId: 19,
  },
  {
    zip: 7348,
    settlement: "Tófû",
    countyId: 2,
  },
  {
    zip: 3910,
    settlement: "Tokaj",
    countyId: 4,
  },
  {
    zip: 2531,
    settlement: "Tokod",
    countyId: 11,
  },
  {
    zip: 2532,
    settlement: "Tokodaltáró",
    countyId: 11,
  },
  {
    zip: 9561,
    settlement: "Tokorcs",
    countyId: 17,
  },
  {
    zip: 3934,
    settlement: "Tolcsva",
    countyId: 4,
  },
  {
    zip: 4117,
    settlement: "Told",
    countyId: 8,
  },
  {
    zip: 2657,
    settlement: "Tolmács",
    countyId: 12,
  },
  {
    zip: 7130,
    settlement: "Tolna",
    countyId: 16,
  },
  {
    zip: 7131,
    settlement: "Tolna",
    countyId: 16,
  },
  {
    zip: 7083,
    settlement: "Tolnanémedi",
    countyId: 16,
  },
  {
    zip: 5324,
    settlement: "Tomajmonostora",
    countyId: 10,
  },
  {
    zip: 3787,
    settlement: "Tomor",
    countyId: 4,
  },
  {
    zip: 6422,
    settlement: "Tompa",
    countyId: 1,
  },
  {
    zip: 9662,
    settlement: "Tompaládony",
    countyId: 17,
  },
  {
    zip: 2463,
    settlement: "Tordas",
    countyId: 6,
  },
  {
    zip: 8876,
    settlement: "Tormafölde",
    countyId: 19,
  },
  {
    zip: 7383,
    settlement: "Tormás",
    countyId: 2,
  },
  {
    zip: 9736,
    settlement: "Tormásliget",
    countyId: 17,
  },
  {
    zip: 3765,
    settlement: "Tornabarakony",
    countyId: 4,
  },
  {
    zip: 3761,
    settlement: "Tornakápolna",
    countyId: 4,
  },
  {
    zip: 3767,
    settlement: "Tornanádaska",
    countyId: 4,
  },
  {
    zip: 3765,
    settlement: "Tornaszentandrás",
    countyId: 4,
  },
  {
    zip: 3769,
    settlement: "Tornaszentjakab",
    countyId: 4,
  },
  {
    zip: 8877,
    settlement: "Tornyiszentmiklós",
    countyId: 19,
  },
  {
    zip: 3877,
    settlement: "Tornyosnémeti",
    countyId: 4,
  },
  {
    zip: 4642,
    settlement: "Tornyospálca",
    countyId: 15,
  },
  {
    zip: 9791,
    settlement: "Torony",
    countyId: 17,
  },
  {
    zip: 8660,
    settlement: "Torvaj",
    countyId: 14,
  },
  {
    zip: 5091,
    settlement: "Tószeg",
    countyId: 10,
  },
  {
    zip: 5940,
    settlement: "Tótkomlós",
    countyId: 3,
  },
  {
    zip: 7981,
    settlement: "Tótszentgyörgy",
    countyId: 2,
  },
  {
    zip: 8865,
    settlement: "Tótszentmárton",
    countyId: 19,
  },
  {
    zip: 8864,
    settlement: "Tótszerdahely",
    countyId: 19,
  },
  {
    zip: 7918,
    settlement: "Tótújfalu",
    countyId: 14,
  },
  {
    zip: 8246,
    settlement: "Tótvázsony",
    countyId: 18,
  },
  {
    zip: 3724,
    settlement: "Trizs",
    countyId: 4,
  },
  {
    zip: 4731,
    settlement: "Tunyogmatolcs",
    countyId: 15,
  },
  {
    zip: 2194,
    settlement: "Tura",
    countyId: 13,
  },
  {
    zip: 4944,
    settlement: "Túristvándi",
    countyId: 15,
  },
  {
    zip: 5420,
    settlement: "Túrkeve",
    countyId: 10,
  },
  {
    zip: 7811,
    settlement: "Túrony",
    countyId: 2,
  },
  {
    zip: 4968,
    settlement: "Túrricse",
    countyId: 15,
  },
  {
    zip: 4623,
    settlement: "Tuzsér",
    countyId: 15,
  },
  {
    zip: 8796,
    settlement: "Türje",
    countyId: 19,
  },
  {
    zip: 8477,
    settlement: "Tüskevár",
    countyId: 18,
  },
  {
    zip: 4762,
    settlement: "Tyukod",
    countyId: 15,
  },
  {
    zip: 2073,
    settlement: "Tök",
    countyId: 13,
  },
  {
    zip: 2316,
    settlement: "Tököl",
    countyId: 13,
  },
  {
    zip: 9086,
    settlement: "Töltéstava",
    countyId: 7,
  },
  {
    zip: 9738,
    settlement: "Tömörd",
    countyId: 17,
  },
  {
    zip: 6646,
    settlement: "Tömörkény",
    countyId: 5,
  },
  {
    zip: 2747,
    settlement: "Törtel",
    countyId: 13,
  },
  {
    zip: 2045,
    settlement: "Törökbálint",
    countyId: 13,
  },
  {
    zip: 7285,
    settlement: "Törökkoppány",
    countyId: 14,
  },
  {
    zip: 5200,
    settlement: "Törökszentmiklós",
    countyId: 10,
  },
  {
    zip: 5212,
    settlement: "Törökszentmiklós",
    countyId: 10,
  },
  {
    zip: 7755,
    settlement: "Töttös",
    countyId: 2,
  },
  {
    zip: 7718,
    settlement: "Udvar",
    countyId: 2,
  },
  {
    zip: 7066,
    settlement: "Udvari",
    countyId: 16,
  },
  {
    zip: 8564,
    settlement: "Ugod",
    countyId: 18,
  },
  {
    zip: 2066,
    settlement: "Újbarok",
    countyId: 6,
  },
  {
    zip: 3716,
    settlement: "Újcsanálos",
    countyId: 4,
  },
  {
    zip: 4491,
    settlement: "Újdombrád",
    countyId: 15,
  },
  {
    zip: 4244,
    settlement: "Újfehértó",
    countyId: 15,
  },
  {
    zip: 2367,
    settlement: "Újhartyán",
    countyId: 13,
  },
  {
    zip: 4146,
    settlement: "Újiráz",
    countyId: 8,
  },
  {
    zip: 7095,
    settlement: "Újireg",
    countyId: 16,
  },
  {
    zip: 4635,
    settlement: "Újkenéz",
    countyId: 15,
  },
  {
    zip: 9472,
    settlement: "Újkér",
    countyId: 7,
  },
  {
    zip: 5661,
    settlement: "Újkígyós",
    countyId: 3,
  },
  {
    zip: 2724,
    settlement: "Újlengyel",
    countyId: 13,
  },
  {
    zip: 4288,
    settlement: "Újléta",
    countyId: 8,
  },
  {
    zip: 3387,
    settlement: "Újlõrincfalva",
    countyId: 9,
  },
  {
    zip: 7766,
    settlement: "Újpetre",
    countyId: 2,
  },
  {
    zip: 9244,
    settlement: "Újrónafõ",
    countyId: 7,
  },
  {
    zip: 6320,
    settlement: "Újsolt",
    countyId: 1,
  },
  {
    zip: 5727,
    settlement: "Újszalonta",
    countyId: 3,
  },
  {
    zip: 5052,
    settlement: "Újszász",
    countyId: 10,
  },
  {
    zip: 6754,
    settlement: "Újszentiván",
    countyId: 5,
  },
  {
    zip: 4065,
    settlement: "Újszentmargita",
    countyId: 8,
  },
  {
    zip: 2768,
    settlement: "Újszilvás",
    countyId: 13,
  },
  {
    zip: 6337,
    settlement: "Újtelek",
    countyId: 1,
  },
  {
    zip: 4096,
    settlement: "Újtikos",
    countyId: 8,
  },
  {
    zip: 8778,
    settlement: "Újudvar",
    countyId: 19,
  },
  {
    zip: 7436,
    settlement: "Újvárfalva",
    countyId: 14,
  },
  {
    zip: 8347,
    settlement: "Ukk",
    countyId: 18,
  },
  {
    zip: 9464,
    settlement: "Und",
    countyId: 7,
  },
  {
    zip: 2528,
    settlement: "Úny",
    countyId: 11,
  },
  {
    zip: 3622,
    settlement: "Uppony",
    countyId: 4,
  },
  {
    zip: 4763,
    settlement: "Ura",
    countyId: 15,
  },
  {
    zip: 9651,
    settlement: "Uraiújfalu",
    countyId: 17,
  },
  {
    zip: 8142,
    settlement: "Úrhida",
    countyId: 6,
  },
  {
    zip: 2244,
    settlement: "Úri",
    countyId: 13,
  },
  {
    zip: 8409,
    settlement: "Úrkút",
    countyId: 18,
  },
  {
    zip: 4952,
    settlement: "Uszka",
    countyId: 15,
  },
  {
    zip: 6332,
    settlement: "Uszód",
    countyId: 1,
  },
  {
    zip: 8321,
    settlement: "Uzsa",
    countyId: 18,
  },
  {
    zip: 2600,
    settlement: "Vác",
    countyId: 13,
  },
  {
    zip: 2167,
    settlement: "Vácduka",
    countyId: 13,
  },
  {
    zip: 2184,
    settlement: "Vácegres",
    countyId: 13,
  },
  {
    zip: 2164,
    settlement: "Váchartyán",
    countyId: 13,
  },
  {
    zip: 2185,
    settlement: "Váckisújfalu",
    countyId: 13,
  },
  {
    zip: 2163,
    settlement: "Vácrátót",
    countyId: 13,
  },
  {
    zip: 2115,
    settlement: "Vácszentlászló",
    countyId: 13,
  },
  {
    zip: 3636,
    settlement: "Vadna",
    countyId: 4,
  },
  {
    zip: 9346,
    settlement: "Vadosfa",
    countyId: 7,
  },
  {
    zip: 9327,
    settlement: "Vág",
    countyId: 7,
  },
  {
    zip: 3992,
    settlement: "Vágáshuta",
    countyId: 4,
  },
  {
    zip: 4562,
    settlement: "Vaja",
    countyId: 15,
  },
  {
    zip: 3961,
    settlement: "Vajdácska",
    countyId: 4,
  },
  {
    zip: 7838,
    settlement: "Vajszló",
    countyId: 2,
  },
  {
    zip: 7041,
    settlement: "Vajta",
    countyId: 6,
  },
  {
    zip: 2473,
    settlement: "Vál",
    countyId: 6,
  },
  {
    zip: 2114,
    settlement: "Valkó",
    countyId: 13,
  },
  {
    zip: 8885,
    settlement: "Valkonya",
    countyId: 19,
  },
  {
    zip: 4351,
    settlement: "Vállaj",
    countyId: 15,
  },
  {
    zip: 8316,
    settlement: "Vállus",
    countyId: 19,
  },
  {
    zip: 4936,
    settlement: "Vámosatya",
    countyId: 15,
  },
  {
    zip: 9665,
    settlement: "Vámoscsalád",
    countyId: 17,
  },
  {
    zip: 3291,
    settlement: "Vámosgyörk",
    countyId: 9,
  },
  {
    zip: 2635,
    settlement: "Vámosmikola",
    countyId: 13,
  },
  {
    zip: 4966,
    settlement: "Vámosoroszi",
    countyId: 15,
  },
  {
    zip: 4287,
    settlement: "Vámospércs",
    countyId: 8,
  },
  {
    zip: 9061,
    settlement: "Vámosszabadi",
    countyId: 7,
  },
  {
    zip: 3941,
    settlement: "Vámosújfalu",
    countyId: 4,
  },
  {
    zip: 4119,
    settlement: "Váncsod",
    countyId: 8,
  },
  {
    zip: 2688,
    settlement: "Vanyarc",
    countyId: 12,
  },
  {
    zip: 8552,
    settlement: "Vanyola",
    countyId: 18,
  },
  {
    zip: 7973,
    settlement: "Várad",
    countyId: 2,
  },
  {
    zip: 7354,
    settlement: "Váralja",
    countyId: 16,
  },
  {
    zip: 8723,
    settlement: "Varászló",
    countyId: 14,
  },
  {
    zip: 3254,
    settlement: "Váraszó",
    countyId: 9,
  },
  {
    zip: 9243,
    settlement: "Várbalog",
    countyId: 7,
  },
  {
    zip: 3778,
    settlement: "Varbó",
    countyId: 4,
  },
  {
    zip: 3756,
    settlement: "Varbóc",
    countyId: 4,
  },
  {
    zip: 7442,
    settlement: "Várda",
    countyId: 14,
  },
  {
    zip: 7146,
    settlement: "Várdomb",
    countyId: 16,
  },
  {
    zip: 8891,
    settlement: "Várfölde",
    countyId: 19,
  },
  {
    zip: 7370,
    settlement: "Varga",
    countyId: 2,
  },
  {
    zip: 2824,
    settlement: "Várgesztes",
    countyId: 11,
  },
  {
    zip: 8523,
    settlement: "Várkeszõ",
    countyId: 18,
  },
  {
    zip: 7214,
    settlement: "Várong",
    countyId: 16,
  },
  {
    zip: 6033,
    settlement: "Városföld",
    countyId: 1,
  },
  {
    zip: 8445,
    settlement: "Városlõd",
    countyId: 18,
  },
  {
    zip: 8100,
    settlement: "Várpalota",
    countyId: 18,
  },
  {
    zip: 8103,
    settlement: "Várpalota",
    countyId: 18,
  },
  {
    zip: 8104,
    settlement: "Várpalota",
    countyId: 18,
  },
  {
    zip: 7067,
    settlement: "Varsád",
    countyId: 16,
  },
  {
    zip: 3178,
    settlement: "Varsány",
    countyId: 12,
  },
  {
    zip: 8316,
    settlement: "Várvölgy",
    countyId: 19,
  },
  {
    zip: 2211,
    settlement: "Vasad",
    countyId: 13,
  },
  {
    zip: 9921,
    settlement: "Vasalja",
    countyId: 17,
  },
  {
    zip: 7926,
    settlement: "Vásárosbéc",
    countyId: 2,
  },
  {
    zip: 7362,
    settlement: "Vásárosdombó",
    countyId: 2,
  },
  {
    zip: 9343,
    settlement: "Vásárosfalu",
    countyId: 7,
  },
  {
    zip: 9552,
    settlement: "Vásárosmiske",
    countyId: 17,
  },
  {
    zip: 4800,
    settlement: "Vásárosnamény",
    countyId: 15,
  },
  {
    zip: 4803,
    settlement: "Vásárosnamény",
    countyId: 15,
  },
  {
    zip: 4804,
    settlement: "Vásárosnamény",
    countyId: 15,
  },
  {
    zip: 9744,
    settlement: "Vasasszonyfa",
    countyId: 17,
  },
  {
    zip: 8914,
    settlement: "Vasboldogasszony",
    countyId: 19,
  },
  {
    zip: 9661,
    settlement: "Vasegerszeg",
    countyId: 17,
  },
  {
    zip: 9674,
    settlement: "Vashosszúfalu",
    countyId: 17,
  },
  {
    zip: 9795,
    settlement: "Vaskeresztes",
    countyId: 17,
  },
  {
    zip: 6521,
    settlement: "Vaskút",
    countyId: 1,
  },
  {
    zip: 4502,
    settlement: "Vasmegyer",
    countyId: 15,
  },
  {
    zip: 8998,
    settlement: "Vaspör",
    countyId: 19,
  },
  {
    zip: 9741,
    settlement: "Vassurány",
    countyId: 17,
  },
  {
    zip: 9763,
    settlement: "Vasszécseny",
    countyId: 17,
  },
  {
    zip: 9953,
    settlement: "Vasszentmihály",
    countyId: 17,
  },
  {
    zip: 9747,
    settlement: "Vasszilvágy",
    countyId: 17,
  },
  {
    zip: 9800,
    settlement: "Vasvár",
    countyId: 17,
  },
  {
    zip: 8542,
    settlement: "Vaszar",
    countyId: 18,
  },
  {
    zip: 8245,
    settlement: "Vászoly",
    countyId: 18,
  },
  {
    zip: 9748,
    settlement: "Vát",
    countyId: 17,
  },
  {
    zip: 3431,
    settlement: "Vatta",
    countyId: 4,
  },
  {
    zip: 7370,
    settlement: "Vázsnok",
    countyId: 2,
  },
  {
    zip: 3265,
    settlement: "Vécs",
    countyId: 9,
  },
  {
    zip: 2220,
    settlement: "Vecsés",
    countyId: 13,
  },
  {
    zip: 5811,
    settlement: "Végegyháza",
    countyId: 3,
  },
  {
    zip: 7838,
    settlement: "Vejti",
    countyId: 2,
  },
  {
    zip: 7333,
    settlement: "Vékény",
    countyId: 2,
  },
  {
    zip: 4143,
    settlement: "Vekerd",
    countyId: 8,
  },
  {
    zip: 9726,
    settlement: "Velem",
    countyId: 17,
  },
  {
    zip: 9946,
    settlement: "Velemér",
    countyId: 17,
  },
  {
    zip: 2481,
    settlement: "Velence",
    countyId: 6,
  },
  {
    zip: 7951,
    settlement: "Velény",
    countyId: 2,
  },
  {
    zip: 7726,
    settlement: "Véménd",
    countyId: 2,
  },
  {
    zip: 9062,
    settlement: "Vének",
    countyId: 7,
  },
  {
    zip: 9751,
    settlement: "Vép",
    countyId: 17,
  },
  {
    zip: 2477,
    settlement: "Vereb",
    countyId: 6,
  },
  {
    zip: 2112,
    settlement: "Veresegyház",
    countyId: 13,
  },
  {
    zip: 2621,
    settlement: "Verõce",
    countyId: 13,
  },
  {
    zip: 3351,
    settlement: "Verpelét",
    countyId: 9,
  },
  {
    zip: 2174,
    settlement: "Verseg",
    countyId: 13,
  },
  {
    zip: 7752,
    settlement: "Versend",
    countyId: 2,
  },
  {
    zip: 8089,
    settlement: "Vértesacsa",
    countyId: 6,
  },
  {
    zip: 8085,
    settlement: "Vértesboglár",
    countyId: 6,
  },
  {
    zip: 2859,
    settlement: "Vérteskethely",
    countyId: 11,
  },
  {
    zip: 2823,
    settlement: "Vértessomló",
    countyId: 11,
  },
  {
    zip: 2837,
    settlement: "Vértesszõlõs",
    countyId: 11,
  },
  {
    zip: 2833,
    settlement: "Vértestolna",
    countyId: 11,
  },
  {
    zip: 8721,
    settlement: "Vése",
    countyId: 14,
  },
  {
    zip: 9352,
    settlement: "Veszkény",
    countyId: 7,
  },
  {
    zip: 8200,
    settlement: "Veszprém",
    countyId: 18,
  },
  {
    zip: 8411,
    settlement: "Veszprém",
    countyId: 18,
  },
  {
    zip: 8412,
    settlement: "Veszprém",
    countyId: 18,
  },
  {
    zip: 8248,
    settlement: "Veszprémfajsz",
    countyId: 18,
  },
  {
    zip: 8475,
    settlement: "Veszprémgalsa",
    countyId: 18,
  },
  {
    zip: 8438,
    settlement: "Veszprémvarsány",
    countyId: 7,
  },
  {
    zip: 5530,
    settlement: "Vésztõ",
    countyId: 3,
  },
  {
    zip: 5093,
    settlement: "Vezseny",
    countyId: 10,
  },
  {
    zip: 8484,
    settlement: "Vid",
    countyId: 18,
  },
  {
    zip: 8294,
    settlement: "Vigántpetend",
    countyId: 18,
  },
  {
    zip: 7773,
    settlement: "Villány",
    countyId: 2,
  },
  {
    zip: 7772,
    settlement: "Villánykövesd",
    countyId: 2,
  },
  {
    zip: 3891,
    settlement: "Vilmány",
    countyId: 4,
  },
  {
    zip: 8194,
    settlement: "Vilonya",
    countyId: 18,
  },
  {
    zip: 3991,
    settlement: "Vilyvitány",
    countyId: 4,
  },
  {
    zip: 9535,
    settlement: "Vinár",
    countyId: 18,
  },
  {
    zip: 8354,
    settlement: "Vindornyafok",
    countyId: 19,
  },
  {
    zip: 8353,
    settlement: "Vindornyalak",
    countyId: 19,
  },
  {
    zip: 8355,
    settlement: "Vindornyaszõlõs",
    countyId: 19,
  },
  {
    zip: 2025,
    settlement: "Visegrád",
    countyId: 13,
  },
  {
    zip: 2026,
    settlement: "Visegrád",
    countyId: 13,
  },
  {
    zip: 7533,
    settlement: "Visnye",
    countyId: 14,
  },
  {
    zip: 3271,
    settlement: "Visonta",
    countyId: 9,
  },
  {
    zip: 3272,
    settlement: "Visonta",
    countyId: 9,
  },
  {
    zip: 3956,
    settlement: "Viss",
    countyId: 4,
  },
  {
    zip: 8681,
    settlement: "Visz",
    countyId: 14,
  },
  {
    zip: 9932,
    settlement: "Viszák",
    countyId: 17,
  },
  {
    zip: 3825,
    settlement: "Viszló",
    countyId: 4,
  },
  {
    zip: 3293,
    settlement: "Visznek",
    countyId: 9,
  },
  {
    zip: 9371,
    settlement: "Vitnyéd",
    countyId: 7,
  },
  {
    zip: 3128,
    settlement: "Vizslás",
    countyId: 12,
  },
  {
    zip: 3888,
    settlement: "Vizsoly",
    countyId: 4,
  },
  {
    zip: 7588,
    settlement: "Vízvár",
    countyId: 14,
  },
  {
    zip: 7768,
    settlement: "Vokány",
    countyId: 2,
  },
  {
    zip: 8314,
    settlement: "Vonyarcvashegy",
    countyId: 19,
  },
  {
    zip: 8931,
    settlement: "Vöckönd",
    countyId: 19,
  },
  {
    zip: 9462,
    settlement: "Völcsej",
    countyId: 7,
  },
  {
    zip: 9516,
    settlement: "Vönöck",
    countyId: 17,
  },
  {
    zip: 8711,
    settlement: "Vörs",
    countyId: 14,
  },
  {
    zip: 8291,
    settlement: "Vöröstó",
    countyId: 18,
  },
  {
    zip: 6794,
    settlement: "Üllés",
    countyId: 5,
  },
  {
    zip: 2225,
    settlement: "Üllõ",
    countyId: 13,
  },
  {
    zip: 2096,
    settlement: "Üröm",
    countyId: 13,
  },
  {
    zip: 3124,
    settlement: "Zabar",
    countyId: 12,
  },
  {
    zip: 7976,
    settlement: "Zádor",
    countyId: 2,
  },
  {
    zip: 3726,
    settlement: "Zádorfalva",
    countyId: 4,
  },
  {
    zip: 5051,
    settlement: "Zagyvarékas",
    countyId: 10,
  },
  {
    zip: 3031,
    settlement: "Zagyvaszántó",
    countyId: 9,
  },
  {
    zip: 4625,
    settlement: "Záhony",
    countyId: 15,
  },
  {
    zip: 8868,
    settlement: "Zajk",
    countyId: 19,
  },
  {
    zip: 4974,
    settlement: "Zajta",
    countyId: 15,
  },
  {
    zip: 8852,
    settlement: "Zákány",
    countyId: 14,
  },
  {
    zip: 8853,
    settlement: "Zákányfalu",
    countyId: 14,
  },
  {
    zip: 6787,
    settlement: "Zákányszék",
    countyId: 5,
  },
  {
    zip: 8660,
    settlement: "Zala",
    countyId: 14,
  },
  {
    zip: 8741,
    settlement: "Zalaapáti",
    countyId: 19,
  },
  {
    zip: 8971,
    settlement: "Zalabaksa",
    countyId: 19,
  },
  {
    zip: 8798,
    settlement: "Zalabér",
    countyId: 19,
  },
  {
    zip: 8992,
    settlement: "Zalaboldogfa",
    countyId: 19,
  },
  {
    zip: 8782,
    settlement: "Zalacsány",
    countyId: 19,
  },
  {
    zip: 8996,
    settlement: "Zalacséb",
    countyId: 19,
  },
  {
    zip: 8900,
    settlement: "Zalaegerszeg",
    countyId: 19,
  },
  {
    zip: 8344,
    settlement: "Zalaerdõd",
    countyId: 18,
  },
  {
    zip: 8349,
    settlement: "Zalagyömörõ",
    countyId: 18,
  },
  {
    zip: 8308,
    settlement: "Zalahaláp",
    countyId: 18,
  },
  {
    zip: 8997,
    settlement: "Zalaháshágy",
    countyId: 19,
  },
  {
    zip: 8761,
    settlement: "Zalaigrice",
    countyId: 19,
  },
  {
    zip: 8932,
    settlement: "Zalaistvánd",
    countyId: 19,
  },
  {
    zip: 8749,
    settlement: "Zalakaros",
    countyId: 19,
  },
  {
    zip: 8751,
    settlement: "Zalakomár",
    countyId: 19,
  },
  {
    zip: 8752,
    settlement: "Zalakomár",
    countyId: 19,
  },
  {
    zip: 8354,
    settlement: "Zalaköveskút",
    countyId: 19,
  },
  {
    zip: 8999,
    settlement: "Zalalövõ",
    countyId: 19,
  },
  {
    zip: 8348,
    settlement: "Zalameggyes",
    countyId: 18,
  },
  {
    zip: 8747,
    settlement: "Zalamerenye",
    countyId: 19,
  },
  {
    zip: 8756,
    settlement: "Zalasárszeg",
    countyId: 19,
  },
  {
    zip: 8743,
    settlement: "Zalaszabar",
    countyId: 19,
  },
  {
    zip: 8353,
    settlement: "Zalaszántó",
    countyId: 19,
  },
  {
    zip: 8476,
    settlement: "Zalaszegvár",
    countyId: 18,
  },
  {
    zip: 8772,
    settlement: "Zalaszentbalázs",
    countyId: 19,
  },
  {
    zip: 8785,
    settlement: "Zalaszentgrót",
    countyId: 19,
  },
  {
    zip: 8789,
    settlement: "Zalaszentgrót",
    countyId: 19,
  },
  {
    zip: 8790,
    settlement: "Zalaszentgrót",
    countyId: 19,
  },
  {
    zip: 8793,
    settlement: "Zalaszentgrót",
    countyId: 19,
  },
  {
    zip: 8795,
    settlement: "Zalaszentgrót",
    countyId: 19,
  },
  {
    zip: 8994,
    settlement: "Zalaszentgyörgy",
    countyId: 19,
  },
  {
    zip: 8921,
    settlement: "Zalaszentiván",
    countyId: 19,
  },
  {
    zip: 8827,
    settlement: "Zalaszentjakab",
    countyId: 19,
  },
  {
    zip: 8788,
    settlement: "Zalaszentlászló",
    countyId: 19,
  },
  {
    zip: 8921,
    settlement: "Zalaszentlõrinc",
    countyId: 19,
  },
  {
    zip: 8764,
    settlement: "Zalaszentmárton",
    countyId: 19,
  },
  {
    zip: 8936,
    settlement: "Zalaszentmihály",
    countyId: 19,
  },
  {
    zip: 8969,
    settlement: "Zalaszombatfa",
    countyId: 19,
  },
  {
    zip: 7839,
    settlement: "Zaláta",
    countyId: 2,
  },
  {
    zip: 8947,
    settlement: "Zalatárnok",
    countyId: 19,
  },
  {
    zip: 8822,
    settlement: "Zalaújlak",
    countyId: 19,
  },
  {
    zip: 8392,
    settlement: "Zalavár",
    countyId: 19,
  },
  {
    zip: 8792,
    settlement: "Zalavég",
    countyId: 19,
  },
  {
    zip: 3957,
    settlement: "Zalkod",
    countyId: 4,
  },
  {
    zip: 8621,
    settlement: "Zamárdi",
    countyId: 14,
  },
  {
    zip: 8081,
    settlement: "Zámoly",
    countyId: 6,
  },
  {
    zip: 8251,
    settlement: "Zánka",
    countyId: 18,
  },
  {
    zip: 3296,
    settlement: "Zaránk",
    countyId: 9,
  },
  {
    zip: 7182,
    settlement: "Závod",
    countyId: 16,
  },
  {
    zip: 8957,
    settlement: "Zebecke",
    countyId: 19,
  },
  {
    zip: 2627,
    settlement: "Zebegény",
    countyId: 13,
  },
  {
    zip: 3977,
    settlement: "Zemplénagárd",
    countyId: 4,
  },
  {
    zip: 7720,
    settlement: "Zengõvárkony",
    countyId: 2,
  },
  {
    zip: 8112,
    settlement: "Zichyújfalu",
    countyId: 6,
  },
  {
    zip: 8672,
    settlement: "Zics",
    countyId: 14,
  },
  {
    zip: 3794,
    settlement: "Ziliz",
    countyId: 4,
  },
  {
    zip: 7471,
    settlement: "Zimány",
    countyId: 14,
  },
  {
    zip: 8420,
    settlement: "Zirc",
    countyId: 18,
  },
  {
    zip: 7671,
    settlement: "Zók",
    countyId: 2,
  },
  {
    zip: 7173,
    settlement: "Zomba",
    countyId: 16,
  },
  {
    zip: 5537,
    settlement: "Zsadány",
    countyId: 3,
  },
  {
    zip: 4142,
    settlement: "Zsáka",
    countyId: 8,
  },
  {
    zip: 2072,
    settlement: "Zsámbék",
    countyId: 13,
  },
  {
    zip: 2116,
    settlement: "Zsámbok",
    countyId: 13,
  },
  {
    zip: 6411,
    settlement: "Zsana",
    countyId: 1,
  },
  {
    zip: 4961,
    settlement: "Zsarolyán",
    countyId: 15,
  },
  {
    zip: 9346,
    settlement: "Zsebeháza",
    countyId: 7,
  },
  {
    zip: 9635,
    settlement: "Zsédeny",
    countyId: 17,
  },
  {
    zip: 7477,
    settlement: "Zselickisfalud",
    countyId: 14,
  },
  {
    zip: 7400,
    settlement: "Zselickislak",
    countyId: 14,
  },
  {
    zip: 7474,
    settlement: "Zselicszentpál",
    countyId: 14,
  },
  {
    zip: 9766,
    settlement: "Zsennye",
    countyId: 17,
  },
  {
    zip: 9476,
    settlement: "Zsira",
    countyId: 7,
  },
  {
    zip: 6792,
    settlement: "Zsombó",
    countyId: 5,
  },
  {
    zip: 3897,
    settlement: "Zsujta",
    countyId: 4,
  },
  {
    zip: 4627,
    settlement: "Zsurk",
    countyId: 15,
  },
  {
    zip: 3723,
    settlement: "Zubogy",
    countyId: 4,
  },
  {
    zip: 8292,
    settlement: "Öcs",
    countyId: 18,
  },
  {
    zip: 5451,
    settlement: "Öcsöd",
    countyId: 10,
  },
  {
    zip: 4755,
    settlement: "Ököritófülpös",
    countyId: 15,
  },
  {
    zip: 9621,
    settlement: "Ölbõ",
    countyId: 17,
  },
  {
    zip: 4373,
    settlement: "Ömböly",
    countyId: 15,
  },
  {
    zip: 6311,
    settlement: "Öregcsertõ",
    countyId: 1,
  },
  {
    zip: 8697,
    settlement: "Öreglak",
    countyId: 14,
  },
  {
    zip: 2377,
    settlement: "Örkény",
    countyId: 13,
  },
  {
    zip: 5222,
    settlement: "Örményes",
    countyId: 10,
  },
  {
    zip: 5556,
    settlement: "Örménykút",
    countyId: 3,
  },
  {
    zip: 8242,
    settlement: "Örvényes",
    countyId: 18,
  },
  {
    zip: 8191,
    settlement: "Öskü",
    countyId: 18,
  },
  {
    zip: 9153,
    settlement: "Öttevény",
    countyId: 7,
  },
  {
    zip: 6784,
    settlement: "Öttömös",
    countyId: 5,
  },
  {
    zip: 7511,
    settlement: "Ötvöskónyi",
    countyId: 14,
  },
];

export const countries: ICountry[] = [
  {
    country_code: "HU",
    country: "COUNTRY_HU",
  },
  {
    country_code: "US",
    country: "COUNTRY_US",
  },
];

export const setupLocations = async () => {
  await countries.forEach(async (country: ICountry) => {
    const value = await Country.findOrCreate({
      where: {
        country_code: country.country_code,
        country: country.country,
      },
    });
    console.log(value);
  });

  await counties.forEach(async (county: ICounty) => {
    const value = await County.findOrCreate({
      where: {
        county: county.county,
        countryId: county.countryId,
      },
    });
    console.log(value);
  });

  await settlements.forEach(async (settlement: ISettlement) => {
    const value = await Settlement.findOrCreate({
      where: {
        zip: `${settlement.zip}`,
        settlement: settlement.settlement,
        countyId: settlement.countyId,
      },
    });
    console.log(value);
  });
};
