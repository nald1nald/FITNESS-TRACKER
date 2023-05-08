import React, { useState, useEffect } from "react";
import axios from "axios";

const MealApi = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
      );
      setMeals(response.data.meals);
    };
    fetchMeals();
  }, []);

  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default MealApi;
