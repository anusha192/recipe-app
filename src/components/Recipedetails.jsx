import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Loader, Utensils, BookOpen } from "lucide-react";
import { useFetch, API_URL } from "./useFetch";

const Recipedetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `${API_URL}lookup.php?i=${id}`
  );

  const meal = data?.meals?.[0];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-xl text-gray-300">
          <Loader className="inline-block mr-2 animate-spin text-blue-500" />
          Preparing your recipe card...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <h2 className="text-center p-8 text-red-500 text-xl">
        {error}
      </h2>
    );
  }

  if (!meal) {
    return (
      <h2 className="text-center p-8 text-red-500 text-xl">
        Recipe not found.
      </h2>
    );
  }

  // Extract ingredients
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  // Split instructions into steps
  const instructions = meal.strInstructions
    ? meal.strInstructions
        .split(".")
        .map((step) => step.trim())
        .filter((step) => step.length > 0)
    : [];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center mb-8 text-yellow-400 hover:text-yellow-300 transition font-medium text-lg"
      >
        <ChevronLeft className="w-6 h-6 mr-1" />
        Back to Dashboard
      </Link>

      <div className="bg-gray-900 rounded-3xl shadow-2xl shadow-black/70 border border-gray-800 p-6 md:p-10">
        <div className="lg:flex lg:gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-black text-white mb-6 leading-tight">
              {meal.strMeal}
            </h1>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full max-w-md mx-auto rounded-2xl object-cover border-4 border-gray-800 shadow-2xl shadow-black/50"
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 bg-gray-800 rounded-2xl border border-gray-700 p-6">
            <h2 className="text-3xl font-bold text-yellow-400 flex items-center border-b border-gray-700 pb-4 mb-6">
              <Utensils className="w-7 h-7 mr-3 text-blue-500" />
              Key Ingredients
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-blue-400 font-bold mr-2">
                    →
                  </span>

                  <span>
                    <span className="font-semibold text-white">
                      {item.measure}
                    </span>{" "}
                    {item.ingredient}
                  </span>
                </li>
              ))}
            </ul>

            {/* Category & Area */}
            <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap gap-3">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {meal.strCategory}
              </span>

              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {meal.strArea}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-14 pt-8 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
          <BookOpen className="w-7 h-7 mr-3 text-blue-500" />
          Detailed Preparation
        </h2>

        <ol className="space-y-6 list-none text-gray-300">
          {instructions.map((step, index) => (
            <li
              key={index}
              className="text-lg leading-relaxed bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500 shadow-lg shadow-black/30 transition duration-300 hover:bg-gray-700/50"
            >
              <span className="font-extrabold text-yellow-400 mr-3 text-xl">
                {index + 1}.
              </span>

              {step}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Recipedetails;