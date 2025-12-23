import { useContext } from "react";
import { currencyFormater, rupiahFormatter, usdToIdr } from "../common/formating";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./Input";
import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import { apiBackend, post } from "../common/commonApi";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};
export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const { data, isLoading: isSending, error, sendRequest } = useHttp(`${apiBackend}/orders`, requestConfig,)


    const cartTotal = cartCtx.items.reduce((total, item) => total + (item.quantity * item.price), 0)

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        const dataSend = JSON.stringify({
            order: {
                customer: customerData,
                items: cartCtx.items
            }
        })
        sendRequest(dataSend);

        // post(`${apiBackend}/orders`,
        //     {
        //         order
        //     }
        //     , () => console.log('success Add data'), () => console.log('fail Add data'))

    }
    function handleCloseCheckout() {
        userProgressCtx.hideCheckOut();
    }
    function handleFinish() {
        userProgressCtx.hideCheckOut();
        cartCtx.clearAll();
    }


    let userAction = <>
        <Button textOnly onClick={handleCloseCheckout}>Close</Button>
        <Button>Submit Order</Button></>
    if (isSending) {
        userAction = <span>data sedang disimpan...</span>
    }
    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onclose={handleCloseCheckout}>
            <h2>Berhasil!</h2>
            <p>Your order was submitted successfully. </p>
            <p>kami akan mengiirmkan email dalama beberapa menit</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>
    }

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
            {error && <Error title="gagal melakukan submit data..." message={error} />}
            <p className="modal-actions">{userAction}
            </p>
        </form>
    </ Modal>;
}