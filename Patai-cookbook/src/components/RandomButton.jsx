import React, {useState} from "react";
import { Link } from "react-router-dom";

const RandomButton = () => {
    const [meal, setMeal] = useState(null);

    const fetchRandomMeal = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await  response.json();
            const randomMeal=data.meals[0];
            setMeal(randomMeal);
        }catch (error){
            console.error(error)
        }
    }
// idk we just need this 
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetchRandomMeal();
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <button type="submit">
                Random Meal!
            </button>
        </form>
        
        {meal && (
        <div className="selected-meal">
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
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
            {/* Using Link to navigate to the meal details page */}
            <Link to={`/meal-details/${meal.idMeal}`}>View More Details</Link>
        </div>
         )}
         </div>
    )
}

export default RandomButton;