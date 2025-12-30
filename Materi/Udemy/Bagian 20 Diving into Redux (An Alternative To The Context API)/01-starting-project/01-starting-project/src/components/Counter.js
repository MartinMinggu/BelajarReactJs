import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { useRef } from 'react';
import { counterActions } from '../store/counterStore'
const Counter = () => {
  const { counter, inputMode } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const input = useRef();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        {inputMode && <input ref={input} defaultValue={5} />}
        <div>
          <button onClick={
            () =>
              inputMode ?
                dispatch(counterActions.decrease(input.current.value))
                : dispatch(counterActions.decrement())
          }>-</button>
          <button onClick={
            () =>
              inputMode ?
                dispatch(counterActions.increase(input.current.value))
                : dispatch(counterActions.increment())
          }>+</button>
        </div>
      </div>
      <button onClick={() => dispatch(counterActions.toggle())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
