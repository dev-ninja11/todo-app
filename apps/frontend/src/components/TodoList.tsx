import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../queries/todo";

import type { Todo } from "@todo/types";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div className="todoList">
      {data.todos.map((todo: Todo) => (
        <TodoItem data={todo} />
      ))}
    </div>
  );
};
