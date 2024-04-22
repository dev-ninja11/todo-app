import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div className="mainContainer">
      <h1>Todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};
