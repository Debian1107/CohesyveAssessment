"use client";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../Components/Dropdown.tsx";
import { useState } from "react";

export default function Dashboard() {
  const [categories, setCategories] = useState([
    "Loading categories",
    "please wait ... ",
  ]);
  return (
    <div className="bg-slate-400 w-full h-screen">
      <div className="bg-violet-300 items-center flex gap-3 justify-center w-full h-12">
        <input placeholder="search by company name" />
        <DropdownMenu>
          <DropdownMenuTrigger className="text-lg border-[1px] border-blue-500 ">
            Search by category
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-xl bg-white  w-[12vw]">
            {/* <DropdownMenuLabel className="text-lg">
              My Account
            </DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            {categories.map((ind, i) => {
              return (
                <DropdownMenuItem className="text-lg">{ind}</DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <Search className="w-24 h-7" />
      </div>
    </div>
  );
}
