export default function Button({ mode = 'filled', Icon, children, ...props }) {
    if (Icon) mode = "icon";
    return <button className={`button ${mode}-button`} {...props}>
        {Icon && <span className='button-icon'><Icon /> </span>}
        <span>{children}</span>
    </button>
}