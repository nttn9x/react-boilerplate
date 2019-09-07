import { LOGIN, LOGOUT } from "./auth.types";

export function doLogin(text: string) {
  return {
    type: LOGIN
  };
}

export function doLogout() {
  return {
    type: LOGOUT
  };
}
