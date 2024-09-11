import { TodoInfo } from '../TodoInfo';

type TodoListProps = {
  todos: {
    id: number;
    title: string;
    user: {
      name: string;
      email: string;
    };
    completed: boolean;
  }[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
