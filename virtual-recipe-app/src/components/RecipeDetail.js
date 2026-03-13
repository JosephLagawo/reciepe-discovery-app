import React from "react";

function RecipeDetail({ meal }) {


  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  const youtubeEmbed = meal.strYoutube
    ? meal.strYoutube.replace("watch?v=", "embed/")
    : null;

  return (
    <div>

      <h2 className="text-4xl font-bold mb-4">{meal.strMeal}</h2>
      <p className="mb-6 text-gray-600">Origin: {meal.strArea}</p>

      {/* Image + Video Side by Side */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-80 object-cover rounded"
        />

        {youtubeEmbed && (
          <iframe
            title="YouTube Video"
            src={youtubeEmbed}
            className="w-full h-80 rounded"
            allowFullScreen
          />
        )}

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        {/* Ingredients */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4"> 🫑Ingredients</h2>
          <ol className="list-decimal pl-5 space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

          </ul>
        </ol>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p className="leading-relaxed whitespace-pre-line">
          {meal.strInstructions}
        </p>
      </div>
    </div>
    </div >
  );

}

export default RecipeDetail;