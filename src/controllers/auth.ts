import { Request, Response } from "express";
import { User } from "../models/user";
import { Token } from "../models/token";
import {
  comparePassword,
  createJWT,
  createRefreshToken,
  hashPassword,
  validButExpiredJWT,
  validateJWT,
} from "../utils/helpers";
import {
  LoginRequestBody,
  RefreshTokenRequestBody,
  RegisterRequestBody,
} from "../interfaces/requests";
import {
  ErrorEmailAlreadyExists,
  ErrorInternalServerError,
  ErrorNeedToReAuthenticate,
  ErrorUserNotFoundWithId,
  ErrorWrongEmailOrPassword,
} from "../utils/responses";
import { HttpStatusCodes } from "../utils/http-status-codes";
import { LoginResponse, ResponseUser } from "src/interfaces/responses";
import { Op } from "sequelize";

export const login = async (req: Request, res: Response) => {
  //const user = await User.create({ email: "hello", password: "password" });
  //res.send(`login, default user: ${JSON.stringify(user)}`);

  const data: LoginRequestBody = req.body;

  const user = await User.findOne({
    where: {
      email: data.email,
      validated: true,
    },
  });
  if (!user) {
    ErrorWrongEmailOrPassword(res);
    return;
  }

  const correctPassword = await comparePassword(
    data.password,
    user.getDataValue("password")
  );
  if (!correctPassword) {
    ErrorWrongEmailOrPassword(res);
    return;
  }

  let token = await Token.findOne({
    where: {
      userId: user.id,
    },
    order: [["id", "DESC"]],
  });

  const responseUser: ResponseUser = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
  let needToCreateToken = true;
  if (token) {
    const validToken = await validateJWT(token.token);
    if (validToken) {
      needToCreateToken = false;
    }
  }

  if (needToCreateToken) {
    const refreshToken = await createRefreshToken(responseUser);
    token = await Token.create({
      userId: user.getDataValue("id"),
      token: refreshToken,
    });
  }

  const validToken = await validateJWT(token.token);

  if (!validToken) {
    ErrorInternalServerError(res);
    return;
  }

  const jwt = await createJWT(responseUser);
  const response: LoginResponse = {
    user: responseUser,
    token: jwt,
    refresh_token: token.token.split(".")[2],
  };

  res.status(HttpStatusCodes.OK).send(JSON.stringify(response));
};

export const register = async (req: Request, res: Response) => {
  const data: RegisterRequestBody = req.body;
  const emailIsFree = await checkIfEmailIsFree(data.email);
  if (!emailIsFree) {
    ErrorEmailAlreadyExists(res);
    return;
  }

  data.password = await hashPassword(data.password);
  const user = await User.create({
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
  });
  res.status(HttpStatusCodes.CREATED).send();
};

export const validateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.findOne({
    where: {
      id: userId,
      validated: false,
    },
  });
  if (!user) {
    ErrorUserNotFoundWithId(res);
    return;
  }
  user.validated = true;
  user.save();
  res.status(HttpStatusCodes.OK).send();
};

const checkIfEmailIsFree = async (email: string) => {
  const userCount = await User.count({
    where: {
      email: email,
    },
  });
  return userCount > 0 ? false : true;
};

export const refreshToken = async (req: Request, res: Response) => {
  const data: RefreshTokenRequestBody = req.body;

  const validExpiredJWT = await validButExpiredJWT(data.token);
  if (!validExpiredJWT) {
    ErrorNeedToReAuthenticate(res);
    return;
  }
  const user = await User.findOne({
    where: {
      id: data.user_id,
    },
  });
  if (!user) {
    ErrorNeedToReAuthenticate(res);
    return;
  }
  const token = await Token.findOne({
    where: {
      token: {
        [Op.like]: `%${data.refresh_token}%`,
      },
    },
  });
  if (!token) {
    ErrorNeedToReAuthenticate(res);
    return;
  }
  const validRefreshToken = await validateJWT(token.token);
  if (!validRefreshToken) {
    ErrorNeedToReAuthenticate(res);
    return;
  }
  const responseUser: ResponseUser = JSON.parse(
    atob(token.token.split(".")[1])
  );
  const newResponseUser: ResponseUser = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
  if (responseUser.id != data.user_id || responseUser.id != user.id) {
    ErrorNeedToReAuthenticate(res);
    return;
  }
  const newJWT = await createJWT(newResponseUser);

  const response: LoginResponse = {
    token: newJWT,
    user: newResponseUser,
    refresh_token: data.refresh_token,
  };
  res.status(HttpStatusCodes.OK).send(JSON.stringify(response));
};
