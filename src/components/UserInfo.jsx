import React from 'react'

// Object destructuring of the props
const UserInfo = ({user}) => {
    // Object descturing of user
    const {id, name, age} = user;
  return (
    <div>
        <p>User Id:  {id}</p>
        <p>Name: {name } </p>
        <p>Age: {age } </p>
    </div>
  )
}

export default UserInfo