import { useGlobalStore } from "../../../../store";
import { actions } from "../../../../store/auth";

import { isAuthSelector } from "./login.selector";

export function useOwnRedux(history: any) {
  const { state, dispatch } = useGlobalStore();

  const isAuth = isAuthSelector(state);

  function handleLogin(username: string) {
    dispatch(actions.doLogin(username));

    history.push("/");
  }

  return {
    isAuth,
    handleLogin
  };
}
