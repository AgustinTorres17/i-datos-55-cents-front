import { fetchData } from "../helpers/fetchHelper";
import { TeamStats, PlayerStats, TeamData } from "../types/types";

interface Player {
  id_player: number;
  year: string;
  team: string;
  season: string;
  id: number;
  name: string;
  imageurl: string;
  abreviation: string;
  position: string;
  nba_id: string;
  games: string;
  games_started: number;
  minutes_played: number;
  pts: number;
  ast: number;
  trb: number;
  fg: number;
  fga: number;
  fg_percentage: number;
  three_points: number;
  three_pa: number;
  three_p_percentage: number;
  orb: number;
  drb: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  two_points: number;
  two_pa: number;
  two_p_percentage: number;
  efg_percentage: number;
  ft: number;
  fta: number;
  ft_percentage: number;
}



export const fetchTeam = async (teamId: number) => {
  try {
    const data = await fetchData(`teams/${teamId}`);
    return data;
  } catch (error) {
    console.error("Error fetching team", error);
  }
}


export const fetchTeamData = async (teamId: number, year: string) => {
  try {
    const data: TeamStats = await fetchData(`teams/${teamId}/${year}`);
    return data;
  } catch (error) {
    console.error("Error fetching team data", error);
  }
};



export const fetchTeamPlayersData = async (teamId: number, year: string) => {
  try {
    console.log(teamId, year);
    const data = await fetchData(`teams/${teamId}/${year}/players`);
    console.log(data);
    const formattedData: PlayerStats[] = data.map((player: Player) => {
      return {
        stats: {
          games: parseInt(player.games),
          games_started: player.games_started,
          minutes_played: player.minutes_played,
          pts: player.pts,
          ast: player.ast,
          trb: player.trb,
          fg: player.fg,
          fga: player.fga,
          fg_percentage: player.fg_percentage,
          three_points: player.three_points,
          three_pa: player.three_pa,
          three_p_percentage: player.three_p_percentage,
          orb: player.orb,
          drb: player.drb,
          stl: player.stl,
          blk: player.blk,
          tov: player.tov,
          pf: player.pf,
          two_points: player.two_points,
          two_pa: player.two_pa,
          two_p_percentage: player.two_p_percentage,
          efg_percentage: player.efg_percentage,
          ft: player.ft,
          fta: player.fta,
          ft_percentage: player.ft_percentage,
        },
        id_player: player.id_player,
        year: player.year,
        team: player.team,
        season: player.season,
        id: player.id,
        name: player.name,
        imageurl: player.imageurl,
        abreviation: player.abreviation,
        position: player.position,
        nba_id: player.nba_id,
      };
    });
    return formattedData;
  } catch (error) {
    console.error("Error fetching team players data", error);
    throw error;
  }
};

export const fetchBestTeams = async () => {
  try {
    const data = await fetchData("teams");
    const sortedData = data.sort((a: TeamData, b: TeamData) => {
      return a.id - b.id;
    });
    return sortedData;
  } catch (error) {
    console.error("Error fetching best teams", error);
  }
};



export const fetchChampions = async (teamId: number) => {
  try {
    const data = await fetchData(`champions/${teamId}`);
    return data;
  } catch (error) {
    console.error("Error fetching championships", error);
  }
};




export const fetchConferenceChampions = async (teamId: number) => {
  try {
    const data = await fetchData(`conference_champions/${teamId}`);
    return data;
  } catch (error) {
    console.error("Error fetching championships", error);
  }
};