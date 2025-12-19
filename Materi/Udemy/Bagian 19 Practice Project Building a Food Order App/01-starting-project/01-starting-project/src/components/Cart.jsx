import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext";
import { rupiahFormatter, usdToIdr } from "../common/formating";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";
export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    console.log(cartCtx.items);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0);
    console.log('essCtx.progress');
    console.log(userProgressCtx.progress);
    console.log(userProgressCtx.progress === 'cart');
    function handleCloseCart() {
        userProgressCtx.hideCart();
    }


    return <Modal className="cart" open={userProgressCtx.progress === 'cart'} onclose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(item => <CartItem key={item.id}{...item} onIncrease={() => cartCtx.incrementItem(item.id)} onDecrease={() => cartCtx.removeItem(item.id)} />)}
        </ul>
        <p className=" cart-total">{rupiahFormatter.format(usdToIdr(cartTotal))}</p>
        <p className="modal-actions">
            <Button textOnly onClick={() => userProgressCtx.hideCart()}>Close</Button>
            {
                cartCtx.items.length > 0 &&
                <Button onClick={() => userProgressCtx.showCheckOut()}>Go To Checkout</Button>
            }
        </p>

    </Modal>

}