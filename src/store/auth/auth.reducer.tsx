import produce from "immer";

import { LOGIN, LOGOUT, IAuthState, IAuthAction } from "./auth.type";
import { validAuth } from "../../utils/auth";

export const initialState: IAuthState = {
  isAuth: validAuth()
};

const reducer = produce(function reducer(draft, action: IAuthAction) {
  switch (action.type) {
    case LOGIN: {
      draft.isAuth = true;
      break;
    }
    case LOGOUT: {
      draft.isAuth = false;
      break;
    }
  }
}, initialState);

export default reducer;
