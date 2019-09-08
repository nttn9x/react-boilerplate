export const INPUT_CHANGE = "INPUT_CHANGE";

export interface ILoginState {
  username: string;
  password: string;
}

export interface IInputChangeAction {
  type: typeof INPUT_CHANGE;
  payload: {
    key: string;
    value: string;
  };
}

export type ILoginAction = IInputChangeAction;
