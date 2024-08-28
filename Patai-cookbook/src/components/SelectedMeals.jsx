import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SelectedMeals = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);


  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMealDetails();
  }, [idMeal]);

  if (!meal) return <div>Loading...</div>;




  return (
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
    </div>
  );
};

export default SelectedMeals;