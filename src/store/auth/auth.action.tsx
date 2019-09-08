import { LOGIN, LOGOUT } from "./auth.type";

export function doLogin(username: string) {
  localStorage.setItem("app_key_s", username);

  return {
    type: LOGIN
  };
}

export function doLogout() {
  localStorage.removeItem("app_key_s");

  return {
    type: LOGOUT
  };
}
