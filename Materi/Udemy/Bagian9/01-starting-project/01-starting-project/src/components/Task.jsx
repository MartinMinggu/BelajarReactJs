import NewTasks from "./NewTask";

export default function Task({ tasks, onAdd, onDelete }) {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTasks onAdd={onAdd} />
        {!tasks.length && (
            <p className="text-stone-800 mb-4">project ini tidak punya tasks</p>
        )}
        {tasks.length > 0 && (
            <ul className="bg-sky-100 p-3 rounded-md shadow-sm">
                {tasks.map((task) => {
                    return (
                        <li
                            key={task.id}
                            className="flex justify-between items-center border-b border-sky-200 py-2 text-sky-900">
                            <span>{task.text}</span>
                            <button
                                className=" text-white px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 active:scale-95 transition shadow-sm"
                                onClick={() => onDelete(task.id)}
                            >delete</button>
                        </li>
                    );
                })}
            </ul>
        )}

    </section>;
}
