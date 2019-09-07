import { createContext } from "react";
import { ITodoContext } from "./todo.types";

export const TodoContext = createContext<ITodoContext>({});
  