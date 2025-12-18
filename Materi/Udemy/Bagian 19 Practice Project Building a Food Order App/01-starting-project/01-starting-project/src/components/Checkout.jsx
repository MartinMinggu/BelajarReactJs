import { useContext } from "react";
import { currencyFormater, rupiahFormatter, usdToIdr } from "../common/formating";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./Input";
import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";
export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((total, item) => total + (item.quantity * item.price), 0)
    return <Modal open={userProgressCtx.progress === 'checkout'} onclose={() => userProgressCtx.hideCart()} >
        <form action="">
            <h2>Checkout</h2>
            <p>Total Amount : {rupiahFormatter.format(usdToIdr(cartTotal))}</p>
            <Input id="full-name" title="Full Name" type="text" />
            <Input id="email-address" title="Email Address " type="email" />
            <Input id="street" title="Street " type="text" />
            <div className="control-row">
                <Input id="postalCode" title="Postal Kode" type="text" />
                <Input id="city" title="City" type="text" />
                <Input id="city" title="City" type="text" />
            </div>
            <p className="modal-actions">
                <Button textOnly onClick={() => userProgressCtx.hideCheckOut()}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </ Modal>;
}