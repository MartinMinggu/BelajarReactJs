/**
 * 
 * @param {*} label 
 * @param {*} typeInput: 1 : Input, 2 Text Area
 * @returns 
 */
export default function Button({ children, ...props }) {
    return <button className="px-4 py-2 text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-slate-100" {...props}> {children}</button>

}
