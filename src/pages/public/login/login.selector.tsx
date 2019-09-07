import { createSelector } from "reselect";
import { IState } from "../../../store/types";
import { IAuthState } from "../../../store/auth/auth.types";

const authSelector = (state: IState) => state.auth;

export const isAuthSelector = createSelector(
  authSelector,
  (auth: IAuthState) => auth.isAuth
);
