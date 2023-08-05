export const getWeekDay = (date: Date) =>
  new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(date);
