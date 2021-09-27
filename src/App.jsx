// NPM packages
import { useState } from "react";

export default function App() {
  // Local state
  const [toggleMessage, setToggleMessage] = useState(false);

  // Methods
  // Make this pure

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
    </div>
  );
}
