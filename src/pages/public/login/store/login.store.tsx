import { useReducer } from "react";

import { useGlobalStore } from "../../../../store";
import { actions } from "../../../../store/auth";

import { isAuthSelector } from "./login.selector";
import { reducer, initialState } from "./login.reducer";
import { inpuChange } from "./login.action";

export function useOwnRedux(history: any) {
  const { state, dispatch } = useGlobalStore();
  const [stateLocal, dispatchLocal] = useReducer(reducer, initialState);

  const { username, password } = stateLocal;
  const isAuth = isAuthSelector(state);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name: key, value } = e.target;
    dispatchLocal(inpuChange(key, value));
  }

  function handleLogin() {
    dispatch(actions.doLogin(username));

    history.push("/");
  }

  return [{ isAuth, username, password }, { handleLogin, handleChange }];
}
