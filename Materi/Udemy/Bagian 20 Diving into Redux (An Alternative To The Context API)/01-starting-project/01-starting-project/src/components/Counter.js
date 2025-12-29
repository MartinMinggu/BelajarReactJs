import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { useRef, useState } from 'react';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const inputMode = useSelector(state => state.inputMode);
  // const [inputMode, setInputMode] = useState(false);
  const dispatch = useDispatch();
  const input = useRef();


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {inputMode ?
        <div>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
        :
        <div>
          <input ref={input} defaultValue={5} />
          <div>
            <button onClick={() => dispatch({ type: 'decrease', amount: input.current.value })}>-</button>
            <button onClick={() => dispatch({ type: 'increase', amount: input.current.value })}>+</button>
          </div>
        </div>}
      {/* <button onClick={() => setInputMode(prevMode => !prevMode)}>Toggle Counter</button> */}
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
