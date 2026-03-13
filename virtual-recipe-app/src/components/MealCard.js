function MealCard({ meal, onSelect }) {

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-lg"
      />

      <h3 className="mt-3 font-bold">{meal.strMeal}</h3>
      <p>Origin: {meal.strArea}</p>

      <button
        onClick={() => {
          onSelect(meal);
        }}
        className="bg-blue-800 text-white px-4 py-2 rounded-lg mt-3"
      >
        View Recipe
      </button>

    </div >
  );
}
export default MealCard;