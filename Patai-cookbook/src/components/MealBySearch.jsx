import { useState, useEffect, useContext } from "react";
import fetchData from "../utils/fetchData";
import React from "react";
import MealContext from "../Context /MealContext";

const MealBySearch = () => {
    const [query, setSearch] = useState('');
    const [error, setError] = useState('')
    const { setMeals } = useContext(MealContext)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const [data, error] = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (data) setMeals(data.meals);
        if (error) setError(error?.message || 'An error occurred');

    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="MealSearch">Search for a recipe </label>
            <input
                type="text"
                id="MealSearch"
                value={query}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSubmit} type="submit">Search</button>
        </form>
    );
};



export default MealBySearch