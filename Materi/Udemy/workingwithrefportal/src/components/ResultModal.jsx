import { forwardRef, useImperativeHandle, useRef } from "react"

export default forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef();
    // menerima bukaModal()
    useImperativeHandle(ref, () => {
        return {
            bukaModal() {
                dialog.current.showModal();
            }

        }
    })
    return <dialog ref={dialog} className="result-modal"  >
        <h2>You {result}</h2>
        <p>The target time  was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>{targetTime} seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
});
