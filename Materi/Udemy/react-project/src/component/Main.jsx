import { useState, useRef } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import TabButtons from "./TabButtons";
import CoreConcepts from "./CoreConcepts";
import { Examples } from "./Examples";



export function Main() {
    const [content, setContent] = useState(0); // hooks event
    const codeRef = useRef(null);
    const salinKeClipboard = () => {
        const text = codeRef.current?.innerText;
        if (text) {
            navigator.clipboard.writeText(text);
            alert("Kode berhasil disalin! 📋");
        }
    };
    return <main>
        <CoreConcepts />
        <Examples />
    </main>;
}
