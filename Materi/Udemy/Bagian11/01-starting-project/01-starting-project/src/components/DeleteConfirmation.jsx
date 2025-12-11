import { useEffect } from "react";
import ProgresBar from "./ProgresBar";

const TIME = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("Timer Set")
    const timmer = setTimeout(() => { onConfirm(); }, TIME);
    return () => {
      console.log("timmer stop");
      clearTimeout(timmer);
    }
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgresBar time={TIME} />
    </div>
  );
}
