/**
 * ロガー
 * 各ログレベルは『システム運用アンチパターン』の「3.5.2 何を記録すべきか？」を参考
 *
 */
export type Logger = {
  /**
   * プログラム内で起こっていることに関連するあらゆる情報。デバッグのためのメッセージなど
   *
   * @param {object} obj
   */
  debug(obj: object): void;
  /**
   * ユーザが開始したアクションや、スケジュールされたタスクの実行、システムのスタートアップやシャットダウンなどのシステム操作
   *
   * @param {object} obj
   */
  info(obj: object): void;
  /**
   * 将来的にエラーになる可能性の状態。ライブラリ廃止警告、使用可能リソースの不足、パフォーマンス低下など
   *
   * @param {object} obj
   */
  warn(obj: object): void;
  /**
   * すべてのエラー状態
   *
   * @param {object} obj
   */
  error(obj: object): void;
};

export class LoggerImpl implements Logger {
  debug(obj: object): void {
    console.log(JSON.stringify({ ...obj, logLevel: "DEBUG" }));
  }

  info(obj: object): void {
    console.log(JSON.stringify({ ...obj, logLevel: "INFO" }));
  }

  warn(obj: object): void {
    console.warn(JSON.stringify({ ...obj, logLevel: "WARN" }));
  }

  error(obj: object): void {
    console.error(JSON.stringify({ ...obj, logLevel: "ERROR" }));
  }
}
