export const checkDate = (date) => {
  const re = /(20\d{2})(\d{2})(\d{2})/;
  return re.exec(date);
};
