import React from "react";

interface TodoListItemProps {
  tooltipButton: string;
  keyEle: string;
  value: boolean;
  taskName: string;
  deleteTodo: any;
  changeToggleTodo: any;
}

function TodoListItemComponent({
  taskName,
  deleteTodo,
  changeToggleTodo,
  tooltipButton,
  keyEle,
  value
}: TodoListItemProps) {
  return (
    <div className="todo__list__item">
      <div className="item__container">
        <div
          className={
            value
              ? `item__container_label item__container_label--done`
              : `item__container_label`
          }
        >
          {taskName}
        </div>
        <button id={keyEle} onClick={deleteTodo} title={tooltipButton} />
      </div>
    </div>
  );
}

function areEqual(
  prevProps: TodoListItemProps,
  nextProps: TodoListItemProps
): boolean {
  return (
    prevProps.tooltipButton === nextProps.tooltipButton &&
    prevProps.value === nextProps.value &&
    prevProps.taskName === nextProps.taskName
  );
}

const TodoListItem = React.memo(TodoListItemComponent, areEqual);

export default TodoListItem;
