export interface RegisterRequestBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface RefreshTokenRequestBody {
  token: string;
  refresh_token: string;
  user_id: number;
}
