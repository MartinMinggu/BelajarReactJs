export default function Input({ text, id, value, onChangeValue }) {

    function handleChange(event) {
        const val = event.target.value;

        // Hanya izinkan angka kosong atau angka valid
        // if (val === "" || /^\d+$/.test(val)) {
        onChangeValue(id, val);
        // }
    }
    return <div className="input-field">
        <label htmlFor={id}>{text}</label>
        <input
            // inputMode="numeric" pattern="[0-9]*"
            id={id} placeholder={`masukan ${text}`} onChange={handleChange} value={value} />
    </div>
}