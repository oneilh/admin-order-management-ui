export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const getAccessToken = (): string => {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("access_token") ?? "";
};

export const setTokens = (access: string, refresh: string): void => {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};

export const removeTokens = (): void => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("access_token");
};