export const getYears = () => {
  const currentYear = 2022;
  const years = [];
  for (let i = currentYear; i >= 1998; i--) {
    years.push(`${i-1}-${i}`);
  }
  return years;
};
