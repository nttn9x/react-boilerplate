const KEY = "app_key_s";

export function islogin(): boolean {
  try {
    const jwt = localStorage.getItem(KEY);
    // TODO: not done
    if (jwt) {
      return true;
    }
  } catch (error) {}
  return false;
}

export function getUser(): any {
  try {
    return localStorage.getItem(KEY);
  } catch (error) {
    return null;
  }
}

export function setUser(user: any) {
  localStorage.setItem(KEY, JSON.stringify(user)); 
}

export function removeUser() {
  localStorage.removeItem(KEY);
}
