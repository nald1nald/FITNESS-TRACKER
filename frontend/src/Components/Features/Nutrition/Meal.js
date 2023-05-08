import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MealApi.css";
import { BsSearch } from "react-icons/bs";

const MealApi = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [noMatchesFound, setNoMatchesFound] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`;
      if (category) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      }
      const response = await axios.get(url);
      if (response.data.meals) {
        setMeals(response.data.meals);
        setNoMatchesFound(false);
      } else {
        setMeals([]);
        setNoMatchesFound(true);
      }
    };

    fetchMeals();
  }, [searchQuery, category]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchTerm);
    setCategory("");
  };

  const handleMealClick = async (mealId) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    setSelectedMeal(response.data.meals[0]);
  };

  return (
    <div className="meal-api-container">
      <div className="sbar">
        <div className="srhch">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search meals by ingredient"
              onChange={handleSearch}
            />
            <button type="submit" className="bsr">
              <BsSearch size={20} style={{ color: "#ffa200" }} />
            </button>
          </form>
        </div>
      </div>

      {noMatchesFound ? (
        <div className="no-matches">No matches found.</div>
      ) : (
        <div className="meal-list">
          {meals?.map((meal) => (
            <div
              key={meal.idMeal}
              className="meal-item"
              onClick={() => handleMealClick(meal.idMeal)}
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="meal-details">
                <h2>{meal.strMeal}</h2>
                <p>{meal.strInstructions}</p>
                {selectedMeal && (
                  <div>
                    <h2>Ingredients:</h2>
                    <ul>
                      {Object.keys(selectedMeal)
                        .filter(
                          (key) =>
                            key.startsWith("strIngredient") &&
                            selectedMeal[key]
                        )
                        .map((key) => (
                          <li key={key}>{selectedMeal[key]}</li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealApi;
