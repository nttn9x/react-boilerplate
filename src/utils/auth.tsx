const KEY = "app_key_s";

export function getUser() {
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
