export default function ButtonText({ children, ...props }) {
  return (
    <button type="button"
      className={`text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200`}
      {...props}>
      {children}</button>
  );
}