import Link from "next/link";
import React from "react";

interface TeamCardProps {
  logo: string;
  name: string;
  id: number;
}

export const TeamCard = ({ logo, name, id }: TeamCardProps) => {
  return (
    <Link href={`/team?id=${id}`}>
      <div className="flex flex-col items-center justify-center p-4 bg-header text-white rounded-md shadow-md gap-4 hover:bg-negro-900 hover:text-gray-50 hover:scale-105 transition-all duration-300">
        <div className="w-30 h-20">
          <img src={logo} alt={name} className="h-full w-full object-cover" />
        </div>
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </Link>
  );
};
