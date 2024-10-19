// PlayerProfile.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Trophy } from "lucide-react";
import { Leading } from "@/components/typography/Leading";
import { fetchPlayerData } from "@/app/services/playerService";
import { useSearchParams } from "next/navigation";

interface PlayerStats {
  points: number;
  assists: number;
  rebounds: number;
  offRebounds: number;
  defRebounds: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fouls: number;
  minutes: number;
  fieldGoals: string;
  threePoints: string;
  freeThrows: string;
}

interface PlayerInfo {
  id: number;
  name: string;
  team: string;
  position: string;
  number: string;
  height: string;
  weight: string;
  born: string;
  stats: PlayerStats;
  hasMvp: boolean;
  mvpYear: number[];
  trophies: boolean;
  trophyYear: number[];
}

const StatCard: React.FC<{ title: string; value: number | string }> = ({
  title,
  value,
}) => (
  <Card className="bg-[#1e1e1e] border-none hover:bg-negro-900 transition-all duration-300">
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">
        {typeof value === "string" ? value : value.toFixed(1)}
      </p>
    </CardContent>
  </Card>
);

const MVPCard: React.FC<{ mvpYears: number[] }> = ({ mvpYears }) => {
  return (
    <Card className="bg-[#1e1e1e] border-none  transition-all duration-300">
      <CardContent className="p-4 flex flex-col items-center">
        <Trophy className="w-12 h-12 text-yellow-400 mb-2" />
        <Leading variant="h2" className="text-2xl font-bold mb-2">
          MVP
        </Leading>
        <div className="flex flex-wrap justify-center gap-2">
          {mvpYears.map((year) => (
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
};

interface Trophy {
  year: number;
}

const TrophyCard: React.FC<{ trophies: Trophy[] }> = ({ trophies }) => {
  return (
    <Card className="bg-[#1e1e1e] border-none  transition-all duration-300">
      <CardContent className="p-4 flex flex-col items-center">
        <Trophy className="w-12 h-12 text-blue-400 mb-2" />
        <Leading variant="h2" className="text-2xl font-bold mb-2">
          NBA Champion
        </Leading>
        <div className="flex flex-wrap justify-center gap-2">
          {trophies.map((trophy, index) => (
            <span
              key={index}
              className="bg-blue-400 text-black px-3 py-1 rounded-full font-bold"
            >
              {trophy.year}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default function PlayerProfile() {
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  useEffect(() => {
    if (id) {
      const getPlayerData = async () => {
        const data = await fetchPlayerData(Number(id));
        setPlayerInfo(data);
      };
      getPlayerData();
    }
  }, [id]);

  if (!playerInfo) {
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
    <div className="h-full overflow-auto bg-[#121212] text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-8">
          <motion.img
            initial={{ scale: 0.8, opacity: 0, backgroundColor: "#121212" }}
            animate={{ scale: 1, opacity: 1, backgroundColor: "#1e1e1e" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
            alt={playerInfo.name}
            className="w-40 h-40 rounded-full object-cover mr-6"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{playerInfo.name}</h1>
            <p className="text-xl text-white mb-1">{playerInfo.team}</p>
            <p className="text-lg text-zinc-500">
              {playerInfo.position} | #{playerInfo.number}
            </p>
          </div>
        </div>

        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1e1e1e] text-zinc-700">
            <TabsTrigger
              value="stats"
              className="data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white"
            >
              <BarChart className="w-5 h-5 mr-2" />
              Stats
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Achievements
            </TabsTrigger>
          </TabsList>
          <TabsContent value="stats" className="mt-6">
            <div className="grid grid-cols-3 gap-4">
              <StatCard title="PPG" value={playerInfo.stats.points} />
              <StatCard title="APG" value={playerInfo.stats.assists} />
              <StatCard title="RPG" value={playerInfo.stats.rebounds} />
              <StatCard title="OFF RPG" value={playerInfo.stats.offRebounds} />
              <StatCard title="DEF RPG" value={playerInfo.stats.defRebounds} />
              <StatCard title="STL" value={playerInfo.stats.steals} />
              <StatCard title="BLK" value={playerInfo.stats.blocks} />
              <StatCard title="TO" value={playerInfo.stats.turnovers} />
              <StatCard title="PF" value={playerInfo.stats.fouls} />
              <StatCard title="MIN" value={playerInfo.stats.minutes} />
              <StatCard title="FG%" value={playerInfo.stats.fieldGoals} />
              <StatCard title="3P%" value={playerInfo.stats.threePoints} />
              <StatCard title="FT%" value={playerInfo.stats.freeThrows} />
            </div>
          </TabsContent>
          <TabsContent value="achievements" className="mt-6">
            <Card className="bg-[#1e1e1e] border-none ">
              <CardContent className="p-6 w-full grid grid-cols-2">
                {playerInfo.hasMvp && <MVPCard mvpYears={playerInfo.mvpYear} />}
                {playerInfo.trophies && (
                  <TrophyCard
                    trophies={playerInfo.trophyYear.map((year) => ({ year }))}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
