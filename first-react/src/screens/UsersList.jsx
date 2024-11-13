import React from 'react'
import Title from '../components/Title';

function UsersList() {
    const users = [
        {
          id: 1,
          name: "Ali Ahmed",
          city: "Lahore"
        },
        {
          id: 2,
          name: "Sara Khan",
          city: "Karachi"
        },
        {
          id: 3,
          name: "John Smith",
          city: "Islamabad"
        },
        {
          id: 4,
          name: "Ayesha Malik",
          city: "Rawalpindi"
        },
        {
          id: 5,
          name: "Umer Farooq",
          city: "Faisalabad"
        }
      ];
      
  return (
    <div>
        <Title text="Users List" />
        <ul>{            
        users.map( (user) => { // or ({id, name, city}) // Q) Create a separate component
            return  (
            <li key={user.id}><Title text={user.name} />  {user.city}</li>
            )
        })    
        }</ul>
    </div>
  )
}

export default UsersList