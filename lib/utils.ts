import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now: number = Date.now();
  const createdAtTime: number = createdAt.getTime();
  const elapsedMilliseconds: number = now - createdAtTime;

  // Helper function to convert milliseconds to a readable format
  const formatTime = (value: number, unit: string) => {
    return value > 1 ? `${value} ${unit}s` : `${value} ${unit}`;
  };

  const secondsInMinute: number = 60;
  const minutesInHour: number = 60;
  const hoursInDay: number = 24;
  const daysInWeek: number = 7;
  const daysInYear: number = 365;

  if (elapsedMilliseconds < 1000) {
    return "Just now";
  } else if (elapsedMilliseconds < secondsInMinute * 1000) {
    const seconds = Math.floor(elapsedMilliseconds / 1000);
    return `${formatTime(seconds, "second")} ago`;
  } else if (elapsedMilliseconds < minutesInHour * secondsInMinute * 1000) {
    const minutes = Math.floor(elapsedMilliseconds / (secondsInMinute * 1000));
    return `${formatTime(minutes, "minute")} ago`;
  } else if (
    elapsedMilliseconds <
    hoursInDay * minutesInHour * secondsInMinute * 1000
  ) {
    const hours = Math.floor(
      elapsedMilliseconds / (minutesInHour * secondsInMinute * 1000)
    );
    return `${formatTime(hours, "hour")} ago`;
  } else if (
    elapsedMilliseconds <
    daysInWeek * hoursInDay * minutesInHour * secondsInMinute * 1000
  ) {
    const days = Math.floor(
      elapsedMilliseconds /
        (hoursInDay * minutesInHour * secondsInMinute * 1000)
    );
    return `${formatTime(days, "day")} ago`;
  } else if (
    elapsedMilliseconds <
    daysInYear * hoursInDay * minutesInHour * secondsInMinute * 1000
  ) {
    const weeks = Math.floor(
      elapsedMilliseconds /
        (daysInWeek * hoursInDay * minutesInHour * secondsInMinute * 1000)
    );
    return `${formatTime(weeks, "week")} ago`;
  } else {
    const years = Math.floor(
      elapsedMilliseconds /
        (daysInYear * hoursInDay * minutesInHour * secondsInMinute * 1000)
    );
    return `${formatTime(years, "year")} ago`;
  }
};

export const formatAndDivideNumber = (number: number): string => {
  if (number >= 1000000) {
    const millions = (number / 1000000).toFixed(2);
    return millions + "M";
  } else if (number >= 1000) {
    const thousands = (number / 1000).toFixed(2);
    return thousands + "K";
  } else {
    return number.toString();
  }
};
