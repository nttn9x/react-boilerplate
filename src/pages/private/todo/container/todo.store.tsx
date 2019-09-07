import { useReducer, Dispatch } from "react";

import produce from "immer";

import { ADD_TODO, ITodoState, ITodoAction } from "./todo.types";

const initialState: ITodoState = { filter: "", todos: [] };

const reducer = produce(function(draft, { type, payload }) {
  switch (type) {
    case ADD_TODO: {
      draft.todos.push({ taskName: payload.taskName, isDone: false });
    }
  }
}, initialState);

export function useOwnRedux(): {
  state: ITodoState;
  dispatch: Dispatch<ITodoAction>;
} {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch
  };
}
