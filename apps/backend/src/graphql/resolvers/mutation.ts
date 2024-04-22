import { Todo } from "@todo/types";
import { data } from "../../data";

export const Mutation = {
  addTodo: (_: unknown, todo: Omit<Todo, "id" | "done">) => {
    const newTodo: Todo = {
      id: `${data.todos.length + 1}`,
      done: false,
      ...todo,
    };
    data.todos.push(newTodo);
    return newTodo;
  },
  toggleTodo: (_: unknown, { id }: { id: string }) => {
    const todo = data.todos.find((todo) => todo.id === id);
    if (!todo) throw new Error("item not found");
    todo.done = !todo.done;
    return todo;
  },
};
