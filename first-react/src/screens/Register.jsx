import React from 'react'

function Register() {
    function handleRegister(event)
    {
        event.preventDefault();
        console.log("Registeration in progress....")
    }
    let degree = "BS";
  return (
        degree === "BS"?
    (
        <form>
        <input type='email' placeholder='Enter Email' />
        <button onClick={handleRegister}>Submit</button>
        </form>
    )
    : (<h2>Not allowed in this program</h2>)    
  )
}

export default Register