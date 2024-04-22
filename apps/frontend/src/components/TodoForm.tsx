import { useMutation } from "@apollo/client";
import { FormEvent, useCallback } from "react";
import { ADD_TODO, GET_TODOS } from "../queries/todo";

export const TodoForm = () => {
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [GET_TODOS],
  });

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const form = new FormData(e.target as HTMLFormElement);
      const text = form.get("text");

      if (!text) return;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);

          addTodo({
            variables: {
              text,
              lat: position.coords.latitude,
              long: position.coords.longitude,
            },
          });

          (e.target as HTMLFormElement).reset();
        });
      }
    },
    [addTodo]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="text" placeholder="Todo text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
