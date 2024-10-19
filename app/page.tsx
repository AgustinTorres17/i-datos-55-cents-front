"use client";
import { Players } from "@/components/players/Players";
import { Teams } from "@/components/teams/Teams";
import { Leading } from "@/components/typography/Leading";
import { PlayerData, TeamData } from "./types/types";
import { useEffect, useState } from "react";
import { fetchBestPlayers } from "./services/playerService";
import { s } from "framer-motion/client";
import { fetchBestTeams } from "./services/teamService";

export default function Home() {
  const [nbaPlayers, setNbaPlayers] = useState<PlayerData[]>([]);
  const [nbaTeams, setNbaTeams] = useState<TeamData[]>([]);

  useEffect(() => {
    const fetchBestPlayersHome = async () => {
      const bestPlayers = await fetchBestPlayers();
      setNbaPlayers(bestPlayers);
      console.log(bestPlayers);
    };
    fetchBestPlayersHome();
  }, []);

  useEffect(() => {
    const fetchBestTeamsHome = async () => {
      const bestTeams = await fetchBestTeams();
      setNbaTeams(bestTeams);
      console.log(bestTeams);
    };
    fetchBestTeamsHome();
  }, []);

  return (
    <main className="flex flex-col gap-20 p-10">
      <section className="grid grid-rows-auto-1fr gap-4">
        <Leading variant={"h2"}>Equipos de la NBA</Leading>
        <Teams teams={nbaTeams} />
      </section>
      <section className="grid grid-rows-auto-1fr gap-4">
        <Leading variant={"h2"}>Jugadores Destacados</Leading>
        <Players players={nbaPlayers} />
      </section>
    </main>
  );
}
