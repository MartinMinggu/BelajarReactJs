import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
        console.log("Timeout Run");

        setTimeout(onTimeOut, timeout);
    }, [timeout, onTimeOut])
    useEffect(() => {
        setInterval(() => {
            console.log("interval Run");
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }, [])
    return <progress id="question-time" max={timeout} value={remainingTime} />
}