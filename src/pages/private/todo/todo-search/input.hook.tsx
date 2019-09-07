import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";

import { ADD_TODO, TOGGLE_ALL } from "../container/todo.types";

export function useHookInput(dispatch: any) {
  const [textsearch, setTextsearch] = useState("");

  function handleToggleAll() {
    dispatch({ type: TOGGLE_ALL });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTextsearch(e.target.value);
  }

  function handleKeypress(e: KeyboardEvent) {
    //See notes about 'which' and 'key'
    if (e.which === 13 || e.keyCode === 13) {
      if (textsearch && textsearch.trim().length > 0) {
        dispatch({ type: ADD_TODO, payload: { taskName: textsearch } });
      }

      setTextsearch("");
    }
  }

  useEffect(() => {
    const node = document.getElementById("tda-ip");
    if (node) {
      node.focus();
    }
    return () => {};
  }, []);

  return {
    textsearch,
    onchange: handleChange,
    onKeyDown: handleKeypress,
    handleToggleAll
  };
}
