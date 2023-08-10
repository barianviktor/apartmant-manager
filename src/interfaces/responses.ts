export interface ResponseUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  roles:string[]
}

export interface ResponsePropertyType {
  id: number;
  type: string;
  typeLabel: string;
}
export interface ResponseRoomType {
  id: number;
  type: string;
  typeLabel: string;
}
export interface LoginResponse {
  user: ResponseUser;
  token: string;
  refresh_token: string;
}

export interface ResponseCountry {
  id: number;
  countryCode: string;
  country: string;
  countryLabel: string;
}
export interface ResponseCounty {
  id: number;
  county: string;
  country: ResponseCountry;
}

export interface ResponseSettlement {
  id: number;
  zip: string;
  settlement: string;
  county: ResponseCounty;
}

export interface ResponseRoom {
  id: number;
  type: ResponseRoomType;
}

export interface ResponseApartmentStatus {
  id: number;
  status: string;
  statusLabel: string;
}

export interface ResponseApartment {
  id: number;
  name: string;
  settlement: ResponseSettlement;
  address: string;
  area: number;
  type: ResponsePropertyType;
  status: ResponseApartmentStatus;
  rooms: ResponseRoom[];
}

