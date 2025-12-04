import { useRef, useState } from "react";
import ResultModal from "./ResultModals";

export default function ({ title, targetTime }) {
    const [timeReamining, setTimeRemaining] = useState(targetTime * 1000);
    const timer = useRef();
    const dialog = useRef();

    const timerIsActive = timeReamining > 0 && timeReamining < targetTime * 1000;
    if (timeReamining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeReaining => prevTimeReaining - 10);
        }, 10);
    }
    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }
    return <>
        <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeReamining} />
        <section className="challenge">
            <h2>{title}</h2>
            {/* {timerExpired && <p>You lost!</p>} */}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop ' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running..' : 'Timer innactive'}
            </p>
        </section>
    </>
}