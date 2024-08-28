import React, { useState } from "react";
import { Link } from "react-router-dom";


const RandomButton = () => {
    const [meal, setMeal] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const fetchRandomMeal = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await response.json();
            const randomMeal = data.meals[0];
            setMeal(randomMeal);
            setShowDetails(false); // Reset details view on fetching a new meal
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchRandomMeal();
    }

    const toggleDetails = () => {
        setShowDetails(prevState => !prevState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="random-form">
                <button type="submit" className="random-button">
                    Random Meal!
                </button>
            </form>

            {meal && (
                <div className="selected-meal">
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />

                    <button className="view-details-button" onClick={toggleDetails}>
                        {showDetails ? 'Hide Details' : 'View More Details'}
                    </button>

                    {showDetails && (
                        <div className="meal-details">
                            <h2>Ingredients:</h2>
                            <ul>
                                {Object.keys(meal)
                                    .filter(key => key.startsWith('strIngredient') && meal[key])
                                    .map((key, index) => (
                                        <li key={index}>{meal[key]}</li>
                                    ))}
                            </ul>
                            <h2>Instructions:</h2>
                            <p>{meal.strInstructions}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default RandomButton;

