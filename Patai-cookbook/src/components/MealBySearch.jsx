import { useState } from "react";
import fetchData from "../utils/fetchData";
import React from "react";
import { useNavigate } from "react-router-dom";

const MealBySearch = () => {
    const [query, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();  
        navigate(`/search/${query}`);
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
            <button type="submit">Search</button>
        </form>
    );
};


export default MealBySearch