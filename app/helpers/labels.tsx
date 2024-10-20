export const getLabels = (key: string): string => {
    const labels: { [key: string]: string } = {
      games: "Partidos",
      games_started: "Partidos como Titular",
      minutes_played: "Minutos Jugados",
      pts: "Promedio de Puntos",
      ast: "Asistencias",
      trb: "Rebotes Totales",
      fg: "Tiros Encestados",
      fga: "Tiros Intentados",
      fg_percentage: "% de tiros de Campo",
      three_points: "Triples Encestados",
      three_pa: "Triples Intentados",
      three_p_percentage: "% de Triples",
      orb: "Rebotes Ofensivos",
      drb: "Rebotes Defensivos",
      stl: "Robos",
      blk: "Bloqueos",
      tov: "Pérdidas",
      pf: "Faltas Personales",
      two_points: "Dobles Encestados",
      two_pa: "Dobles Intentados",
      two_p_percentage: "% de Dobles",
      efg_percentage: "% de Efectividad de Tiro",
      ft: "Tiros Libres Encestados",
      fta: "Tiros Libres Intentados",
      ft_percentage: "Porcentaje de Tiros Libres",
    };
  
    return labels[key] || key;
  };
  