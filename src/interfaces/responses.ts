export interface ResponseUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  roles: string[];
}

export interface ResponsePropertyType {
  id: number;
  string: string;
}
export interface ResponseRoomType {
  id: number;
  string: string;
}
export interface LoginResponse {
  user: ResponseUser;
  token: string;
  refresh_token: string;
}

export interface ResponseCountry {
  id: string;
  string: string;
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
  area: number | null;
}

export interface ResponseApartmentStatus {
  id: number;
  string: string;
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
  images: ResponseImage[];
}

export interface ResponseImage {
  id: number;
  path: string;
}

export interface ResponseString {
  id: number;
  key: string;
  string: string;
}

export interface ResponseLanguage {
  key: string;
  language: string;
  string: string;
}
