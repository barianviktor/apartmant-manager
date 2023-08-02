import { HttpStatusCodes } from "../utils/http-status-codes";
import { Request, Response } from "express";
import fs from "fs";
export const tests = async (req: Request, res: Response) => {
  //"1\t17376\t8127\t6\tFejér\tAba\r",
  interface fileRow {
    id: number;
    ksh: number;
    zip: number;
    megyeCode: number;
    megye: string;
    settlement: string;
  }
  interface Settlement {
    zip: number;
    countyId: number;
    settlement: string;
  }
  const file = await fs.readFileSync("location.txt", "utf-8");
  const rows = file.split("\n"); // Split the content into rows
  const megyek = [];
  const settlements: Settlement[] = [];

  for (let i = 1; i < rows.length; i++) {
    const [id, ksh, zip, megyeCode, megye, settlement] = rows[i].split("\t");
    if (!megyek.includes(megye)) {
      megyek.push(megye);
    }
    settlements.push({
      zip: parseInt(zip),
      settlement: settlement.replace("\r", ""),
      countyId: parseInt(megyeCode) == 0 ? 21 : parseInt(megyeCode),
    });
  }
  res.send(JSON.stringify(rows));
};
