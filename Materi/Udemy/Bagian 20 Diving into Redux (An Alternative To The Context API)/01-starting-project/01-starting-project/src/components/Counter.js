import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { useRef } from 'react';
import { counterActions } from '../store/indexToolkit'
const Counter = () => {
  const { counter, inputMode } = useSelector(state => state.counter);
  // const inputMode = useSelector(state => state.inputMode);
  const dispatch = useDispatch();
  const input = useRef();


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {inputMode ?
        <div>
          <button onClick={() => dispatch(counterActions.decrement())}>-</button>
          <button onClick={() => dispatch(counterActions.increment())}>+</button>
        </div>
        :
        <div>
          <input ref={input} defaultValue={5} />
          <div>
            <button onClick={() => dispatch(counterActions.decrease(input.current.value))}>-</button>
            <button onClick={() => dispatch(counterActions.increase(input.current.value))}>+</button>
          </div>
        </div>}
      {/* <button onClick={() => setInputMode(prevMode => !prevMode)}>Toggle Counter</button> */}
      <button onClick={() => dispatch(counterActions.toggle())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
