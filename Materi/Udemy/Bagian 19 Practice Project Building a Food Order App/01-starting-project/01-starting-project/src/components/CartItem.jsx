import { rupiahFormatter, usdToIdr } from "../common/formating.js";
export default function CartItem({ id, name, quantity, price, onDecrease, onIncrease }) {
    return <li className="flex-container">
        <span>{name} - {quantity}</span>
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
        <span>{rupiahFormatter.format(usdToIdr(quantity * price))}</span>
    </li>
}