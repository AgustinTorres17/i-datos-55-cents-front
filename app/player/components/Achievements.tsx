import {
    fetchPlayerChamps,
    fetchPlayerConferenceChamps,
    fetchPlayerMVPs,
  } from "@/app/services/playerService";
  import { ChampionshipsType, MVPType } from "@/app/types/types";
  import { Card, CardContent } from "@/components/ui/card";
  import React, { useEffect, useState } from "react";
  import { MVPCard } from "./MVPCard";
  import { Leading } from "@/components/typography/Leading";
  import { Trophy } from "lucide-react";
  
  interface AchievementsProps {
    id: number;
  }
  
  export const Achievements = ({ id }: AchievementsProps) => {
    const [playerMVPs, setPlayerMVPs] = useState<MVPType[]>([]);
    const [playerChamps, setPlayerChamps] = useState<ChampionshipsType[]>([]);
    const [playerConferenceChamps, setPlayerConferenceChamps] = useState<
      ChampionshipsType[]
    >([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchAllAchievements = async () => {
        setLoading(true);
        try {
          const [mvpData, champsData, confChampsData] = await Promise.all([
            fetchPlayerMVPs(id),
            fetchPlayerChamps(id),
            fetchPlayerConferenceChamps(id),
          ]);
          setPlayerMVPs(mvpData || []);
          setPlayerChamps(champsData || []);
          setPlayerConferenceChamps(confChampsData || []);
        } catch (error) {
          console.error("Error fetching player achievements:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAllAchievements();
    }, [id]);
  
    if (loading) {
      return (
        <Card className="bg-[#1e1e1e] border-none transition-all duration-300">
          <CardContent className="p-6 w-full grid grid-flow-col gap-5">
            <Leading variant="h3" className="text-2xl font-bold">
              Loading Achievements...
            </Leading>
          </CardContent>
        </Card>
      );
    }
  
    if (
      playerMVPs.length === 0 &&
      playerChamps.length === 0 &&
      playerConferenceChamps.length === 0
    ) {
      return (
        <Card className="bg-[#1e1e1e] border-none transition-all duration-300">
          <CardContent className="p-6 w-full grid grid-flow-col gap-5">
            <Leading variant="h3" className="text-2xl font-bold">
              No Achievements for this player
            </Leading>
          </CardContent>
        </Card>
      );
    }
  
    return (
      <Card className="bg-[#1e1e1e] border-none">
        <CardContent className="p-6 w-full grid md:grid-flow-col gap-5">
          {playerMVPs.length > 0 && <MVPCard mvpYears={playerMVPs} />}
  
          {playerChamps.length > 0 && (
            <Card className="bg-[#1e1e1e] border-none transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <Trophy className="w-12 h-12 text-yellow-400 mb-2" />
                  <Leading variant="h3" className="text-2xl font-bold mb-2">
                    NBA Championships
                  </Leading>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {playerChamps.map((year) => (
                    <span
                      key={year.year}
                      className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold"
                    >
                      {year.year}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
  
          {playerConferenceChamps.length > 0 && (
            <Card className="bg-[#1e1e1e] border-none transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <Trophy className="w-12 h-12 text-blue-400 mb-2" />
                  <Leading
                    variant="h3"
                    className="text-2xl font-bold mb-2 text-center whitespace-nowrap"
                  >
                    Conference Championships
                  </Leading>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {playerConferenceChamps.map((year) => (
                    <span
                      key={year.year}
                      className="bg-blue-400 text-black px-3 py-1 rounded-full font-bold"
                    >
                      {year.year}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    );
  };
  