import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome';  // use curly braces for named export

function App() {
  const [count, setCount] = useState(0)
  // console.log(count);
  function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  const user = {firstName: "Ali", lastName: "Ahmad"};

  const todos = [{id:1, text:"Gujranwala"}, {id:2, text:"Gujrat"}, {id:3, text:"Lahore"}]
  const todoltems = todos.map((todo) =>
    <li key={todo.id}>{todo.text}</li>
  );
    
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Welcome name="Waqas Tariq" />
        <h2>Hi {formatName(user)}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>{todoltems}</ul>
    </>
  )
}

export default App
