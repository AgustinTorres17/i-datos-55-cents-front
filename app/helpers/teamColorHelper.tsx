// Define el array de equipos y sus colores
const nbaTeams: { id: number; color: string }[] = [
  { id: 1, color: "bg-red-600" }, // Atlanta Hawks
  { id: 2, color: "bg-green-600" }, // Boston Celtics
  { id: 3, color: "bg-black" }, // Brooklyn Nets
  { id: 4, color: "bg-teal-600" }, // Charlotte Hornets
  { id: 5, color: "bg-red-800" }, // Chicago Bulls
  { id: 6, color: "bg-red-700" }, // Cleveland Cavaliers
  { id: 7, color: "bg-blue-600" }, // Dallas Mavericks
  { id: 8, color: "bg-yellow-600" }, // Denver Nuggets
  { id: 9, color: "bg-blue-700" }, // Detroit Pistons
  { id: 10, color: "bg-blue-500" }, // Golden State Warriors
  { id: 11, color: "bg-red-700" }, // Houston Rockets
  { id: 12, color: "bg-yellow-500" }, // Indiana Pacers
  { id: 13, color: "bg-white" }, // LA Clippers
  { id: 14, color: "bg-purple-600" }, // Los Angeles Lakers
  { id: 15, color: "bg-blue-200" }, // Memphis Grizzlies
  { id: 16, color: "bg-red-600" }, // Miami Heat
  { id: 17, color: "bg-green-700" }, // Milwaukee Bucks
  { id: 18, color: "bg-blue-900" }, // Minnesota Timberwolves
  { id: 19, color: "bg-blue-800" }, // New Orleans Pelicans
  { id: 20, color: "bg-orange-600" }, // New York Knicks
  { id: 21, color: "bg-blue-500" }, // Oklahoma City Thunder
  { id: 22, color: "bg-blue-700" }, // Orlando Magic
  { id: 23, color: "bg-blue-600" }, // Philadelphia 76ers
  { id: 24, color: "bg-purple-600" }, // Phoenix Suns
  { id: 25, color: "bg-red-600" }, // Portland Trail Blazers
  { id: 26, color: "bg-purple-700" }, // Sacramento Kings
  { id: 27, color: "bg-gray-600" }, // San Antonio Spurs
  { id: 28, color: "bg-red-700" }, // Toronto Raptors
  { id: 29, color: "bg-yellow-500" }, // Utah Jazz
  { id: 30, color: "bg-blue-500" }, // Washington Wizards
];

export const getTeamColor = (teamId: number): string => {
  const team = nbaTeams.find((team) => team.id === teamId);
  return team ? team.color : "bg-gray-500";
};
