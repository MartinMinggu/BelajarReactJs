export default function Input({ labelText, invalid, ...props }) {
  let labelClasses = `block mb-2 text-xs font-bold tracking-wide uppercase ${invalid ? 'text-red-500' : 'text-stone-300'}`;
  return (
    <p>
      <label className={labelClasses}>{labelText}</label>
      <input className={`w-full px-3 py-4 leading-tight rounded shadow focus:outline-none focus:shadow-none border focus:border-transparent ${invalid ? 'bg-red-200 text-red-500 border-red-500' : 'bg-gray-300 text-gray-700 border-transparent'} `} {...props} />
    </p>
  );
}