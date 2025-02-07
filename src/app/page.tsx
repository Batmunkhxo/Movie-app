"use client";
import SwiperSection from "@/components/demoSwiper";
import { Upcoming } from "@/components/upcoming";
import { Popular } from "@/components/popular";
import { Toprated } from "@/components/topRated";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
 
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full relative">
        <Header/>
        <div className="mt-12 flex flex-col justify-center items-center w-full">
          <SwiperSection />
          <Upcoming />
          <Popular />
          <Toprated />
        </div>
      </div>
    </>
  );
}
