import Link from "next/link";
import React from "react";

interface PlayerCardProps {
  id: number;
  photo: string;
  name: string;
  team: string;
}

export const PlayerCard = ({ id, photo, name, team }: PlayerCardProps) => {
  return (
    <Link href={`/player?id=${id}`}>
      <div className="group flex flex-col items-center justify-center p-4 bg-header text-white rounded-md shadow-md gap-4 hover:bg-negro-900 hover:text-gray-50  transition-all duration-200 card-container">
        <div className="w-24 h-24  rounded-full overflow-hidden bg-negro-900 group-hover:shadow-xl group-hover:shadow-header">
          <img
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${photo}.png`}
            alt={name}
            className="h-full w-full object-cover rounded-t-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm font-light">{team}</p>
        </div>
      </div>
    </Link>
  );
};
