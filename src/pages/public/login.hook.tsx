import { useMemo } from "react";
import { useGlobalStore } from "../../store";

import bindActions from "../../store/bindActions";
import { actions } from "../../store/auth";

/**
 * useLogin Custom Hook
 */
const useLogin: any = () => {
  const { dispatch } = useGlobalStore();

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

  return { actions: loginActions };
};

export default useLogin;
