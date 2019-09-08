import { Dispatch } from "react";

import { IAuthState } from "./auth/auth.types";

export interface IState {
  auth: IAuthState;
}

export interface INameToValueMap {
  [key: string]: any;
}

export interface IContextProps<S, T> {
  state: S;
  dispatch: Dispatch<T>;
}
