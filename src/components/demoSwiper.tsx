"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

type Movie = {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
};
const SwiperSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = "db430a8098715f8fab36009f57dff9fb";
  const baseUrl = "https://api.themoviedb.org/3";
  const mainUrl = `${baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`;

  const getMovies = async () => {
    try {
      const response = await fetch(mainUrl);
      const result = await response.json();
      const movies = result.results;
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div className="w-full h-[600px] mt-5 flex items-center">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="relative"
          >
            <div className="flex w-[20%] absolute flex-col justify-items-start p-5 space-y-4 pt-[150px] pl-[100px]">


            <p className="text-sm text-white">Now playing:</p>
            <h1 className="text-2x1 font-medium font-bold text-white">
              {movie.original_title}
            </h1>
            <p className="text-sm text-white">⭐{movie.vote_average.toFixed(1)}/10</p>
            <p className="text-l line-clamp-5 font-normalmfont-inter text-white"></p>
            <p className="w-[400px] h-[200px] text-white">{movie.overview}</p>
            {}
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
              className=" w-full h-[600px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperSection;
