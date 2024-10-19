// teamService.tsx
interface PlayerStats {
    points: number;
    assists: number;
    rebounds: number;
  }
  
  interface Player {
    id: number;
    name: string;
    position: string;
    number: string;
    stats: PlayerStats;
    image: string;
  }
  
interface TeamInfo {
    id: number;
    name: string;
    logo: string;
    players: { [year: number]: Player[] };
    championships: number[];
  }

export const fetchTeamData = async (teamId: number, year: number) => {
  console.log(`Fetching team data for team ${teamId} in year ${year}`);
  const teamInfo: TeamInfo = {
    id: 1,
    name: "Los Angeles Lakers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png",
    players: {
      2023: [
        {
          id: 1,
          name: "LeBron James",
          position: "SF",
          number: "6",
          stats: { points: 27.2, assists: 7.3, rebounds: 7.5 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        },
        {
          id: 2,
          name: "Anthony Davis",
          position: "PF",
          number: "3",
          stats: { points: 25.9, assists: 2.6, rebounds: 12.5 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png",
        },
        {
          id: 3,
          name: "D'Angelo Russell",
          position: "PG",
          number: "1",
          stats: { points: 17.8, assists: 6.1, rebounds: 3.0 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1626156.png",
        },
        {
          id: 4,
          name: "Austin Reaves",
          position: "SG",
          number: "15",
          stats: { points: 13.0, assists: 3.4, rebounds: 3.0 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png",
        },
        {
          id: 5,
          name: "Rui Hachimura",
          position: "PF",
          number: "28",
          stats: { points: 11.2, assists: 0.9, rebounds: 4.5 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1629060.png",
        },
        {
          id: 6,
          name: "Jarred Vanderbilt",
          position: "PF",
          number: "2",
          stats: { points: 7.9, assists: 1.6, rebounds: 7.5 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1629020.png",
        },
      ],
      2022: [
        {
          id: 1,
          name: "LeBron James",
          position: "SF",
          number: "6",
          stats: { points: 30.3, assists: 6.2, rebounds: 8.2 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        },
        {
          id: 2,
          name: "Russell Westbrook",
          position: "PG",
          number: "0",
          stats: { points: 18.5, assists: 7.1, rebounds: 7.4 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png",
        },
        {
          id: 3,
          name: "Anthony Davis",
          position: "PF",
          number: "3",
          stats: { points: 23.2, assists: 3.1, rebounds: 9.9 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png",
        },
        {
          id: 4,
          name: "Malik Monk",
          position: "SG",
          number: "11",
          stats: { points: 13.8, assists: 2.9, rebounds: 3.4 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1628370.png",
        },
        {
          id: 5,
          name: "Carmelo Anthony",
          position: "PF",
          number: "7",
          stats: { points: 13.3, assists: 1.0, rebounds: 4.2 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2546.png",
        },
        {
          id: 6,
          name: "Talen Horton-Tucker",
          position: "SG",
          number: "5",
          stats: { points: 10.0, assists: 2.7, rebounds: 3.2 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1629659.png",
        },
        {
          id: 7,
          name: "Dwight Howard",
          position: "C",
          number: "39",
          stats: { points: 6.2, assists: 0.6, rebounds: 5.9 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png",
        },
        {
          id: 8,
          name: "Avery Bradley",
          position: "SG",
          number: "20",
          stats: { points: 6.4, assists: 0.8, rebounds: 2.2 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/202340.png",
        },
        {
          id: 9,
          name: "Stanley Johnson",
          position: "SF",
          number: "14",
          stats: { points: 6.7, assists: 1.7, rebounds: 3.2 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1626169.png",
        },
        {
          id: 10,
          name: "Wayne Ellington",
          position: "SG",
          number: "2",
          stats: { points: 6.7, assists: 0.7, rebounds: 1.8 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201961.png",
        },
        {
          id: 11,
          name: "Kent Bazemore",
          position: "SF",
          number: "9",
          stats: { points: 3.4, assists: 0.9, rebounds: 1.8 },
          image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203145.png",
        },
        {
          id: 12,
          name: "Austin Reaves",
          position: "SG",
          number: "15",
          stats: { points: 7.3, assists: 1.8, rebounds: 3.2 },
          image:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png",
        },
      ],
    },

    championships: [
      2020, 2010, 2009, 2002, 2001, 2000, 1988, 1987, 1985, 1982, 1980, 1972,
    ],
  };

  return teamInfo;
};
