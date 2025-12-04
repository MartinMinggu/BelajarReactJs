// cara baru di react 19
// export default function ResultModal({ ref, result, targetTime }) {
//     return <dialog className="result-modal" ref={ref}>
//         <h2>Your {result} </h2>
//         <p>The Target time was <strong>{targetTime} seconds</strong></p>
//         <p>You stoped the timer with <strong>x Seconds left.</strong></p>
//         <form method="dialog"> <button>Close</button></form>
//     </dialog>;
// }

import { forwardRef, useImperativeHandle, useRef } from "react";


// cara lama sebelum react 19
const ResultModal = forwardRef(function ResultModal({ result, targetTime, timeRemaining }, ref) {
    const dialog = useRef();
    const userLost = timeRemaining <= 0;
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    return <dialog className="result-modal" ref={dialog}>
        <h2>Your {userLost ? "Lost" : "Win"} </h2>
        <p>The Target time was <strong>{targetTime} seconds</strong></p>
        <p>You stoped the timer with <strong>x Seconds left.</strong></p>
        <form method="dialog"> <button>Close</button></form>
    </dialog>;
});
export default ResultModal;