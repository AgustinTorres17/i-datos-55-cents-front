"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trophy, User } from "lucide-react";
import {
  fetchTeamData,
  fetchTeamPlayersData,
} from "@/app/services/teamService";
import { getTeamColor } from "../helpers/teamColorHelper";
import { TeamStats, PlayerStats } from "../types/types";
import { ChampionshipCard } from "./components/ChampionshipCard";
import { ConferenceCard } from "./components/ConferenceCard";
import { getYears } from "../helpers/years";
import { getLabels } from "../helpers/labels";
import { TeamImage } from "./components/TeamImage";
import Link from "next/link";
const PlayerCard: React.FC<{ player: PlayerStats }> = ({ player }) => (
  <Card className="bg-[#1e1e1e] border-none hover:bg-[#2a2a2a] transition-all duration-300 group grid-rows-auto-1fr">
    <img
      src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.nba_id}.png`}
      alt={player.name}
      className="w-full h-48 object-cover"
    />
    <CardContent className={`p-4 bg-zinc-900 rounded-b-xl h-full`}>
      <h3 className="text-lg font-semibold text-white mb-1">{player.name}</h3>
      <p className="text-sm text-gray-400">{player.position}</p>
    </CardContent>
  </Card>
);

const PlayerStatsDialog: React.FC<{
  player: PlayerStats;
  year: string;
  teamId: number;
}> = ({ player, year, teamId }) => {
  const teamBackground = getTeamColor(teamId);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <PlayerCard player={player} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#1e1e1e] text-white flex flex-col items-center">
        <DialogHeader>
          <DialogTitle>
            {player.name} - {year} Stats
          </DialogTitle>
        </DialogHeader>
        <Link
          href={`/player?id=${player.id}`}
          className={`w-48 h-48 rounded-full ${teamBackground} overflow-hidden`}
        >
          <img
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.nba_id}.png`}
            alt={player.name}
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="grid md:grid-cols-5 gap-4 mt-4">
          {Object.entries(player.stats).map(([key, value], index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold">{value === null ? "-" : value}</p>
              <p className="text-sm text-gray-400">{getLabels(key)}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function TeamProfile() {
  const [teamInfo, setTeamInfo] = useState<TeamStats | null>(null);
  const [playersStats, setPlayersStats] = useState<PlayerStats[] | null>(null);
  const [selectedYear, setSelectedYear] = useState("2021-2022");
  const years: string[] = getYears();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      const getTeamData = async () => {
        const data = await fetchTeamData(Number(id), selectedYear);
        if (data) {
          setTeamInfo(data);
          const players = await fetchTeamPlayersData(Number(id), selectedYear);
          if (players) setPlayersStats(players);
        } else {
          console.error("Failed to fetch team data");
        }
      };
      getTeamData();
    }
  }, [selectedYear, id]);

  if (!teamInfo) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-6Q5OBwYshFTPhyy1Ncmsleqhy4omBk5zw&s"
          alt="Loading logo"
          className="w-24 h-24 mb-4 animate-bounce rounded-full"
        />
        <p className="text-lg font-semibold text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#121212] text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-8">
          <TeamImage id={Number(id)} />
          <div>
            <h1 className="text-4xl font-bold mb-2">{teamInfo.name}</h1>
            <Select
              defaultValue={selectedYear.toString()}
              onValueChange={(value) => setSelectedYear(value)}
            >
              <SelectTrigger className="w-[180px] bg-negro-900/30">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className="bg-header border-none text-white z-50 relative">
                {years.map((year) => (
                  <SelectItem key={year} value={year} className="bg-header">
                    {year} Season
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="team" className="w-full ">
          <TabsList className="grid w-full grid-cols-2 bg-[#1e1e1e] text-zinc-700">
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white"
            >
              <User className="w-5 h-5 mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Achievements
            </TabsTrigger>
          </TabsList>
          <TabsContent value="team" className="mt-6 w-full">
            <div className="grid md:grid-cols-4 gap-4">
              {playersStats &&
                playersStats.map((player) => (
                  <PlayerStatsDialog
                    key={player.id}
                    player={player}
                    year={selectedYear}
                    teamId={Number(id)}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="achievements" className="space-y-6 mt-6">
            <ChampionshipCard id={teamInfo.id} />
            <ConferenceCard id={teamInfo.id} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
