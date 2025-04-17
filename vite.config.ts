import { UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import devcert from "devcert";
import * as appConfig from "./src/config";

export default async (): Promise<UserConfigExport> => {
  const { key, cert } = await devcert.certificateFor("localhost");

  const defaultConfig: UserConfigExport = {
    plugins: [react()],
    resolve: {
      alias: {
        "@/": path.join(__dirname, "src/"),
      },
    },
  };

  if (process.env.MODE === "LOCAL") {
    return {
      ...defaultConfig,
      server: {
        port: 3000,
        open: true,
        https: {
          key,
          cert,
        },
      },
    };
  }
  if (process.env.MODE === "TEST") {
    return {
      ...defaultConfig,
      server: {
        host: true,
        port: 3001,
      },
    };
  }

  // GitHub Pagesデプロイ用ビルド
  return { ...defaultConfig, base: appConfig.config.repositoryName };
};
