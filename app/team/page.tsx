"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useState, Suspense } from "react";

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
import { Trophy, User, Users } from "lucide-react";
import {
  fetchTeamData,
  fetchTeamPlayersData,
} from "@/app/services/teamService";
import { getTeamColor } from "../helpers/teamColorHelper";
import { TeamStats, PlayerStats, TeamInfo } from "../types/types";
import { ChampionshipCard } from "./components/ChampionshipCard";
import { ConferenceCard } from "./components/ConferenceCard";
import { getYears } from "../helpers/years";
import { getLabels } from "../helpers/labels";
import { TeamImage } from "./components/TeamImage";
import Link from "next/link";

const PlayerCard: React.FC<{ player: PlayerStats }> = ({ player }) => (
  <Card className="bg-[#1e1e1e] border-none hover:bg-[#2a2a2a] transition-all duration-300 group-rows-auto-1fr">
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

const StatCard: React.FC<{ title: string; value: number | string }> = ({
  title,
  value,
}) => (
  <Card className="bg-[#1e1e1e] border-none hover:bg-negro-900 transition-all duration-300">
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">
        {typeof value === "string"
          ? value
          : value === null
          ? "-"
          : value.toFixed(1)}
      </p>
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
              <p className="text-2xl font-bold">
                {value === null ? "-" : value}
              </p>
              <p className="text-sm text-gray-400">{getLabels(key)}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

function TeamProfileContent({ id }: { id: string }) {
  const [teamStats, setTeamStats] = useState<TeamStats | null>(null);
  const [playersStats, setPlayersStats] = useState<PlayerStats[] | null>(null);
  const [selectedYear, setSelectedYear] = useState("2021-2022");
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null);
  const years: string[] = getYears();

  useEffect(() => {
    if (id) {
      const getTeamData = async () => {
        const data = await fetchTeamData(Number(id), selectedYear);
        if (data) {
          setTeamStats(data);
          setTeamInfo({
            games: data.games,
            fg: data.fg,
            fga: data.fga,
            fg_percentage: data.fg_percentage,
            three_points: data.three_points,
            three_pa: data.three_pa,
            three_p_percentage: data.three_p_percentage,
            ft: data.ft,
            fta: data.fta,
            ft_percentage: data.ft_percentage,
            orb: data.orb,
            drb: data.drb,
            trb: data.trb,
            ast: data.ast,
            stl: data.stl,
            blk: data.blk,
            tov: data.tov,
            pf: data.pf,
            pts: data.pts,
            eff: data.eff,
            deff: data.deff,
          });
          const players = await fetchTeamPlayersData(Number(id), selectedYear);
          if (players) setPlayersStats(players);
        } else {
          console.error("Failed to fetch team data");
        }
      };
      getTeamData();
    }
  }, [selectedYear, id]);

  if (!teamStats) {
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
            <h1 className="text-4xl font-bold mb-2">{teamStats.name}</h1>
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
          <TabsList className="grid w-full grid-cols-3 bg-[#1e1e1e] text-zinc-700">
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white"
            >
              <Users className="w-5 h-5 mr-2" />
              Team Stats
            </TabsTrigger>
            <TabsTrigger
              value="players"
              className="data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white"
            >
              <User className="w-5 h-5 mr-2" />
              Players
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Achievements
            </TabsTrigger>
          </TabsList>
          <TabsContent value="team">
            <div className="grid md:grid-cols-3 gap-4 w-full">
              {teamInfo &&
                Object.entries(teamInfo).map(([key, value], index) => (
                  <StatCard key={index} title={getLabels(key)} value={value} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="players" className="mt-6 w-full">
            {playersStats && playersStats.length > 0 ? (
              <div className="grid md:grid-cols-4 gap-4">
                {playersStats.map((player) => (
                  <PlayerStatsDialog
                    key={player.id}
                    player={player}
                    year={selectedYear}
                    teamId={Number(id)}
                  />
                ))}
              </div>
            ) : (
              <p className="w-full h-96 flex items-center justify-center text-2xl font-bold">No players found</p>
            )}
          </TabsContent>
          <TabsContent value="achievements" className="space-y-6 mt-6">
            <ChampionshipCard id={teamStats.id} />
            <ConferenceCard id={teamStats.id} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}

export default function TeamProfile({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const id = searchParams.id;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {id && <TeamProfileContent id={id} />}
    </Suspense>
  );
}
