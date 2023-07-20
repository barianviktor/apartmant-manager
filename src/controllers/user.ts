import { HttpStatusCodes } from "../utils/http-status-codes";
import { User } from "../models/user";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.status(HttpStatusCodes.OK).send(JSON.stringify(users));
};
