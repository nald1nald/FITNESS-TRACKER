import React, { useState, useEffect } from "react";

const FoodAPI = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://campbellkitchen.p.rapidapi.com/recipes/search", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "campbellkitchen.p.rapidapi.com",
        "x-rapidapi-key": "ed02bc7ae1mshca39c74822f8093p1d5297jsncacbdf299161",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodAPI;
