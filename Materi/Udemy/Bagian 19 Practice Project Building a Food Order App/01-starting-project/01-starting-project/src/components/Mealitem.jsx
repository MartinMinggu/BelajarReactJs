import { apiBackend } from "../common/commonApi";
import { currencyFormater, rupiahFormatter, usdToIdr } from "../common/formating";
import Button from "./UI/Button.JSX";

export default function MealItem({ meal }) {
    return <li className="meal-item">
        {/* {
    "id": "m20",
    "name": "Falafel Wrap",
    "price": "8.99",
    "description": "Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a tahini sauce.",
    "image": "images/falafel-wrap.jpg"
} */}
        <article>
            <img src={apiBackend + "/" + meal.image} alt="sss" />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{rupiahFormatter.format(usdToIdr(meal.price))}</p>
                <h3 className="meal-item-description">{meal.description}</h3>
            </div>
            <p className="meal-item-actions">
                <Button>Add to Chart</Button>
            </p>
        </article>
    </li>

}