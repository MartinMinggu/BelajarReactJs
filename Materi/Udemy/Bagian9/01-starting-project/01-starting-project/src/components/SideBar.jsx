import Button from "./Button";

export default function SideBar({ onStartAddProject, projects, onSelect, projectIdSelected }) {
    return (
        <aside
            className="
            w-1/3 px-8 py-16 
            bg-stone-900 
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent)]
            text-stone-50 md:w-72 
            rounded-r-xl"
        >
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300">
                Your Project
            </h2>

            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>

            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClasses = `
                        w-full text-left px-3 py-2 rounded-md my-1 
                        relative overflow-hidden
                        transition-all duration-300 ease-out
                        before:absolute before:left-0 before:top-0 
                        before:h-full before:w-[2px] before:rounded-sm
                        before:transition-all before:duration-300 before:ease-out
                    `;

                    if (project.id === projectIdSelected) {
                        cssClasses += `
                            bg-stone-700 text-white shadow-inner
                            before:bg-emerald-400 before:translate-x-0
                            scale-[1.02]
                        `;
                    } else {
                        cssClasses += `
                            bg-stone-800/50 text-stone-300 
                            hover:bg-stone-700/60 hover:text-stone-100
                            before:bg-stone-600/40 before:-translate-x-full
                            hover:before:translate-x-0
                            scale-[1]
                        `;
                    }

                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => onSelect(project.id)}
                                className={cssClasses}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
