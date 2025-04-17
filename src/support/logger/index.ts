import { type Logger, LoggerImpl } from "./logger";

/**
 * ロガーを作成して返す
 */
export const buildLogger = (): Logger => new LoggerImpl();
