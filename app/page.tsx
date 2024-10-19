import { Players } from "@/components/players/Players";
import { Teams } from "@/components/teams/Teams";
import { Leading } from "@/components/typography/Leading";
import { PlayerData, TeamData } from "./types/types";

export default function Home() {
  const nbaTeams: TeamData[] = [
    {
      id: 1,
      name: "Atlanta Hawks",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg",
    },
    {
      id: 2,
      name: "Boston Celtics",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/800px-Boston_Celtics.svg.png",
    },
    {
      id: 3,
      name: "Brooklyn Nets",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/800px-Brooklyn_Nets_newlogo.svg.png",
    },
    {
      id: 4,
      name: "Charlotte Hornets",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg",
    },
    {
      id: 5,
      name: "Chicago Bulls",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg",
    },
    {
      id: 6,
      name: "Cleveland Cavaliers",
      logo: "https://seeklogo.com/images/N/nba-cleveland-cavaliers-logo-EC287BF14E-seeklogo.com.png",
    },
    {
      id: 7,
      name: "Dallas Mavericks",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg",
    },
    {
      id: 8,
      name: "Denver Nuggets",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg",
    },
    {
      id: 9,
      name: "Detroit Pistons",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_of_the_Detroit_Pistons.png",
    },
    {
      id: 10,
      name: "Golden State Warriors",
      logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
    },
    {
      id: 11,
      name: "Houston Rockets",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg",
    },
    {
      id: 12,
      name: "Indiana Pacers",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg",
    },
    {
      id: 13,
      name: "LA Clippers",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/1200px-Los_Angeles_Clippers_%282024%29.svg.png",
    },
    {
      id: 14,
      name: "Los Angeles Lakers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png",
    },
    {
      id: 15,
      name: "Memphis Grizzlies",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg",
    },
    {
      id: 16,
      name: "Miami Heat",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png",
    },
    {
      id: 17,
      name: "Milwaukee Bucks",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/640px-Milwaukee_Bucks_logo.svg.png",
    },
    {
      id: 18,
      name: "Minnesota Timberwolves",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg",
    },
    {
      id: 19,
      name: "New Orleans Pelicans",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg",
    },
    {
      id: 20,
      name: "New York Knicks",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
    },
    {
      id: 21,
      name: "Oklahoma City Thunder",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg",
    },
    {
      id: 22,
      name: "Orlando Magic",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg",
    },
    {
      id: 23,
      name: "Philadelphia 76ers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Philadelphia-76ers-Logo-1977-1996.png",
    },
    {
      id: 24,
      name: "Phoenix Suns",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg",
    },
    {
      id: 25,
      name: "Portland Trail Blazers",
      logo: "https://s.yimg.com/cv/apiv2/default/nba/20181221/500x500/trailblazers_wbgs.png",
    },
    {
      id: 26,
      name: "Sacramento Kings",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg",
    },
    {
      id: 27,
      name: "San Antonio Spurs",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg",
    },
    {
      id: 28,
      name: "Toronto Raptors",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg",
    },
    {
      id: 29,
      name: "Utah Jazz",
      logo: "https://b.fssta.com/uploads/application/nba/team-logos/Jazz.vresize.350.350.medium.0.png",
    },
    {
      id: 30,
      name: "Washington Wizards",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg",
    },
  ];

  const nbaPlayers: PlayerData[] = [
    {
      id: 0,
      name: "James Harden",
      team: "Los Angeles Clippers",
      position: "SG",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png",
    },
    {
      id: 1,
      name: "LeBron James",
      team: "Los Angeles Lakers",
      position: "SF",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    },
    {
      id: 2,
      name: "Stephen Curry",
      team: "Golden State Warriors",
      position: "PG",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    },
    {
      id: 3,
      name: "Kevin Durant",
      team: "Phoenix Suns",
      position: "SF",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
    },
    {
      id: 4,
      name: "Giannis Antetokounmpo",
      team: "Milwaukee Bucks",
      position: "PF",
      image: "https://pics.craiyon.com/2023-10-20/bb34eede4d3843a787ab2251d1f5d74b.webp",
    },
    {
      id: 5,
      name: "Nikola Jokic",
      team: "Denver Nuggets",
      position: "C",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
    },
    {
      id: 6,
      name: "Joel Embiid",
      team: "Philadelphia 76ers",
      position: "C",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png",
    },
    {
      id: 7,
      name: "Luka Doncic",
      team: "Dallas Mavericks",
      position: "PG",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
    },
    {
      id: 8,
      name: "Kawhi Leonard",
      team: "LA Clippers",
      position: "SF",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png",
    },
    {
      id: 9,
      name: "Jayson Tatum",
      team: "Boston Celtics",
      position: "SF",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
    },
  ];

  return (
    <main className="flex flex-col gap-20 p-10">
      <section className="grid grid-rows-auto-1fr gap-4">
        <Leading variant={"h2"}>Equipos de la NBA</Leading>
        <Teams teams={nbaTeams} />
      </section>
      <section className="grid grid-rows-auto-1fr gap-4">
        <Leading variant={"h2"}>Jugadores Destacados</Leading>
        <Players players={nbaPlayers}/>
      </section>
    </main>
  );
}
