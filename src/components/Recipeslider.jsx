import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { useFetch } from "./usefetch";
import ReceipeCard from "./ReceipeCard";
import { Clock } from "lucide-react";

const Recipeslider = ({ title, fetchUrl }) => {
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

      <div className="w-[90%] mx-auto py-3">

        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {meals.map((meal) => (
            <SwiperSlide key={meal.idMeal}>
              <div className="flex justify-center">
                <ReceipeCard meal={meal} />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Recipeslider;