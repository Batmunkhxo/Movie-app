// "use client"

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// type Movie = {
//     id: number;
//     backdrop_path: string;
//     original_title: string;
//     overview: string
// };

// const SwiperSection = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);

//     const apiKey = "db430a8098715f8fab36009f57dff9fb";
//     const baseUrl = "https://api.themoviedb.org/3";
//     const mainUrl = `${baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`;

// const getMovies = async  () => {
//     try {
//         const response = await fetch(mainUrl);
//         const result = await response.json();
//         const movies = result.results;
//         setMovies(movies);
// } catch (error) {
//     console.log(error);
// }
// };

// useEffect(() => {
//     getMovies();
// }, []);
// console.log(movies);

// return (
//     <div className="w-full h-[600px] bg-green-400 mt-[90px] flex items-center">
//         <Swiper
//         modules={[Navigation, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={1}
//         navigation
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         >
//             {movies.map((movie) => (
//            <SwiperSlide
//            key={movie.id}
//            className="flex items-center justify-center">
//            <p className="w-[400px] h-[200px absolute">{movie.overview}</p>
//            <img
//            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//            alt={movie.original_title}
//            className=" w-full h-[600px]"
//             />
//             {}
// </SwiperSlide>     
//         ))}
//         </Swiper>
//     </div>
// );
// };

// export default SwiperSection