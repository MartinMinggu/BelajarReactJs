import { useState, useRef } from "react";
import { EXAMPLES } from "../data";
import TabButtons from "./TabButtons";
import Section from "./Section";
import Tabs from "./Tabs";


export function Examples() {
    const [content, setContent] = useState(null); // hooks event
    const codeRef = useRef(null);
    const salinKeClipboard = () => {
        const text = codeRef.current?.innerText;
        if (text) {
            navigator.clipboard.writeText(text);
            alert("Kode berhasil disalin! 📋");
        }
    };
    return <Section text="Examples" id="examples">
        <Tabs
            //menu ini akan jadi dinamis
            // ButtonContainer="div"
            button={
                Object.entries(EXAMPLES).map(([key, value]) => {
                    return <TabButtons key={key} isActive={content == key} handleClick={() => setContent(key)}>{value.title}</TabButtons>
                })
            }>
            <div id="tab-content">
                {content ? <>
                    <h1>{EXAMPLES[content].title}</h1>
                    <p>{EXAMPLES[content].description}</p>
                    <pre>
                        <div className="salin">
                            <button onClick={salinKeClipboard}>salin</button>
                        </div>
                        <code ref={codeRef}>{EXAMPLES[content].code}</code>
                    </pre>
                </> : <p>seleksi salah satu data!</p>}
            </div>
        </Tabs>
    </Section>;
}
