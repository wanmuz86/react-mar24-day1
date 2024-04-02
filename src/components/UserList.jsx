import React from 'react'
import UserInfo from './UserInfo'

const UserList = ({ users, onPassDeleted }) => {

    const handleDelete = (user) => {
        onPassDeleted(user);
    }
    
    return (
        <div>

            <h2>User List</h2>
            {
                // for each users, i will create an li, creating the UserInfo component
                // put the id as key
                users.map(val =>
                    <li key={val.id}>
                        {/* We render/reuse UserInfo component  as the prop stucture is the same*/}
                        <UserInfo user={val} onDeleteUser={handleDelete}/>
                    </li>
                )
            }
        </div>
    )
}

export default UserList