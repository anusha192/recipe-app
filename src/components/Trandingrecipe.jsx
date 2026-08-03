import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useFetch } from "./usefetch";
import { Clock } from "lucide-react";

const Trandingrecipe = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);

  const meals = data?.meals || [];

  if (loading) {
    return (
      <h2 className="text-center text-white text-xl py-10">
        Loading...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center text-red-500 text-xl py-10">
        {error}
      </h2>
    );
  }

  return (
    <section className="mt-8 mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-yellow-400 pl-4 flex items-center">
        <Clock className="w-6 h-6 mr-3 text-blue-300" />
        {title}
      </h2>

      <div className="w-full mx-auto py-3">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {meals.map((meal) => (
            <SwiperSlide key={meal.idMeal}>
              <div className="flex justify-center">
                <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 mb-5">
                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition duration-500"></div>

                  {/* Image */}
                  <div className="flex justify-center items-center p-5">
                    <img
                      src={meal?.strMealThumb}
                      alt={meal?.strMeal}
                      className="h-[120px] w-[120px] rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trandingrecipe;