import { Card, CardContent } from "@/components/ui/card";
import { Leading } from "@/components/typography/Leading";
import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchConferenceChampions } from "@/app/services/teamService";
import { ChampionshipsType } from "@/app/types/types";

interface ChampionshipCardProps {
  id: number;
}

export const ConferenceCard = ({ id }: ChampionshipCardProps) => {
  const [championships, setChampionships] = useState<ChampionshipsType[]>([]);
  useEffect(() => {
    const fetchChampionships = async () => {
      const data = await fetchConferenceChampions(id);
      setChampionships(data);
    };
    fetchChampionships();
  }, [id]);
  return (
    <Card className="bg-[#1e1e1e] border-none transition-all duration-300">
      <CardContent className="p-4 flex flex-col items-center gap-2">
        <div className="flex flex-col items-center">
          <Trophy className="w-12 h-12 text-blue-400 mb-2" />
          <Leading variant="h2" className="text-2xl font-bold mb-2">
            NBA Conference Championships
          </Leading>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {championships &&
            championships.map((year) => (
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
  );
};
