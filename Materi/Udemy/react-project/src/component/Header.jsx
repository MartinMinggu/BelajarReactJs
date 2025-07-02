import reactImage from '.././assets/react-core-concepts.png' // harus mengimport image
export function Header() {
    const reactDescription = ['Fundamental', 'Core', 'Crucial'];
    function genRandomInt(max) {
        return Math.floor(Math.random() * (reactDescription.length + 1));
    }
    return <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>{reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>;
}
