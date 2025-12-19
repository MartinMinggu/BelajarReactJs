import { useContext } from "react";
import { apiBackend } from "../common/commonApi";
import { currencyFormater, rupiahFormatter, usdToIdr } from "../common/formating";
import Button from "./UI/Button.JSX";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
    const cartCtx = useContext(CartContext);

    return <li className="meal-item">
        <article>
            <img src={apiBackend + "/" + meal.image} alt="sss" />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{rupiahFormatter.format(usdToIdr(meal.price))}</p>
                <h3 className="meal-item-description">{meal.description}</h3>
            </div>
            <p className="meal-item-actions">
                <Button onClick={() => cartCtx.addItem(meal)}>Add to Chart</Button>
            </p>
        </article>
    </li>

}