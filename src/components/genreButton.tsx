"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Genre = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex border items-center font-medium w-[100px] justify-center rounded-lg">
          {" "}
          <ChevronDown /> Genre
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[577px] font-semibold text-2xl flex p-5 flex-col flex-start gap-0 ml-[480px]">
          <DropdownMenuLabel className="justify-content p-0 text-3xl">Genres</DropdownMenuLabel>
          <div className="font-normal text-base ">See lists of movies by genre</div>
          <DropdownMenuSeparator />
          <div className="flex flex-wrap justify-items-stretch gap-[16px] font-semibold text-2xl
           ">
            <DropdownMenuItem>Advanture</DropdownMenuItem>
            <DropdownMenuItem>Animation</DropdownMenuItem>
            <DropdownMenuItem>Comedy</DropdownMenuItem>
            <DropdownMenuItem>Crime</DropdownMenuItem>
            <DropdownMenuItem>Documentary</DropdownMenuItem>
            <DropdownMenuItem>Drama</DropdownMenuItem>
            <DropdownMenuItem>Family</DropdownMenuItem>
            <DropdownMenuItem>Fantasy</DropdownMenuItem>
            <DropdownMenuItem>History</DropdownMenuItem>
            <DropdownMenuItem>Horror</DropdownMenuItem>
            <DropdownMenuItem>Music</DropdownMenuItem>
            <DropdownMenuItem>Mystery</DropdownMenuItem>
            <DropdownMenuItem>Romance</DropdownMenuItem>
            <DropdownMenuItem>Science Fiction</DropdownMenuItem>
            <DropdownMenuItem>Tv Movie</DropdownMenuItem>
            <DropdownMenuItem>Thriller</DropdownMenuItem>
            <DropdownMenuItem>War</DropdownMenuItem>
            <DropdownMenuItem>Western</DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default Genre;
