import MealContext from "../Context /MealContext";
import MealCard from "./MealCard";
import { useContext } from "react";


const CollectionOfMeals = () => {
    const { allMeals } = useContext(MealContext);
    // console.log(allMeals)

    return (
        <div className="default meals">
            {allMeals.slice(0, 5).map(meal => (
                <MealCard
                    key={meal.idMeal}
                    mealName={meal.strMeal}
                    mealItems={meal.strIngredients || `N/A`}
                    mealInstruc={meal.strInstructions || `N/A`}
                    mealMeasure={meal.strMeasure || `N/A`}
                    mealPic={meal.strMealThumb || `N/A`}
                />
            ))}
        </div>
    );
};

export default CollectionOfMeals