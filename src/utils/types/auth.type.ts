export type AuthDto = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken?: string;
  id: string;
};

export type AuthData = {
  accessToken: string;
  refreshToken: string;
  email: string;
  id: string;
};
