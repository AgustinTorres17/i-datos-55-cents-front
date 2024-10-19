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
import { Leading } from "@/components/typography/Leading";
import { fetchTeamData } from "@/app/services/teamService";
import { getTeamColor } from "../helpers/teamColorHelper";

interface PlayerStats {
  points: number;
  assists: number;
  rebounds: number;
}

interface Player {
  id: number;
  name: string;
  position: string;
  number: string;
  stats: PlayerStats;
  image: string;
}

interface TeamInfo {
  id: number;
  name: string;
  logo: string;
  players: { [year: number]: Player[] };
  championships: number[];
}

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => (
  <Card className="bg-[#1e1e1e] border-none hover:bg-[#2a2a2a] transition-all duration-300 group">
    <img
      src={player.image}
      alt={player.name}
      className="w-full h-48 object-cover"
    />
    <CardContent className={`p-4 bg-zinc-900 rounded-b-xl`}>
      <h3 className="text-lg font-semibold text-white mb-1">{player.name}</h3>
      <p className="text-sm text-gray-400">
        {player.position} | #{player.number}
      </p>
    </CardContent>
  </Card>
);

const PlayerStatsDialog: React.FC<{ player: Player, year: number, teamId: number }> = ({ player, year, teamId }) => {
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
          <DialogTitle>{player.name} - {year} Stats</DialogTitle>
        </DialogHeader>
        <div
          className={`w-48 h-48 rounded-full ${teamBackground} overflow-hidden`}
        >
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold">
              {player.stats.points.toFixed(1)}
            </p>
            <p className="text-sm text-gray-400">PPG</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {player.stats.assists.toFixed(1)}
            </p>
            <p className="text-sm text-gray-400">APG</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {player.stats.rebounds.toFixed(1)}
            </p>
            <p className="text-sm text-gray-400">RPG</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ChampionshipCard: React.FC<{ championships: number[] }> = ({
  championships,
}) => (
  <Card className="bg-[#1e1e1e] border-none transition-all duration-300">
    <CardContent className="p-4 flex flex-col items-center gap-2">
      <div className="flex flex-col items-center">
        <Trophy className="w-12 h-12 text-yellow-400 mb-2" />
        <Leading variant="h2" className="text-2xl font-bold mb-2">
          NBA Championships
        </Leading>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {championships.map((year) => (
          <span
            key={year}
            className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold"
          >
            {year}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function TeamProfile() {
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null);
  const [selectedYear, setSelectedYear] = useState(2023);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      const getTeamData = async () => {
        const data = await fetchTeamData(Number(id), selectedYear);
        setTeamInfo(data);
      };
      getTeamData();
    }
  }, [id, selectedYear]);

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
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src={teamInfo.logo}
            alt={teamInfo.name}
            className="w-40 h-40 object-contain mr-6"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{teamInfo.name}</h1>
            <Select
              defaultValue={selectedYear.toString()}
              onValueChange={(value) => setSelectedYear(parseInt(value))}
            >
              <SelectTrigger className="w-[180px] bg-negro-900/30">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className="bg-header border-none text-white z-50 relative">
                {Object.keys(teamInfo.players).map((year) => (
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
            <div className="grid grid-cols-4 gap-4">
              {teamInfo.players[selectedYear].map((player) => (
                <PlayerStatsDialog key={player.id} player={player} year={selectedYear} teamId={Number(id)}/>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="achievements" className="mt-6">
            <ChampionshipCard championships={teamInfo.championships} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
