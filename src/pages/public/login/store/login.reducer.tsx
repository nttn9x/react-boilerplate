import produce from "immer";

import { INPUT_CHANGE, ILoginState, ILoginAction } from "./login.type";

const initialState: ILoginState = { username: "", password: "" };

const reducer = produce(function(
  draft: ILoginState,
  { type, payload }: ILoginAction
) {
  switch (type) {
    case INPUT_CHANGE: {
      const { key, value } = payload;
      draft[key as keyof ILoginState] = value;
      break;
    }
  }
},
initialState);

export { reducer, initialState };
