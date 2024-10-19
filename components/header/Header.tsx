import React from "react";
import { Leading } from "../typography/Leading";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full p-5 bg-header flex justify-between sticky top-0 z-50">
      <Leading variant={"h1"}>NBA Stats</Leading>
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar..."
          className="pl-10 pr-4 py-2 w-64 bg-[#3a3a3a] text-white border-none placeholder-gray-400"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200"
          size={20}
        />
      </div>
    </div>
  );
};