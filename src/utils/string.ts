import { config } from "@/config";

export const buildAppTitle = (pageTitle: string): string => {
  if (config.stageName === "PRD") return pageTitle;
  return `[${config.stageName}]${pageTitle}`;
};
