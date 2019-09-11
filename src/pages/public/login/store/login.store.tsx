import { useAuthDataContext } from "../../../../context/auth.context";

export function useOwnRedux(history: any) {
  const { isAuth, onLogin } = useAuthDataContext();

  function handleLogin(username: string) {
    onLogin({ username });

    history.push("/");
  }

  return {
    isAuth,
    handleLogin
  };
}
