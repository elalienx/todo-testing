// NPM packages
import { useEffect, useState } from "react";

// Project files
import TodoItem from "./components/TodoItem";

export default function App() {
  // Local state
  const [toggleMessage, setToggleMessage] = useState(false);
  const [todo, setTodo] = useState([]);

  // Methods
  useEffect(() => {
    const rawData = localStorage.getItem("todo");

    const backup = [];

    let data = JSON.parse(rawData) ?? backup;
    setTodo(data);
  }, [setTodo]);

  // Components
  const TodoList = todo.map((item) => <TodoItem key={item.id} item={item} />);

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <button onClick={() => setToggleMessage(!toggleMessage)}>
        Show message
      </button>
      {toggleMessage && <p>Hello world</p>}

      {/* Rendered items */}
      {todo.length > 0 && <ul>{TodoList}</ul>}
      {todo.length === 0 && <p>Sorry no items found</p>}
    </div>
  );
}
