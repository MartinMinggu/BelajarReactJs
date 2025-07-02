export default function Main() {
    return <main id="user-input">
        <div className="input-group">
            <label htmlFor="">Initial Investement</label>
            <input type="number" />
        </div>
        <div className="input-group">
            <label htmlFor="">Anual Investment</label>
            <input type="number" />
        </div>
        <div className="input-group">
            <label htmlFor="">Expected Return</label>
            <input type="number" />
        </div>
        <div className="input-group">
            <label htmlFor="">Duration</label>
            <input type="number" />
        </div>
    </main>
}