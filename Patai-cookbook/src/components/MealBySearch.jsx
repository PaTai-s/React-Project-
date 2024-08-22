import { useState, useEffect, useContext } from "react";
import fetchData from "../utils/fetchData";
import React from "react";
import MealContext from "../Context /MealContext";

const MealBySearch = () => {
    const [query, setSearch] = useState('');
    const [error, setError] = useState('')

    const { setMeals } = useContext(MealContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const [data, error] = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        if (data) setMeals(data)
        console.log(data)

        if (error) setError(error.message);

    }
    if (error) return <p>{error.message}</p>


    return (
        <form>
            <label htmlFor="MealSearch">Search for a recipe </label>
            <input type="text" value={query} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSubmit} type="submit">Search</button>

        </form>
    )
}


// function GifSearch({ setData }) {

//     const [query, setSearch] = useState('')
//     const [error, setError] = useState('')


//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const [data, error] = await fetchData(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`);
//         if (data) setData(data);
//         if (error) setError(error.message);
//     }
//     if (error) return <p>{error.message}</p>
//     console.log(query)
//     return (
//         <form>
//             <label htmlFor="searchInput">Enter a Search Term </label>
//             <input type="text" value={query} onChange={(e) => setSearch(e.target.value)} className="form-control" id="searchInput" />
//             <button onClick={handleSubmit} type="submit" className="btn btn-success">Search</button>
//         </form>
//     )
// }


// useEffect(() => {
//     const doFetch = async () => {
//         const response = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
//         // const response = fetchData.json()
//         if (response) setData(response[0]['meals'])
//         if (error) setError(error.message)
//     }
//     doFetch()
// }, [])

// useEffect(() => {
// console.log(data)
// }, [data])

export default MealBySearch