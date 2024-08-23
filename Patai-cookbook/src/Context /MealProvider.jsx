import { useState, useEffect, Children } from "react";
import fetchData from "../utils/fetchData";
import React from "react";
import MealContext from "./MealContext";

const MealProvider = ({ children }) => {
    const [allMeals, setMeals] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await fetchData('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            // console.log(data)
            // if (data) setMeals(data['meals'])
            if (data) setMeals(data.meals)
            if (error) setError(error.message)
        }
        doFetch()
    }, [])
    useEffect(() => {
        console.log(allMeals)
    }, [allMeals])



    let contextValue = { allMeals, setMeals }

    return (
        <>
            <MealContext.Provider value={contextValue}>
                {children}
            </MealContext.Provider>

        </>
    )
}

export default MealProvider