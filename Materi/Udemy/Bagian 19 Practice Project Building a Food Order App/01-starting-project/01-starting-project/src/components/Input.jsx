export default function Input({ id, title, prop }) {
    return <p className="control">
        <label htmlFor={id}>{title}</label>
        <input id={id} {...prop} name={id} />
    </p>
} 