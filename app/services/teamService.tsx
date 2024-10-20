import { fetchData } from "../helpers/fetchHelper";
import { TeamStats, PlayerStats, TeamData } from "../types/types";



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
    console.log(teamId, year);
    const data: TeamStats = await fetchData(`teams/${teamId}/${year}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching team data", error);
  }
};



export const fetchTeamPlayersData = async (teamId: number, year: string) => {
  try {
    const data = await fetchData(`teams/${teamId}/${year}/players`);
    const formattedData: PlayerStats[] = data.map((player: any) => {
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