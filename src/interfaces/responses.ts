export interface ResponseUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}

export interface LoginResponse {
  user: ResponseUser;
  token: string;
  refresh_token: string;
}
