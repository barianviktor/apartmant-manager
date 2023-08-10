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
