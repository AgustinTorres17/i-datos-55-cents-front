// playerService.tsx

export const fetchPlayerData = async (playerId: number) => {
    // Por ahora, la función retorna los datos estáticos que ya tenemos
    const playerInfo = {
      id: playerId,
      name: "Lebron James",
      team: "Los Angeles Lakers",
      position: "Small Forward",
      number: "6",
      height: "6'9\"",
      weight: "250 lbs",
      born: "December 30, 1984",
      stats: {
        points: 27.2,
        assists: 7.3,
        rebounds: 7.5,
        offRebounds: 1.2,
        defRebounds: 6.3,
        steals: 1.6,
        blocks: 0.7,
        turnovers: 4.0,
        fouls: 2.3,
        minutes: 36.4,
        fieldGoals: "44.0 %",
        threePoints: "35.0 %",
        freeThrows: "85.0 %",
      },
      hasMvp: true,
      mvpYear: [2009, 2010, 2012, 2013, 2016, 2018],
      trophies: true,
      trophyYear: [2012, 2013, 2016, 2020],
    };
  
    return playerInfo;
  };