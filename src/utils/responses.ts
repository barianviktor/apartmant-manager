import { Response } from "express";
import { HttpStatusCodes } from "./http-status-codes";

enum ResponseCodes {
  EMAIL_ALREADY_EXISTS = 501,
  USER_NOT_FOUND_WITH_ID = 502,
  USER_ALREADY_VALIDATED = 503,
  WRONG_EMAIL_OR_PASSWORD = 504,
  INTERNAL_SERVER_ERROR = 505,
  ERROR_NEED_TO_RE_AUTHENTICATE = 505,
}
enum ResponseMessages {
  EMAIL_ALREADY_EXISTS = "ERROR_EMAIL_ALREADY_EXISTS",
  USER_NOT_FOUND_WITH_ID = "ERROR_USER_NOT_FOUND",
  USER_ALREADY_VALIDATED = "ERROR_USER_ALREADY_VALIDATED",
  WRONG_EMAIL_OR_PASSWORD = "WRONG_EMAIL_OR_PASSWORD",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  ERROR_NEED_TO_RE_AUTHENTICATE = "ERROR_NEED_TO_RE_AUTHENTICATE",
}
interface ErrorResponse {
  code: ResponseCodes;
  message: ResponseMessages;
}

export const ErrorEmailAlreadyExists = (res: Response): void => {
  const error: ErrorResponse = {
    code: ResponseCodes.EMAIL_ALREADY_EXISTS,
    message: ResponseMessages.EMAIL_ALREADY_EXISTS,
  };
  res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
};

export const ErrorWrongEmailOrPassword = (res: Response): void => {
  const error: ErrorResponse = {
    code: ResponseCodes.WRONG_EMAIL_OR_PASSWORD,
    message: ResponseMessages.WRONG_EMAIL_OR_PASSWORD,
  };
  res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
};

export const ErrorUserNotFoundWithId = (res: Response): void => {
  const error: ErrorResponse = {
    code: ResponseCodes.USER_NOT_FOUND_WITH_ID,
    message: ResponseMessages.USER_NOT_FOUND_WITH_ID,
  };
  res.status(HttpStatusCodes.NOT_FOUND).send(JSON.stringify(error));
};
export const ErrorUserAlreadyValidated = (res: Response): void => {
  const error: ErrorResponse = {
    code: ResponseCodes.USER_ALREADY_VALIDATED,
    message: ResponseMessages.USER_ALREADY_VALIDATED,
  };
  res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
};
export const ErrorInternalServerError = (res: Response): void => {
  const error: ErrorResponse = {
    code: ResponseCodes.INTERNAL_SERVER_ERROR,
    message: ResponseMessages.INTERNAL_SERVER_ERROR,
  };
  res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
};

export const ErrorNeedToReAuthenticate = (res: Response): void => {
  const error: ErrorResponse = {
    code: ResponseCodes.ERROR_NEED_TO_RE_AUTHENTICATE,
    message: ResponseMessages.ERROR_NEED_TO_RE_AUTHENTICATE,
  };
  res.status(HttpStatusCodes.UNAUTHORIZED).send(JSON.stringify(error));
};
