import React, { useContext } from "react";

import TodoListItemComponent from "./list-item.component";

import { TodoContext } from "../container/todo.context";
import { ITodoContext } from "../container/todo.types";

import { useHookList } from "./list.hook";

import { useTranslation } from "react-i18next";

const TodoList: React.FC = () => {
  const { t } = useTranslation(["common"]);
  const { state, dispatch } = useContext<ITodoContext>(TodoContext);
  const { todos, changeToggleTodo, deleteTodo } = useHookList(dispatch, state);

  const tooltipButton = t("delete");

  return (
    <>
      <div className="todo__list animated delay-01s fadeIn scrollbar">
        {todos.map((o: any, i: number) => (
          <TodoListItemComponent
            key={i}
            changeToggleTodo={changeToggleTodo}
            deleteTodo={deleteTodo}
            value={o.isDone}
            keyEle={`tdl-i-${i}`}
            taskName={o.taskName}
            tooltipButton={tooltipButton}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
