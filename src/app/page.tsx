"use client";

import Moviez from "@/components/MovieZ-logo";
import { Select, SelectTrigger } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Genre from "@/components/genreButton";
import { Upcoming } from "@/components/upcoming";
// import { DemoSwiper } from "@/components/demoSwiper";
import SwiperSection from "@/components/demoSwiper";

export default function Home() {
  const { setTheme, theme } = useTheme();

  const onClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
    
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex w-[1280px] max-w-[1280px] h-[60px] justify-between items-center">
          <Moviez />

          <div className="flex gap-[10px]">
            <Genre />
            <Input />
          </div>

          <Button variant="outline" size="icon" onClick={onClick}>
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>                                                                            
        </div>
          <SwiperSection/>
      </div>
    </>
  );
}
