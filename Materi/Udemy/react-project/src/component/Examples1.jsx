import { useState, useRef } from "react";
import { EXAMPLES } from "../data";
import TabButtons from "./TabButtons";
import Section from "./Section";



export function Examples1() {
    const [content, setContent] = useState(0); // hooks event
    const codeRef = useRef(null);
    const salinKeClipboard = () => {
        const text = codeRef.current?.innerText;
        if (text) {
            navigator.clipboard.writeText(text);
            alert("Kode berhasil disalin! 📋");
        }
    };
    return <Section text="Examples" id="examples">
        <menu>
            {/* karena EXAMPLES berupa object, object diubah jadi array terlebih dahulu */}
            {Object.entries(EXAMPLES).map(([key, value]) => {
                return <TabButtons key={key} isActive={content == key} handleClick={() => setContent(key)}>{value.title}</TabButtons>
            })}
        </menu>
        <div id="tab-content">
            {content == 0 ? <p>seleksi salah satu data!</p> : <>
                <h1>{EXAMPLES[content].title}</h1>
                <p>{EXAMPLES[content].description}</p>
                <pre>
                    <div className="salin">
                        <button onClick={salinKeClipboard}>salin</button>
                    </div>
                    <code ref={codeRef}>{EXAMPLES[content].code}</code>
                </pre>
            </>}
        </div>
    </Section>;
}
