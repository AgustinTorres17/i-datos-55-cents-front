"use client"
import React, { useState } from "react";
import { TeamData } from "@/app/types/types";
import { TeamCard } from "./TeamCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface TeamCardProps {
  teams: TeamData[];
}

export const Teams = ({ teams }: TeamCardProps) => {
  const [showAllTeams, setShowAllTeams] = useState(false);

  const displayedTeams = showAllTeams ? teams : teams.slice(0, 10);

  const toggleTeamsDisplay = () => {
    setShowAllTeams(!showAllTeams);
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
              staggerChildren: 0.1
            }
          }
        }}
      >
        <AnimatePresence>
          {displayedTeams.map((team) => (
            <motion.div
              key={team.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TeamCard logo={team.logo} name={team.name} id={team.id} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {teams.length > 10 && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={toggleTeamsDisplay}
            className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white"
          >
            {showAllTeams ? "Mostrar menos equipos" : "Mostrar todos los equipos"}
          </Button>
        </div>
      )}
    </div>
  );
};