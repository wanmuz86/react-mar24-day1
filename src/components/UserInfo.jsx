import React from 'react'

// Object destructuring of the props
const UserInfo = ({ user, onDeleteUser }) => {
    // Object descturing of user
    const { id, name, age } = user;
    return (
        <div>
            <p>User Id:  {id}</p>
            <p>Name: {name} </p>
            <p>Age: {age} </p>

            {
                age < 18 ?
                    <p>Minor: Please obtain parental consent!</p>
                    :
                    <p>Adult: Welcome to our platform</p>
            }
            <button onClick={()=> onDeleteUser(user)}>Delete</button>
        </div>
    )
}

export default UserInfo