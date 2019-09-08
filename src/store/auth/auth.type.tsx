import { Dispatch } from "react";

export const LOGIN = "[AUTH] LOGIN";
export const LOGOUT = "[AUTH] LOGOUT";

export interface IAuthState {
  isAuth: boolean;
}

export interface IAuthAction {
  type: typeof LOGIN | typeof LOGOUT;
}

export interface IAuthContext {
  state: any;
  dispatch: Dispatch<IAuthAction>;
}
