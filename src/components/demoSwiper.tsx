"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { useRouter } from "next/navigation";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Movie = {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
};
const SwiperSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailer, setTrailer] = useState([]);
  const [movieId, setMovieId] = useState([]);
  const apiKey = "db430a8098715f8fab36009f57dff9fb";
  const baseUrl = "https://api.themoviedb.org/3";
  const mainUrl = `${baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`;

  const getMovies = async () => {
    try {
      const response = await fetch(mainUrl);
      const result = await response.json();
      const movies = result.results;
      const movieId = movies.map((el) => {
        return el.id;
      });
      setMovieId(movieId);
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(movieId)

  // console.log(trailerUrl)
  // .find(
  //     (video: any) => video.type === "Trailer" && video.site === "Youtube"
  // );

  //   const getMovieTrailer = async () => {
  //     console.log(trailerUrl);
  //     try {
  //       const response = await fetch(trailerUrl);
  //       const result = await response.json();
  //       const trailer = result.results;
  //     //   console.log(trailer);
  //       setTrailer(trailer);
  //       //   console.log(response)
  //     } catch (error) {
  //       console.log("Error fetching trailer:", error);
  //     }
  // }

  // const router = useRouter()

  // const trailerUrl = `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;

  const getOnclickId = (id: string) => {
    setMovieId(id);
  };

  useEffect(() => {
    if (movieId) {
      const trailerUrl = `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;

      const getMovieTrailer = async () => {
        try {
          const response = await fetch(trailerUrl);
          const result = await response.json();
          const trailer = result.results.find(
            (video: any) => video.type === "Trailer" && video.site === "YouTube"
          );
          const zuvTrailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;

          setTrailer(zuvTrailerUrl);
        } catch (error) {
          console.log(error);
        }
      };

      getMovieTrailer();
    }
  }, [movieId, apiKey]);

  useEffect(() => {
    getMovies();
  }, []);

  console.log(trailer, "xe");

  return (
    <div className="w-full h-[600px] mt-5 flex items-center">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id} className="relative">
            <div className="flex w-[20%] absolute flex-col justify-items-start p-5 space-y-4 pt-[150px] pl-[100px]">
              <p className="text-sm text-white">Now playing:</p>
              <h1 className="text-2x1 font-medium font-bold text-white">
                {movie.original_title}
              </h1>
              <p className="text-sm text-white">
                ⭐{movie.vote_average.toFixed(1)}/10
              </p>
              <p className="text-l line-clamp-5 font-normalmfont-inter text-white"></p>
              <p className="w-[400px] h-[200px] text-white">{movie.overview}</p>
              {/* <button onClick={() => getOnclickId(String(movie.id))}
                className="w-9 h-9 bg-white rounded">
                play
     
              </button> */}
              <Dialog>
                <DialogTrigger className="flex gap-[5px] "  onClick={() => getOnclickId(String(movie.id))}>icon 
                    <p>play trailer</p>
                </DialogTrigger>
                <DialogContent>
                <ReactPlayer
          className='react-player'
          url={trailer}
          width='100%'
          height='100%'
        />
                </DialogContent>
              </Dialog>
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

// onClick={()=>getOnclickId(movie.id)}
export default SwiperSection;
