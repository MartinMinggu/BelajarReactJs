export default function Input({ text, id, value, onChangeValue }) {

    function handleChange(event) {
        onChangeValue(id, event.target.value);
    }
    return <div className="input-field">
        <label htmlFor={id}>{text}</label>
        <input type="number" id={id} placeholder={`masukan ${text}`} onChange={handleChange} value={value} />
    </div>
}