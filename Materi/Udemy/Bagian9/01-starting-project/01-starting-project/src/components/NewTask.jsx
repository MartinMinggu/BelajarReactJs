import { useState } from "react";

export default function NewTasks({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');
    function handleChange(event) {
        console.log(event.target.value)
        setEnteredTask(event.target.value)
    }
    function handleSaveTask() {
        if (enteredTask.trim() == '') {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return (
        <div className="flex items-center gap-3 mb-3">
            <input
                type="text"
                className="w-64 px-3 py-2 rounded-lg bg-stone-100 border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 shadow-sm transition"
                placeholder="New task..."
                onChange={handleChange}
                value={enteredTask}
            />

            <button
                className="px-4 py-2 rounded-lg bg-stone-700 text-white font-medium hover:bg-stone-800 active:scale-95 transition-transform shadow"
                onClick={handleSaveTask}
            >
                Add Task
            </button>
        </div>

    );
}