import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};

export const getTimeStamp = (date: Date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Define time units and their thresholds in seconds
  const timeUnits = [
    { unit: "year", threshold: 365 * 24 * 60 * 60 },
    { unit: "month", threshold: 30 * 24 * 60 * 60 },
    { unit: "week", threshold: 7 * 24 * 60 * 60 },
    { unit: "day", threshold: 24 * 60 * 60 },
    { unit: "hour", threshold: 60 * 60 },
    { unit: "minute", threshold: 60 },
    { unit: "second", threshold: 1 },
  ];

  // Find the appropriate time unit
  for (const { unit, threshold } of timeUnits) {
    if (diffInSeconds >= threshold) {
      const value = Math.floor(diffInSeconds / threshold);
      return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
