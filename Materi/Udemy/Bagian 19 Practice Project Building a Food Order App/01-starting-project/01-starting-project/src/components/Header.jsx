import { useContext } from 'react';
// import LogoImage from '../assets/logo.jpg'
import LogoImage from '../assets/logo3-removebg-preview.png'
import CartContext from '../store/CartContext';
import Button from './UI/Button.JSX';
import UserProgressContext from '../store/UserProgressContext';
export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalNumber = cartCtx.items.reduce((total, item) => total + item.quantity, 0)
    return <header id="main-header">
        <div id='title'>
            <img src={LogoImage} alt="logo aplikasi" />
            <h1 id="title">Order Kuy</h1>
        </div>
        <nav>
            <Button textOnly onClick={() => userProgressCtx.showCart()}>Cart ({totalNumber})</Button>
        </nav>
    </header>;
}