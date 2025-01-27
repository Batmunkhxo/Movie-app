import Moviez from "@/components/MovieZ-logo";
import Image from "next/image";
import {
  Select,
  SelectTrigger
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
 

export default function Home() {
  return (
  <>
  <div>
  <div>
    <Moviez/>
  </div>

  <div>
  <Select><SelectTrigger className="">Genre
   </SelectTrigger>
   </Select>  
  </div>
  <div>
    <Input/>
  </div>
  </div>
  </>
  );
}
