import { useReducer, useState } from "react";

function counterReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  else if (action.type === 'DECREMENT') {
    return state - 1;
  }
  else if (action.type === 'RESET') {
    return 0;
  }
  return state;
}
function App() {
  // const [value, setValue] = useState(0);
  const [value, action] = useReducer(counterReducer, 0);
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={() => action({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => action({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => action({ type: 'RESET' })}>Reset</button>
      </p>
      <p id="counter">{value}</p>
    </div>
  );
}

// Cara waras dan tanpa useReducer
// function App() {
//   const [value, setValue] = useState(0);
//   return (
//     <div id="app">
//       <h1>The (Final?) Counter</h1>
//       <p id="actions">
//         <button onClick={() => setValue(prev => prev + 1)}>Increment</button>
//         <button onClick={() => setValue(prev => prev - 1)}>Decrement</button>
//         <button onClick={() => setValue(0)}>Reset</button>
//       </p>
//       <p id="counter">{value}</p>
//     </div>
//   );
// }

export default App
