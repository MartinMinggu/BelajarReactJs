import logo from '../assets/logo.png';
import clases from './Header.module.css';
export default function Header() {
    return (
        <header>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
            <p style={{ color: 'red', borderColor: 'red', backgroundColor: 'blue' }}>contoh inline style</p>
        </header>
    );
}
