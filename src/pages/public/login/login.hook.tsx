import { useMemo } from "react";
import { useGlobalStore } from "../../../store";

import bindActions from "../../../store/bindActions";
import { actions } from "../../../store/auth";

import { isAuthSelector } from "./login.selector";

/**
 * useLogin Custom Hook
 */
const useLogin: any = () => {
  const { state, dispatch } = useGlobalStore();
  const isAuth = isAuthSelector(state);

  // List of Actions
  const { doLogin } = actions;

  // Bind Actions
  const loginActions = useMemo(
    () =>
      bindActions(
        {
          doLogin
        },
        dispatch
      ),
    [doLogin, dispatch]
  );

  return {
    actions: loginActions,
    storeProps: {
      isAuth
    }
  };
};

export default useLogin;
