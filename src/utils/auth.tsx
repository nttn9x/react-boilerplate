import { JWT_THE_KEY_OF_THE_LIFE } from "../constants/common";

export function setToken(data: { accesToken: string; refreshToken: string }) {
  // localStorage.setItem(JWT_THE_KEY_OF_THE_LIFE, JSON.stringify(data));
  alert(1);
  localStorage.setItem(
    JWT_THE_KEY_OF_THE_LIFE,
    JSON.stringify({
      accessToken: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ.-xN_h82PHVTCMA9vdoHrcZxH-x5mb11y1537t3rGzcM`
    })
  );
}

export function removeToken() {
  localStorage.removeItem(JWT_THE_KEY_OF_THE_LIFE);
}

export function getToken() {
  const token = localStorage.getItem(JWT_THE_KEY_OF_THE_LIFE);

  try {
    if (token) {
      return JSON.parse(token);
    }
  } catch (error) {
    console.log(error);
  }
}

function isTokenExpired(jwt: string) {
  try {
    if (jwt) {
      const user = JSON.parse(atob(jwt.split(".")[1]));
      const exp: Date = new Date(user.exp * 1000);
      if (exp.getTime() > Date.now()) {
        return false;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return true;
}

export function islogin(): boolean {
  try {
    const token = getToken();
    if (isTokenExpired(token.accesToken)) {
      if (isTokenExpired(token.refreshToken)) {
        return false;
      }
    }
  } catch (error) {}
  return false;
}

export function getUser(): any {
  let user = null;
  try {
    // TODO: not done
    const token = getToken();
    user = JSON.parse(atob(token.accessToken.split(".")[1]));
    user.firstString = user.userId.charAt(0);
  } catch (error) {
    console.log(error);
  }

  return user;
}

export const getAccessToken = () => {
  const token = getToken();

  if (token) {
    return token.accessToken;
  }

  return null;
};

export const getRefreshToken = () => {
  const token = getToken();

  if (token) {
    return token.refreshToken;
  }

  return null;
};
