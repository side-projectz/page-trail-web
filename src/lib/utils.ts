import { type ClassValue, clsx } from "clsx";
import { DateTime } from "luxon";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimelineData(_start: Date, _end: Date) {
  const start = DateTime.fromJSDate(_start);
  const end = DateTime.fromJSDate(_end);

  const duration = end.diff(start).as("milliseconds");

  return {
    duration: duration,
    date: start.toFormat("yyyy-M-d"),
  };
}
