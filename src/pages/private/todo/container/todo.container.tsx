import React from "react";

import "../style/todo.scss";

import InputComponent from "../todo-search/input.component";
import ListComponent from "../todo-list/list.component";

import { TodoContext } from "./todo.context";
import { useOwnRedux } from "./todo.store";

const Todo: React.FC = () => {
  const { state, dispatch } = useOwnRedux();

  return (
    <div className="todo">
      <TodoContext.Provider value={{ state, dispatch }}>
        <article>
          <InputComponent />
          <ListComponent />
        </article>
      </TodoContext.Provider>

      <a className="author" href="##">
        nttn9x@gmail.com
      </a>
    </div>
  );
};

export default Todo;
