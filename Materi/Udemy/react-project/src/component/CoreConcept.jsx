export function CoreConcept({ image, title, description }) {
    return <li>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p> {description}</p>
    </li>
}

