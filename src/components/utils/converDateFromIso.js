export const convertDateFromIso = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getUTCDate().toString().padStart(2, "0");
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}`;
};
