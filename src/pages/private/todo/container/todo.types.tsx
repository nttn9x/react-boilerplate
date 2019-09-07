import { Dispatch } from "react";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SET_FILTER = "SET_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_ALL = "TOGGLE_ALL";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};


export interface ITodoProps {
  taskName: string;
  isDone: boolean;
}

export interface ITodoState {
  filter: string;
  todos: Array<ITodoProps>;
}

// -------------------------------------------

export interface ITodoAction {
  type:
    | typeof TOGGLE_ALL
    | typeof ADD_TODO
    | typeof TOGGLE_TODO
    | typeof REMOVE_TODO
    | typeof SET_FILTER;
  payload: {
    index: number;
    filter: string;
    taskName: string;
    isDone: boolean;
  };
}

// -------------------------------------------

export interface ITodoContext {
  state?: any;
  dispatch?: Dispatch<ITodoAction>;
}
