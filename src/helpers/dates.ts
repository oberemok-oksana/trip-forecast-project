export const getWeekDay = (date: Date) =>
  new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(date);

export const getMaxDate = () => {
  const today = new Date();
  const allowedPeriod = new Date();
  allowedPeriod.setDate(today.getDate() + 15);

  const maxPeriod = allowedPeriod.toISOString().split("T")[0];
  return maxPeriod;
};

export const formatStringDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  return formattedDate;
};
