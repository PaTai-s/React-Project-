import { React, useState, useEffect } from "react"
import '../App.css'
import { Link } from "react-router-dom"

const Meals = () => {
    const URL_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("")
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(URL_CATEGORIES)
                const data = await res.json()
                setCategories(data.categories.slice(0, 9))
            } catch (error) {
                console.error(error)
            }
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(`${URL_RECIPES}${activeCategory}`)
                const data = await res.json()
                setRecipes(data.meals.slice(0, 11))
            } catch (error) {
                console.error(error)
            }
        }
        activeCategory && fetchRecipes()
    }, [activeCategory])

    return (
        <div className="container">
            <div className="wrapper">
                <div className="titles">
                    <h1>Pick a category</h1>
                </div>
                <div className="categories">
                    {categories.map((category) => (
                        <div
                            key={category.idCategory}
                            className={`category ${activeCategory === category.strCategory ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.strCategory)}
                        >
                            {category.strCategory}
                        </div>
                    ))}
                </div>
                <div className="recipes">
                    {recipes?.map((recipe) => (
                        <div key={recipe.idMeal} className="recipe">
                            <Link to={`/recipe/${recipe.idMeal}`} className="img-container">
                                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            </Link>
                            <h3>{recipe.strMeal}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Meals;