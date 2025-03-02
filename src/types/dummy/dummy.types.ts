type TDummyResponse = {
  users: TUser[];
  total: number;
  skip: number;
  limit: number;
};

type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "male" | "female";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: THair;
  ip: string;
  address: TAddress;
  macAddress: string;
  university: string;
  bank: TBank;
  company: TCompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: TCrypto;
  role: string;
};

type THair = {
  color: string;
  type: string;
};

type TAddress = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: TCoordinates;
  country: string;
};

type TCoordinates = {
  lat: number;
  lng: number;
};

type TBank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type TCompany = {
  department: string;
  name: string;
  title: string;
  address: TAddress2;
};

type TAddress2 = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: TCoordinates2;
  country: string;
};

type TCoordinates2 = {
  lat: number;
  lng: number;
};

type TCrypto = {
  coin: string;
  wallet: string;
  network: string;
};

type TTransformDataResponse<T> = Record<string, TransformData<T>>;

type TransformData<T> = {
  male: number;
  female: number;
  ageRange: T;
  hair: TransformHair;
  addressUser: Record<string, string>;
};

type TransformHair = Record<string, number>;

export type { TDummyResponse, TTransformDataResponse };
