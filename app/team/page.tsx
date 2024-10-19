"use client";

import React, { useState } from "react";
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

const teamInfo: TeamInfo = {
  id: 1,
  name: "Los Angeles Lakers",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png",
  players: {
    2023: [
      {
        id: 1,
        name: "LeBron James",
        position: "SF",
        number: "6",
        stats: { points: 27.2, assists: 7.3, rebounds: 7.5 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      },
      {
        id: 2,
        name: "Anthony Davis",
        position: "PF",
        number: "3",
        stats: { points: 25.9, assists: 2.6, rebounds: 12.5 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png",
      },
      {
        id: 3,
        name: "D'Angelo Russell",
        position: "PG",
        number: "1",
        stats: { points: 17.8, assists: 6.1, rebounds: 3.0 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626156.png",
      },
      {
        id: 4,
        name: "Austin Reaves",
        position: "SG",
        number: "15",
        stats: { points: 13.0, assists: 3.4, rebounds: 3.0 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png",
      },
      {
        id: 5,
        name: "Rui Hachimura",
        position: "PF",
        number: "28",
        stats: { points: 11.2, assists: 0.9, rebounds: 4.5 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629060.png",
      },
      {
        id: 6,
        name: "Jarred Vanderbilt",
        position: "PF",
        number: "2",
        stats: { points: 7.9, assists: 1.6, rebounds: 7.5 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629020.png",
      },
    ],
    2022: [
      {
        id: 1,
        name: "LeBron James",
        position: "SF",
        number: "6",
        stats: { points: 30.3, assists: 6.2, rebounds: 8.2 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      },
      {
        id: 2,
        name: "Russell Westbrook",
        position: "PG",
        number: "0",
        stats: { points: 18.5, assists: 7.1, rebounds: 7.4 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png",
      },
      {
        id: 3,
        name: "Anthony Davis",
        position: "PF",
        number: "3",
        stats: { points: 23.2, assists: 3.1, rebounds: 9.9 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png",
      },
      {
        id: 4,
        name: "Malik Monk",
        position: "SG",
        number: "11",
        stats: { points: 13.8, assists: 2.9, rebounds: 3.4 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628370.png",
      },
      {
        id: 5,
        name: "Carmelo Anthony",
        position: "PF",
        number: "7",
        stats: { points: 13.3, assists: 1.0, rebounds: 4.2 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2546.png",
      },
      {
        id: 6,
        name: "Talen Horton-Tucker",
        position: "SG",
        number: "5",
        stats: { points: 10.0, assists: 2.7, rebounds: 3.2 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629659.png",
      },
      {
        id: 7,
        name: "Dwight Howard",
        position: "C",
        number: "39",
        stats: { points: 6.2, assists: 0.6, rebounds: 5.9 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png",
      },
      {
        id: 8,
        name: "Avery Bradley",
        position: "SG",
        number: "20",
        stats: { points: 6.4, assists: 0.8, rebounds: 2.2 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/202340.png",
      },
      {
        id: 9,
        name: "Stanley Johnson",
        position: "SF",
        number: "14",
        stats: { points: 6.7, assists: 1.7, rebounds: 3.2 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626169.png",
      },
      {
        id: 10,
        name: "Wayne Ellington",
        position: "SG",
        number: "2",
        stats: { points: 6.7, assists: 0.7, rebounds: 1.8 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201961.png",
      },
      {
        id: 11,
        name: "Kent Bazemore",
        position: "SF",
        number: "9",
        stats: { points: 3.4, assists: 0.9, rebounds: 1.8 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203145.png",
      },
      {
        id: 12,
        name: "Austin Reaves",
        position: "SG",
        number: "15",
        stats: { points: 7.3, assists: 1.8, rebounds: 3.2 },
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png",
      },
    ],
  },

  championships: [
    2020, 2010, 2009, 2002, 2001, 2000, 1988, 1987, 1985, 1982, 1980, 1972,
  ],
};

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => (
  <Card className="bg-[#1e1e1e] border-none hover:bg-[#2a2a2a] transition-all duration-300 group">
    <img
      src={player.image}
      alt={player.name}
      className="w-full h-48 object-cover"
    />
    <CardContent className={`p-4 bg-gray-500 rounded-b-xl`}>
      <h3 className="text-lg font-semibold text-white mb-1">{player.name}</h3>
      <p className="text-sm text-gray-400">
        {player.position} | #{player.number}
      </p>
    </CardContent>
  </Card>
);

const PlayerStatsDialog: React.FC<{ player: Player }> = ({ player }) => {
  const teamBackground = "bg-yellow-400";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <PlayerCard player={player} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#1e1e1e] text-white flex flex-col items-center">
        <DialogHeader>
          <DialogTitle>{player.name} - Stats</DialogTitle>
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
  const [selectedYear, setSelectedYear] = useState(2023);

  return (
    <div className="h-full  bg-[#121212] text-white p-8">
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
                <PlayerStatsDialog key={player.id} player={player} />
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
