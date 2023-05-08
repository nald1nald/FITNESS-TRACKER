import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [ingredient, setIngredient] = useState('');
  const [meals, setMeals] = useState([]);

  const handleChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ingredient} onChange={handleChange} placeholder="Search by ingredient" />
        <button type="submit">Search</button>
      </form>
      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
