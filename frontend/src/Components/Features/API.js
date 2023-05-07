import React, { useState, useEffect } from "react";

const API = () => {
  const [diet, setDiet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bespoke-diet-generator.p.rapidapi.com/dietPlan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "ed02bc7ae1mshca39c74822f8093p1d5297jsncacbdf299161",
            "X-RapidAPI-Host": "bespoke-diet-generator.p.rapidapi.com",
          },
          body: JSON.stringify({
            gender: "Male",
            age: "30",
            weight: "70",
            height: "170",
            activityLevel: "Moderate",
            goal: "Weight Loss",
          }),
        }
      );
      const data = await response.json();
      setDiet(data);
    };

    fetchData();
  }, []);

  if (!diet) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h2>Your Bespoke Diet Plan:</h2>
      <ul>
        {diet.meals.map((meal) => (
          <li key={meal.name}>
            <h3>{meal.name}</h3>
            <ul>
              {meal.foods.map((food) => (
                <li key={food.name}>{food.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default API;
