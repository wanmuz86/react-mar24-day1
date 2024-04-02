import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

import './App.css'
import UserInfo from './components/UserInfo';

function App() {

  const userInfo = {
    id:1,
    name:"John Doe",
    age:30
  }

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
      <Counter initialValue={10}/>
      <Counter initialValue={5}/>
      <Counter initialValue={2}/>
      <hr />
      <h2>User Information</h2>
      <UserInfo user={userInfo}/>
      <Footer />
    </>
  )
}

export default App
