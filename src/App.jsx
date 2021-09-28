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
    let data = [];

    if (rawData !== null) {
      data = JSON.parse(rawData);
    } else {
      data = [];
    }

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
      <ul>{TodoList}</ul>
    </div>
  );
}
