import { INPUT_CHANGE, IInputChangeAction } from "./login.type";

export function inpuChange(key: string, value: string): IInputChangeAction {
  return {
    type: INPUT_CHANGE,
    payload: {
      key,
      value
    }
  };
}
