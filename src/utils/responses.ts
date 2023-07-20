import { Response } from "express";

enum ResponseCodes {
  EMAIL_ALREADY_EXISTS = 501,
}

interface ErrorResponse {
  code: ResponseCodes;
  message: string;
}

export const ErrorEmailAlreadyExists = (res: Response): void => {
  const error: ErrorResponse = {
    code: ResponseCodes.EMAIL_ALREADY_EXISTS,
    message: "ERROR_EMAIL_ALREADY_EXISTS",
  };
  res.status(500).send(JSON.stringify(error));
};
