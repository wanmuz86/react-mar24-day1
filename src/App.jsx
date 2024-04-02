import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import { useState, useEffect, useRef } from 'react';
import './App.css'
import UserInfo from './components/UserInfo';
import UserList from './components/UserList';
import AddForm from './components/AddForm';
function App() {

  const userInfo = {
    id: 1,
    name: "John Doe",
    age: 30
  }

  const [users,setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 25
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 30
    },
    {
      id: 3,
      name: "Bob Smith",
      age: 17
    }
  ]); 

  // It will create reference to users..
  // The value will not be changed despite the change of users state..
  const userRefs = useRef(users);

  const getNextUserId = () => {
    if (users.length === 0){
      // If no user, id is 1
      return 1;
    } {
      // If not the id of the last user + 1 
      return users[users.length-1].id + 1;
    }
  }

  const handleAddUser = (newUser) => {
    // I will add userid on the newUser Object (spread operator {})
    // Adding the new object (newUser) inside users array with spread operator []
  
    setUsers([...users,{ ...newUser, id:getNextUserId()}])
  }

  const handlePassDeleted = (user) => {
    // Filter the users , by removing user with the same id passed from
    // the UserInfo component
    const updateUsers = users.filter(val=> val.id !== user.id);
    setUsers(updateUsers);
  }

  // This will be only called once during the initialization
  // You can use to do initialization of your component
  // eg: API call, retrieving data from local storage 
  useEffect(()=> {

    console.log("First load of the component");

  },[]);

  // In this case, this will be called
  // Whenever there is a change on users state
  useEffect(()=>{

    console.log("change in users");
 
    console.log("Referenced value",userRefs.current); // store the referenced value
    console.log("Current value", users)

  },[users])

  return (  
    <>
      <Header />
      <h1>Hello World</h1>
      <h2>Welcome to my first React Project</h2>
      <div>
        <label htmlFor="name">Enter name</label>
        <input type="text" id="name" />
      </div>
      <hr />
      {/* Passsing the props initialValue  */}
      {/* When we pass the prop, use {} / interpolation */}
      <Counter initialValue={10} />
      <Counter initialValue={5} />
      <Counter initialValue={2} />
      <hr/>
      <AddForm onAddUser={handleAddUser}/>
      <hr />
      <UserList users={users} onPassDeleted={handlePassDeleted}/>
      <hr />
      <h2>User Information</h2>
      <UserInfo user={userInfo} />
      <Footer />
    </>
  )
}

export default App
