import { useState } from 'react'

function Counter() {

  const [counter, setCounter]  = useState(0)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter => counter + 1)   
    console.log(counter) // Why it's wrong?
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Counter Example</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default Counter