import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback
} from "react";

import { getUser } from "../utils/auth";
import { setUser, removeUser } from "../utils/auth";

interface IAuthContext {
  isAuth: boolean;
  authData: any;
  onLogin: any;
  onLogout: any;
}

export const AuthDataContext = createContext<IAuthContext>({
  isAuth: false,
  authData: null,
  onLogin: null,
  onLogout: null
});

const AuthDataProvider = (props: any) => {
  const [authData, setAuthData] = useState(null);

  /* The first time the component is rendered, it tries to
   * fetch the auth data from a source, like a cookie or
   * the localStorage.
   */
  useEffect(() => {
    const user: any = getUser();
    if (user) {
      setAuthData(user);
    }
  }, []);

  const isAuth: boolean = useMemo(() => (authData ? true : false), [authData]);
  const onLogin = useCallback((user: any) => {
    setAuthData(user);
    setUser(user);
  }, []);

  const onLogout = useCallback(() => {
    setAuthData(null);
    removeUser();
  }, []);

  return (
    <AuthDataContext.Provider
      value={{ isAuth, authData, onLogin, onLogout }}
      {...props}
    />
  );
};

export const useAuthDataContext = () =>
  useContext<IAuthContext>(AuthDataContext);

export default AuthDataProvider;
