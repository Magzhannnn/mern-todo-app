const padTo2Digits = (num: number) => num.toString().padStart(2, "0");

export const toDatestring = (date: string) => {
  const [date1, date2] = date.split("T");

  const dateOclock = date2.split(".")[0];
  const hour = padTo2Digits(+dateOclock.split(":")[0] + 6);
  const minute = dateOclock.split(":")[1];
  const seconds = dateOclock.split(":")[2];

  return date1 + " " + [hour, minute, seconds].join(":");
};
