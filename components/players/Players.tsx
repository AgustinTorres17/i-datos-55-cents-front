"use client";
import React, { useState } from "react";
import { PlayerData } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { PlayerCard } from "./PlayerCard";

interface PlayersProps {
  players: PlayerData[];
}

export const Players = ({ players }: PlayersProps) => {
  const [showAllPlayers, setShowAllPlayers] = useState(false);

  const displayedPlayers = showAllPlayers ? players : players.slice(0, 10);

  const togglePlayersDisplay = () => {
    setShowAllPlayers(!showAllPlayers);
  };

  return (
    <div className="space-y-6">
      <motion.div
        className="grid grid-cols-5 gap-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <AnimatePresence>
          {displayedPlayers.map((player) => (
            <motion.div
              key={player.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Assuming a PlayerCard component exists, similar to TeamCard */}
              <PlayerCard photo={player.image} name={player.name} id={player.id} team={player.team} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {players.length > 10 && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={togglePlayersDisplay}
            className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white"
          >
            {showAllPlayers ? "Mostrar menos jugadores" : "Mostrar todos los jugadores"}
          </Button>
        </div>
      )}
    </div>
  );
};
