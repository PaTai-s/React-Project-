

const MealCard = ({ mealName, mealItems, mealInstruc, mealMeasure, mealPic }) => {

    return (
        <div className="MealCard">
            <div className="MealImage">
                <img src={mealPic} alt="Meal pic" />
            </div>
            <div className="MealContent">
                <div className="MealName">{mealName}</div>
                <div className="MealItems"> Items needed for recipe: {mealItems}</div>
                <div className="MealInstruc"> Instructions for recipe: {mealInstruc}</div>
                <div className="MealMeasure"> Recipe measurements: {mealMeasure}</div>
            </div>
        </div>

    )
}

export default MealCard