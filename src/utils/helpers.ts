import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ResponseUser } from "../interfaces/responses";
enum JWTErrorMessages {
  EXPIRED = "jwt expired",
  INVALID = "invalid signature",
}
export const hashPassword = async (plainPassword: string): Promise<string> => {
  const hash = await bcrypt.hash(plainPassword, 10);
  return hash;
};
export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};

export const createJWT = async (
  payload: ResponseUser,
  expiresIn = 300
): Promise<string> => {
  return jwt.sign(payload, process.env.SECRET, { expiresIn });
};

export const createRefreshToken = async (
  payload: ResponseUser,
  expiresIn = 24000
): Promise<string> => {
  return await createJWT(payload, expiresIn);
};

export const validateJWT = async (token: string): Promise<boolean> => {
  try {
    await jwt.verify(token, process.env.SECRET);
    return true;
  } catch (error) {
    return false;
  }
};

export const validButExpiredJWT = async (token: string): Promise<boolean> => {
  try {
    await jwt.verify(token, process.env.SECRET);
    return true;
  } catch (error) {
    if (error.message == JWTErrorMessages.EXPIRED) {
      return true;
    }
    return false;
  }
};
