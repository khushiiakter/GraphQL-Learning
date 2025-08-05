'use client'
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../lib/queries";

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading......</p>;
  if (error) return <p>Error loading todos: {error.message}</p>;
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Todo List</h1>
      <ul className="space-y-2">
        {data.todos.data.map((todo: any) => (
          <li
            key={todo.id}
            className="p-3 border rounded shadow-sm bg-white flex justify-between"
          >
            <span>{todo.title}</span>
            <span
              className={`text-sm ${
                todo.completed ? "text-green-500" : "text-red-500"
              }`}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
