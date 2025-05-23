import { useState, type ChangeEvent } from "react";

function App() {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  function change(e: ChangeEvent<HTMLInputElement>): void {
    setData(e.target.value);
  }

  function AddTodo(): void {
    const task = data;
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setData("");
  }

  return (
    <div className="min-h-screen p-4 bg-gray-900">
      <div className="max-w-md mx-auto p-4 rounded bg-gray-800 shadow">
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-200">Todo List</h1>
        </div>

        <div className="flex mb-3">
          <input
            className="flex-1 p-2 border rounded-l bg-gray-700 border-gray-600 text-gray-200"
            placeholder="Enter the Todo"
            value={data}
            onChange={change}
            
          />
          <button
            className="px-3 bg-gray-600 hover:bg-gray-500 text-gray-200"
            onClick={AddTodo}
          >
            Add
          </button>
        </div>

        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              className="p-3 my-2 rounded bg-gray-700 text-gray-200"
            >
              {todo}
            </div>
          ))}
          {todos.length === 0 && (
            <div className="text-center p-3 text-gray-400">No todos yet</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
