import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome';  // use curly braces for named export
import About from './screens/About';
import Register from './screens/Register';
import UsersList from './screens/UsersList';

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

  function incrementCount()
  {
    console.log("adding from another count")
    setCount((count) => count+1);
  }

  function sayHello()
  {
    console.log("Hello from ReactJS");
  }

  const diceRandomChange = () => {
    const randomChange = Math.floor(Math.random() * 7) /*- 10*/; 
    // React automatically provides the current state value to the updater function you pass to it
    // React internally manages count's value and passes it as the argument to prevCount.
    // Here, prevCount represents the most recent value of count i.e., the State variable.
    setCount((prevCount) => prevCount + randomChange);
    
  };

  const showList = false;
  const isLoggedIn = false;
    
  return (
    <>
      <div>
        <h3>{isLoggedIn ? 'Welcome back!' : 'Please sign in'}</h3>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Welcome name="Waqas Tariq" city="Gujrat" />
        <h2>Hi {formatName(user)}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p><button onClick={() => {
          console.log("This is arrow function call")
        }}>onClick Event</button>
        </p>

        <p><button onClick={diceRandomChange}>
          Dice Counter 🎲 {count}</button>
        </p>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" style={{ color: 'blue', fontFamily:'cursive'}}>
        Click on the Vite and React logos to learn more
      </p>
      {showList && <ul>{todoltems}</ul>}

      <About/>

      <Register/>

      <UsersList />

      
    </>
  )
}

export default App
