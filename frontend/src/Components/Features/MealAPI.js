import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "./config";
import "./mealapi.css";

const MealAPI = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [recipeUrl, setRecipeUrl] = useState("");
  const appId = config.appId;
  const apiKey = config.apiKey;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${apiKey}&from=0&to=9&health=healthy`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${apiKey}&from=0&to=9`
        );
        setRecipes(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (searchClicked) {
      fetchData();
    }
  }, [searchClicked, searchTerm, appId, apiKey]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    setSearchClicked(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchClicked(true);
    }
  };

  const handleRecipeClick = (recipeUrl) => {
    setRecipeUrl(recipeUrl);
  };

  useEffect(() => {
    if (recipeUrl) {
      window.location.href = recipeUrl;
    }
  }, [recipeUrl]);

  return (
    <section>
      <form onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="Search for a recipe"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" onClick={handleSearchClick}>
          Search
        </button>
      </form>
      <div className="mealapi">
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.recipe.uri}>
              <h3 onClick={() => handleRecipeClick(recipe.recipe.url)}>{recipe.recipe.label}</h3>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} onClick={() => handleRecipeClick(recipe.recipe.url)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MealAPI;
