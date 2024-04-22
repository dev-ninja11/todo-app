import { useMutation } from "@apollo/client";
import { Todo } from "@todo/types";
import { GET_TODOS, TOGGLE_TODO } from "../queries/todo";
import { useCallback } from "react";

export interface TodoItemProps {
  data: Todo;
}

export const TodoItem = ({ data }: TodoItemProps) => {
  const [toggleTodo] = useMutation(TOGGLE_TODO, {
    refetchQueries: [GET_TODOS],
  });

  const handleTodoItemClick = useCallback(
    (id: string) => () => {
      toggleTodo({
        variables: {
          id,
        },
      });
    },
    [toggleTodo]
  );

  const item = (
    <div className="todoItem" onClick={handleTodoItemClick(data.id)}>
      <div>{data.text}</div>
      <div>
        Location ({data.lat}, {data.long})
      </div>
    </div>
  );

  if (data.done) return <s>{item}</s>;

  return item;
};
