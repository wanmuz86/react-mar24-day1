import React, {useState} from 'react' // 1) Import {useState}

// I need a variable to store a value changeable by the button pressed
// State
const Counter = ({initialValue}) => {

    // Declare the state/variable
// Declare a variable called counter
// The initial value of the counter is 0
// If there is a change of the counter , use setCounter method (setter)
// counter = counter +1 // Cannot use in React

    const [counter,setCounter] = useState(initialValue);

    // Create a function increment, it will set the value 
    // of counter to counter+1
    const increment = () => setCounter(counter+1);

  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
        <h3>Current count: {counter}</h3>
    </div>
  )
}

export default Counter