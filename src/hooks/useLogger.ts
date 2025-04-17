import { useMemo } from "react";
import { buildLogger } from "@/support/logger";
import { type Logger } from "@/support/logger/logger";

export const useLogger = (): { logger: Logger } => {
  const logger = useMemo(() => buildLogger(), []);
  return {
    logger,
  };
};
