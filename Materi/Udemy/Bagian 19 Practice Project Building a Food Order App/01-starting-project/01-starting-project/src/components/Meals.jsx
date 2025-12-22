import { useEffect, useState } from "react"
import { get, apiBackend } from "../common/commonApi"
import MealItem from "./Mealitem";
import MealItemSkeleton from "./MealItemSkeleton";

export default function Meals() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        get(`${apiBackend}/meals`, (data) => {
            setMeals(data)
            setIsLoading(false);
        }, (data) => {
            setIsLoading(false);
        })
    }, [])

    return <ul id="meals">
        {isLoading &&
            Array.from({ length: 4 }).map((_, i) => (
                <MealItemSkeleton key={i} />
            ))
        }

        {!isLoading &&
            meals.map((meal) => {
                return <MealItem key={meal.id} meal={meal} />
            })
        }
    </ul>

}