import { HttpStatusCodes } from "../utils/http-status-codes";
import { User } from "../models/user";
import { Request, Response } from "express";
import { ResponseUser } from "src/interfaces/responses";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  const responseUsers:ResponseUser[] = []
  for (let i = 0; i < users.length; i++) {
    const responseUser = await users[i].getResponseData()
    responseUsers.push(responseUser)
    
  }
  res.status(HttpStatusCodes.OK).send(responseUsers);
};
