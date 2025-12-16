import LogoImage from '../assets/logo.jpg'
import Button from './UI/Button.JSX';
export default function Header() {
    return <header id="main-header">
        <div id='title'>
            <img src={LogoImage} alt="logo aplikasi" />
            <h1 id="title">Order Kuy</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>
    </header>;
}