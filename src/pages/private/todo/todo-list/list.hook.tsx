import { ChangeEvent } from "react";
import { TOGGLE_TODO, REMOVE_TODO } from "../container/todo.types";

export function useHookList(dispatch: any, state: any) {
  function changeToggleTodo(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: TOGGLE_TODO,
      payload: { index: parseInt(e.target.id.split("-")[2], 10) }
    });
  }

  function deleteTodo(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: REMOVE_TODO,
      payload: { index: parseInt(e.target.id.split("-")[2], 10) }
    });
  }

  const { filter, todos } = state;

  return {
    filter,
    todos,
    changeToggleTodo,
    deleteTodo
  };
}
