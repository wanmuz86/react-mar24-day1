import React, { useState } from 'react'

const AddForm = ({onAddUser}) => {

    const [newUser, setNewUser] = useState({
        name: '',
        age: 0
    });

    // Whenever user type on the input..
    // It will update the name property of user (spread operator on object)
    // e refers to the input where the user type the information (name input)
    const handleNameChange = (e) => setNewUser({
        ...newUser,
        name: e.target.value
    })

    // e refers to the age input
    const handleAgeChange = (e) => setNewUser(
        { ...newUser, age: parseInt(e.target.value) })

    const handleSubmit = (e) => {
        // Override the normal/SSR form which is removing the data
        e.preventDefault();
        console.log(newUser)
        onAddUser(newUser);
        
        // Reset back the form to it's initial value
        setNewUser({
            name:'',
            age:0
        })
    }

    return (
        <div>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter name</label>
                <input type="text" name="name" id="name"
                    value={newUser.name} onChange={handleNameChange} />
                <label htmlFor='age'>Enter age</label>
                <input type="number" name="age" id="age"
                    value={newUser.age} onChange={handleAgeChange} />
                <button type="Submit">Add New User</button>
            </form>
        </div>
    )
}

export default AddForm