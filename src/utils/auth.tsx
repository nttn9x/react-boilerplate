export function validAuth() {
  const token = localStorage.getItem("app_key_s");

  if (token) {
    return true;
  }

  return false;
}
