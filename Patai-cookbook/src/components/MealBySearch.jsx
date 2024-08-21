import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import React from "react";

const MealBySearch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const doFetch = async () => {
            const response = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
            // const response = fetchData.json()
            if (response) setData(response[0]['meals'])
            if (error) setError(error.message)
        }
        doFetch()
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])



    return (
        <>


        </>
    )
}


export default MealBySearch