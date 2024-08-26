import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react"
import MealBySearch from "./MealBySearch";
import fetchData from "../utils/fetchData";
import RandomButton from "./RandomButton";


const Home = () => {
    const [randomMeals, setRandomMeals] = useState([]);
    useEffect(() => {
        const fetchRandomMeals = async () => {
            try {
                const ids = [52772, 52840, 52977, 53060, 53063];
                const requests = ids.map(id => fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`));
                const responses = await Promise.all(requests);
                setRandomMeals(responses.map(response => response[0]?.meals[0]).filter(meal => meal));
            } catch (error) {
                console.error(error);
            }
        };

        fetchRandomMeals();
    }, []);


    return (
    <div>
        <h1>PaTai's CookBook</h1>
        <MealBySearch />
        <RandomButton />
        <div className="random-meals">
            {randomMeals.map(meal => (
            <div key={meal.idMeal} className="meal-card">
                <Link to={`/recipe/${meal.idMeal}`}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                    </Link>
                </div>
            ))}
        </div>
     </div>
     );
}


export default Home;