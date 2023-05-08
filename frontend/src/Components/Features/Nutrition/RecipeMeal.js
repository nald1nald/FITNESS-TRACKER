import React, { useState } from "react";

const RecipeMeal = () => {
  const [meal, setMeal] = useState(null);

  const displayMeal = () => {
    if (!meal) {
      return <p>Please select a meal</p>;
    }

    return (
      <div>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strInstructions}</p>
      </div>
    );
  };

  return (
    <div className="recipe-meal-container">
      {displayMeal()}
    </div>
  );
};

export default RecipeMeal;
