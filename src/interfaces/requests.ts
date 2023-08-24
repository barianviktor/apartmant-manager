import { Request } from "express";

export interface RegisterRequestBody {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface LoginRequestBody {
  username: string;
  password: string;
}

export interface RefreshTokenRequestBody {
  token: string;
  refresh_token: string;
  user_id: number;
}

export interface UserRequest extends Request {
  user_id: string;
}
export interface MulterRequest extends UserRequest {
  file: any;
}
