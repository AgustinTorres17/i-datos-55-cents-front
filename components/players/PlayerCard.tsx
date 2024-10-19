import React from "react";

interface PlayerCardProps {
  photo: string;
  name: string;
  position: string;
  team: string;
}

export const PlayerCard = ({
  photo,
  name,
  position,
  team,
}: PlayerCardProps) => {
  return (
    <div className="group flex flex-col items-center justify-center p-4 bg-header text-white rounded-md shadow-md gap-4 hover:bg-negro-900 hover:text-gray-50  transition-all duration-200 card-container">
      <div className="w-24 h-24  rounded-full overflow-hidden bg-negro-900 group-hover:border group-hover:border-negro-300 group-hover:shadow-md group-hover:shadow-negro-900">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover rounded-t-full"
        />
      </div>
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm">{position}</p>
      <p className="text-sm font-light">{team}</p>
    </div>
  );
};
