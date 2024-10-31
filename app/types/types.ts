export type TeamData = {
  id: number;
  name: string;
  imageurl: string;
};

export type PlayerData = {
  id_player: number;
  name: string;
  team: string;
  position: string;
  nba_id: string;
};

export type PlayerStats = {
  stats: {
    games: number;
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
  };
  id_player?: number;
  year?: string;
  team?: string;
  season?: string;
  id?: number;
  name?: string;
  imageurl?: string;
  abreviation?: string;
  position?: string;
  nba_id?: string;
};

export type TeamStats = {
  idteam: number;
  year: string;
  games: number;
  fg: number;
  fga: number;
  fg_percentage: number;
  three_points: number;
  three_pa: number;
  three_p_percentage: number;
  ft: number;
  fta: number;
  ft_percentage: number;
  orb: number;
  drb: number;
  trb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  pts: number;
  eff: number;
  deff: number;
  id: number;
  name: string;
  imageurl: string;
  abreviation: string;
};

export type TeamInfo = {
  games: number;
  fg: number;
  fga: number;
  fg_percentage: number;
  three_points: number;
  three_pa: number;
  three_p_percentage: number;
  ft: number;
  fta: number;
  ft_percentage: number;
  orb: number;
  drb: number;
  trb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  pts: number;
  eff: number;
  deff: number;
}

export type ChampionshipsType = {
  idteam: number;
  year: string;
};

export type MVPType = {
  idplayer: number;
  year: string;
};
