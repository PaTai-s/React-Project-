import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import fetchData from "../utils/fetchData";

const SearchResults = () => {
    const { query } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const [data, error] = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
                if (data) {
                    setMeals(data.meals);
                } else {
                    console.error(error?.message || 'An error occurred');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMeals();
    }, [query]);

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <div className="meal-results">
                {meals && meals.length > 0 ? (
                    meals.map(meal => (
                        <div key={meal.idMeal} className="meal-card">
                            <Link to={`/recipe/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <h3>{meal.strMeal}</h3>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No meals found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;