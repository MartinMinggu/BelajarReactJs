import { useEffect, useState } from "react"
import { get, apiBackend } from "../common/commonApi"
import MealItem from "./Mealitem";
import MealItemSkeleton from "./MealItemSkeleton";
import useHttp from '../hooks/useHttp.jsx'
import Error from "./Error.jsx";
// import useHttp from "../hooks/useHttp.jsx";
const requestConfig = {};

export default function Meals() {
    const { data: meals, isLoading, error } = useHttp(`${apiBackend}/meals`, requestConfig, []);

    if (error) { return <Error title="gagal mengambil data meals" message={error} /> }


    return <ul id="meals">
        {isLoading && Array.from({ length: 4 }).map((_, i) => <MealItemSkeleton key={i} />
        )}

        {!isLoading &&
            meals.map((meal) => {
                return <MealItem key={meal.id} meal={meal} />
            })
        }
    </ul>

}