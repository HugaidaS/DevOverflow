import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { findTech } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string): string => {
  const tech = findTech(techName);
  return tech ? `${tech.icon} colored` : "devicon-devicon-plain";
};

export const getTechDescription = (techName: string): string => {
  const tech = findTech(techName);
  return tech?.description ?? "A technology used in software development.";
};

export const getTimeStamp = (createdAt: Date) => {
  const date = new Date(createdAt);
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
