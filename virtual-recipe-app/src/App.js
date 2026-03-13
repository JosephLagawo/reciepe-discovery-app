import React, { useState } from "react";
import SearchPage from "./components/SearchPage";
import MealCard from "./components/MealCard";
import RecipeDetail from "./components/RecipeDetail";

function App() {

  // ==============================
  // 1. STATE (The App's Memory)
  // ==============================
  // This is where the app stores data.
  // App owns all important data.

  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  console.log("Selected Meal State", selectedMeal);

  // ====================================
  // 2. FETCH FUNCTION (The Brain Logic)
  // ====================================
  // This runs when the user clicks Search.
  // It calls the API and updates state.

  const fetchMeal = async () => {
    if (!search) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const data = await response.json();

      if (!data.meals) {
        setError("No meals found. Try something else.");
      } else {
        setMeals(data.meals);
      }

    } catch (err) {
      setError("Something went wrong, Please try again");
    }

    setLoading(false);
  };



  // ==============================
  // 3. RETURN (What We Render)
  // ==============================
  // This is what appears on the screen.

  return (

    <div className="min-h-screen bg-slate-100">

      <header className="bg-white shadow-md py-4 mb-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center"> 📖Uncle Joe's Recipe Book📖</h1>

            <nav className="space-x-8">
              <a href="/" className="text-gray-600 hover:text-black font-extrabold">Home</a>
              <a href="/" className="text-gray-600 hover:text-black font-extrabold">Recipes</a>
              <a href="/" className="text-gray-600 hover:text-black font-extrabold">About</a>
            </nav>
          </div>
      </header>

      {/* ===== Page Layout Wrapper =====*/}
      <div className="min-h-screen bg-stone-100 flex justify-center">

        {/* ===== Main Card Container ===== */}
        <div className="bg-white shadow-lg p-8rounded-xl p-6 w-full max-w-7xl">

          {/* ===== Page Title ===== */}
          <h1 className="text-6xl font-semibold text-black mb-6 text-center">
            Discover Amazing Recipes 🍳🔪
          </h1>

          <h2 className="text-3xl font-blod text-blue-800 mb-6 text-center">
            Search thousands of recipes from around the world
          </h2>

          {/* ===== Search Section (Input + Button) ===== */}
          <SearchPage
            search={search}
            setSearch={setSearch}
            onSearch={fetchMeal}
          />

          {/* ===== Loading Message ===== */}
          {loading && <p className="mt-4">Loading...</p>}
          {/* ===== Error Message ===== */}
          {error && <p className="mt-4 text-red-500">{error}</p>}

          {selectedMeal ? (
            <div className="mt-12 bg-white p-8">
              <button
                onClick={() => setSelectedMeal(null)}
                className="mb-4 bg-blue-800 text-white px-4 py-2 rounded"
              >
                Close Recipe
              </button>
              <RecipeDetail meal={selectedMeal} />
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {meals.map((meal) => (
                <MealCard
                  key={meal.idMeal}
                  meal={meal}
                  onSelect={setSelectedMeal}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
      );
}

export default App;
