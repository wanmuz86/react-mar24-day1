import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <h2>Welcome to my first React Project</h2>
      <div>
        <label htmlFor="name">Enter name</label>
        <input type="text" id="name" />
      </div>
      <Footer />
    </>
  )
}

export default App
