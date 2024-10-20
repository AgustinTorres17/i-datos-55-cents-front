import { fetchTeam } from '@/app/services/teamService';
import { TeamData } from '@/app/types/types';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

interface TeamImageProps {
    id: number
    }
export const TeamImage = ({id}: TeamImageProps) => {
    const [teamInfo, setTeamInfo] = useState<TeamData | null>(null);
    useEffect(() => {
        const fetchTeamInfo = async () => {
            const teamData = await fetchTeam(id);
            if (!teamData) {
                return;
            }
            setTeamInfo(teamData[0]);
        };
        fetchTeamInfo();
    }, []);
    return (
        <>
          {teamInfo?.imageurl && (
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              src={teamInfo?.imageurl}
              alt={teamInfo?.name}
              className="w-40 h-40 object-contain mr-6"
            />
          )}
        </>
    )
}
