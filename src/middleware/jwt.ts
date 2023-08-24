import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HttpStatusCodes } from "../utils/http-status-codes";
import { UserRequest } from "src/interfaces/requests";

export const jwtMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).send();
  }
  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(HttpStatusCodes.UNAUTHORIZED).send();
  }
  const token = tokenParts[1];

  try {
    const decoded = await jwt.verify(token, process.env.SECRET);
    req.user_id = decoded.id;
    next();
  } catch (ex) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).send();
  }
};
