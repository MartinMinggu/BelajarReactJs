import { useContext } from "react";
import { currencyFormater, rupiahFormatter, usdToIdr } from "../common/formating";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./Input";
import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import { apiBackend, post } from "../common/commonApi";
export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((total, item) => total + (item.quantity * item.price), 0)

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        const order = {
            customer: customerData,
            items: cartCtx.items
        }
        console.log('data : ', order);

        post(`${apiBackend}/orders`,
            {
                order
            }
            , () => console.log('success Add data'), () => console.log('fail Add data'))

    }
    function handleCloseCheckout() {
        userProgressCtx.hideCheckOut();
    }
    console.log('userProgressCtx.progress === checkout: ', userProgressCtx.progress === 'checkout');
    console.log('userProgressCtx.progress : ', userProgressCtx.progress);

    return <Modal open={userProgressCtx.progress === 'checkout'} onclose={handleCloseCheckout} >
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount : {rupiahFormatter.format(usdToIdr(cartTotal))}</p>
            <Input id="name" title="Full Name" required type="text" />
            <Input id="email" required title="Email Address " type="email" />
            <Input id="street" title="Street" required type="text" />
            <div className="control-row">
                <Input id="postal-code" title="Postal Kode" type="text" required />
                <Input id="city" title="City" type="text" required />
            </div>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCheckout}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </ Modal>;
}