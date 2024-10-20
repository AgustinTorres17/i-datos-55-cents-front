// playerService.tsx
import { fetchData } from "../helpers/fetchHelper";
import { ChampionshipsType, MVPType, PlayerData, PlayerStats } from "../types/types";
export const fetchPlayerData = async (playerId: number) => {
  const playerInfo: PlayerData = await fetchData(`player/${playerId}`);
  return playerInfo;
};

export const fetchPlayerStats = async (playerId: number, year: string) => {
  const data = await fetchData(`player/stats/${playerId}/${year}`);
  if (data.length === 0) {  
    return null;
  }
  const playerStats = data.find((elem: PlayerStats) => elem.team === "TOT") || data[0];
  const formattedStats: PlayerStats = {
    stats: {
      games: playerStats.games,
      games_started: playerStats.games_started,
      minutes_played: playerStats.minutes_played,
      pts: playerStats.pts,
      ast: playerStats.ast,
      trb: playerStats.trb,
      fg: playerStats.fg,
      fga: playerStats.fga,
      fg_percentage: playerStats.fg_percentage,
      three_points: playerStats.three_points,
      three_pa: playerStats.three_pa,
      three_p_percentage: playerStats.three_p_percentage,
      orb: playerStats.orb,
      drb: playerStats.drb,
      stl: playerStats.stl,
      blk: playerStats.blk,
      tov: playerStats.tov,
      pf: playerStats.pf,
      two_points: playerStats.two_points,
      two_pa: playerStats.two_pa,
      two_p_percentage: playerStats.two_p_percentage,
      efg_percentage: playerStats.efg_percentage,
      ft: playerStats.ft,
      fta: playerStats.fta,
      ft_percentage: playerStats.ft_percentage,
    },
  };
  return formattedStats;
};

export const fetchBestPlayers = async () => {
  try {
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:31234';
    const response = await fetch(`${BACKEND_URL}/api/best_players`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching best players", error);
  }
};

export const fetchPlayerMVPs = async (id: number) => {
  try {
    const data: MVPType[] = await fetchData(`/mvps/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching player mvps", error);
  }
}

export const fetchPlayerChamps = async (id: number) => {
  try {
    const data: ChampionshipsType[] = await fetchData(`player/championships/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching player championships", error);
  }
}

export const fetchPlayerConferenceChamps = async (id: number) => {
  try {
    const data: ChampionshipsType[] = await fetchData(`player/conference_championships/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching player conference championships", error);
  }
}
