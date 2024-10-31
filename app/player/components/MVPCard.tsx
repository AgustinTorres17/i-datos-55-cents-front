import { MVPType } from "@/app/types/types";
import { Leading } from "@/components/typography/Leading";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import React from "react";

interface MVPCardProps {
  mvpYears: MVPType[];
}
export const MVPCard = ({ mvpYears }: MVPCardProps) => {
  return (
    <Card className="bg-[#1e1e1e] border-none  transition-all duration-300 w-full">
      <CardContent className="p-4 flex flex-col items-center justify-between">
        <Trophy className="w-12 h-12 text-orange-400 mb-2" />
        <Leading variant="h3" className="text-2xl font-bold mb-2">
          MVP
        </Leading>
        <div className="flex flex-wrap justify-center gap-2">
          {mvpYears.map((year) => (
            <span
              key={year.year}
              className="bg-orange-400 text-black px-3 py-1 rounded-full font-bold"
            >
              {year.year}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
