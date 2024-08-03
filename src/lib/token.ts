import Cookies from "js-cookie";

export function saveToken(data: any) {
  if (!data) return null;
  const tokenBase64 = btoa(data);
  Cookies.set("token", tokenBase64, {
    expires: 12 / 24,
  });
}

export function getToken() {
  const tokenBase64 = Cookies.get("token");
  if (!tokenBase64) return null;
  const token = atob(tokenBase64);
  return token;
}

export function removeToken() {
  Cookies.remove("token");
}
