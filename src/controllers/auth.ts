import { Request, Response } from "express";
import { User } from "../models/user";
import { comparePassword, hashPassword } from "../utils/helpers";
import { RegisterRequestBody } from "../interfaces/requests";
import { ErrorEmailAlreadyExists } from "../utils/responses";

export const login = async (req: Request, res: Response) => {
  //const user = await User.create({ email: "hello", password: "password" });
  //res.send(`login, default user: ${JSON.stringify(user)}`);
  const hash = await hashPassword("password");

  const samePassword = await comparePassword("password", hash);
  console.log(hash, samePassword);
  res.send(": ) ");
};

export const register = async (req: Request, res: Response) => {
  const credentials: RegisterRequestBody = req.body;
  const emailIsFree = await checkIfEmailIsFree(credentials.email);
  if (emailIsFree) {
    credentials.password = await hashPassword(credentials.password);
    const user = await User.create({
      email: credentials.email,
      password: credentials.password,
    });
    res.status(200).send(JSON.stringify(user));
  } else {
    ErrorEmailAlreadyExists(res);
  }
};

const checkIfEmailIsFree = async (email: string) => {
  const userCount = await User.count({
    where: {
      email: email,
    },
  });
  return userCount > 0 ? false : true;
};
