import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./CoreConcept";
import Section from "./Section";



export default function CoreConcepts() {
    return <Section text="Core Concepts" id="core-concepts">
        <ul>
            {CORE_CONCEPTS.map((element) => {
                return <CoreConcept {...element} key={element.title} />;
            })}
        </ul>
    </Section>;
}
