import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";

const MealDetails = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const [data, error] = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                if (data) {
                    setMeal(data.meals[0]);
                } else {
                    console.error(error?.message || 'An error occurred');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMeal();
    }, [idMeal]);

    return (
        <div>
            {meal ? (
                <div>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h2>Ingredients</h2>
                    <ul>
                        {Object.keys(meal).filter(key => key.startsWith('strIngredient') && meal[key]).map((key, index) => (
                            <li key={index}>{meal[key]}</li>
                        ))}
                    </ul>
                    <h2>Instructions</h2>
                    <p>{meal.strInstructions}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MealDetails;