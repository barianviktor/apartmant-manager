export interface ResponseUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginResponse {
  user: ResponseUser;
  token: string;
  refresh_token: string;
}
