import produce from "immer";

import { LOGIN, LOGOUT, IAuthState, IAuthAction } from "./auth.types";

export const initialState: IAuthState = {
  isAuth: false
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
