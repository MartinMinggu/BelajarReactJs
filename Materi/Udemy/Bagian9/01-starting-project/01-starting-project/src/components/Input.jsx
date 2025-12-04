import { forwardRef } from "react";

/**
 * 
 * @param {*} label 
 * @param {*} typeInput: 1 : Input, 2 Text Area
 * @returns 
 */
export default forwardRef(function Input({ id, label, typeInput = 1, ...props }, ref) {
    const className = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return <p className="flex flex-col fap-1 my-4">
        <label htmlFor={id} className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {typeInput == 1 ? <input ref={ref} id={id} {...props} className={className} /> : <textarea ref={ref} id={id} {...props} className={className} />}
    </p>;
});
