import React, { useContext } from "react";

import { useHookInput } from "./input.hook";
import { TodoContext } from "../container/todo.context";
import { useTranslation } from "react-i18next";
import icon from "./down-chevron.png";

interface TodoInputProps {
  onClick?: any;
}

const TodoInput: React.FC<TodoInputProps> = () => {
  const { dispatch } = useContext(TodoContext);
  const { textsearch, onchange, onKeyDown, handleToggleAll } = useHookInput(
    dispatch
  );
  const { t } = useTranslation(["common", "todo"]);

  return (
    <div className="todo__input">
      <img src={icon} alt="add all" onClick={handleToggleAll} />
      <input
        id="tda-ip"
        type="text"
        value={textsearch}
        onChange={onchange}
        placeholder={t("todo:input_placeholder")}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default TodoInput;
