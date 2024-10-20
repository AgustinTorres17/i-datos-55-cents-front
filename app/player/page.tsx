// PlayerProfile.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Trophy } from "lucide-react";
import { Leading } from "@/components/typography/Leading";
import {
  fetchPlayerData,
  fetchPlayerStats,
} from "@/app/services/playerService";
import { useSearchParams } from "next/navigation";
import { PlayerData } from "../types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getYears } from "../helpers/years";
import { PlayerStats } from "../types/types";
import { getLabels } from "../helpers/labels";
import { div } from "framer-motion/client";
import { Achievements } from "./components/Achievements";

const StatCard: React.FC<{ title: string; value: number | string }> = ({
  title,
  value,
}) => (
  <Card className="bg-[#1e1e1e] border-none hover:bg-negro-900 transition-all duration-300">
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">
        {typeof value === "string" ? value : value === null ? "-" : value.toFixed(1)}
      </p>
    </CardContent>
  </Card>
);

export default function PlayerProfile() {
  const [playerInfo, setPlayerInfo] = useState<PlayerData | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [selectedYear, setSelectedYear] = useState("2021-2022");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const years: string[] = getYears();

  useEffect(() => {
    if (id) {
      const getPlayerData = async () => {
        const data: PlayerData = await fetchPlayerData(Number(id));
        setPlayerInfo(data);
      };
      getPlayerData();
    }
  }, [id]);

  useEffect(() => {
    if (playerInfo && id) {
      const getPlayerStats = async () => {
        const data: PlayerStats | null = await fetchPlayerStats(
          Number(id),
          selectedYear
        );
        if (data !== null) {
          setPlayerStats(data);
        } else {
          setPlayerStats(null);
        }
      };
      getPlayerStats();
    }
  }, [playerInfo, selectedYear, id]);

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
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerInfo.nba_id}.png`}
            alt={playerInfo.name}
            className="w-40 h-40 rounded-full object-cover mr-6"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{playerInfo.name}</h1>
            <p className="text-xl text-white mb-1">{playerInfo.team}</p>
            <p className="text-lg text-zinc-500">
              {/* {playerInfo.position} | #{playerInfo.number} */}
            </p>
            <div>
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
            <div className="grid md:grid-cols-3 gap-4 w-full">
              {playerStats &&
                Object.entries(playerStats.stats).map(([key, value], index) => (
                  <StatCard key={index} title={getLabels(key)} value={value} />
                ))}
            </div>
            {playerStats === null && (
              <div className="h-[500px] w-full flex justify-center items-center">
                <Leading variant="h2" className="text-2xl font-bold text-white">
                  No stats available
                </Leading>
              </div>
            )}
          </TabsContent>
          <TabsContent value="achievements" className="mt-6">
            <Achievements id={Number(id)} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
