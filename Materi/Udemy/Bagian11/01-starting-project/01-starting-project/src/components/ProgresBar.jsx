import { useEffect, useState } from "react";

export default function ProgresBar({ time }) {
  const [timeRemaining, setTimeRemaining] = useState(time);
  useEffect(() => {
    const timmer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timmer);
          return 0;
        }
        return prev - 10;
      })
    }, 10);
    return () => clearInterval(timmer);

  }, [time]);
  return (
    <progress max={time} value={timeRemaining}></progress>
  );
}
