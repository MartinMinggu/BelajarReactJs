import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// let timer;
export default function TimerChallenge({ title, targetTime }) {


    /** 
     * Logic nya
     * 1. jika user terlambat menekan stop dari waktu yang ditentukan maka dia akan kalah
     * 2. jika user menekan stop antara waktu target dan 0 maka dianggap menang
     * 3. data yang ditampilkan adalah
     *  - dia menang atau kalah
     *  - waktu yang tersisa
     *  - scorenya berapa 
    */
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeReamining => prevTimeReamining - 10)
        }, 10);
    }
    function handleStop() {
        clearInterval(timer.current);
    }
    return <>
        <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
        <section className="challenge">
            <h2>{title}</h2>
            {/* {timerExpired && <p>You lost</p>} */}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is Running...' : 'Timer inactive'}
            </p>
        </section></>
}