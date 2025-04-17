import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { useLiff } from "./hooks/useLiff";
import { LoadingPage } from "./pages/LoadingPage";
import { config } from "@/config";
import { Router } from "@/routes";
import "./index.css";

export const App = (): JSX.Element => {
  const { initialized } = useLiff();
  if (!initialized) return <LoadingPage />;

  return (
    <SWRConfig
      value={{
        // エラー時にリトライを行わない
        shouldRetryOnError: false,
        // ウィンドウがフォーカスされた時の自動データ取得をOFF
        revalidateOnFocus: false,
        // オンライン復帰時の自動データ取得をOFF
        revalidateOnReconnect: false,
        // アプリ全体でsuspenseはデフォルト有効
        suspense: true,
      }}
    >
      <Suspense fallback={<LoadingPage />}>
        {/* GitHub Pages上でパスにRepository名が入るため */}
        <BrowserRouter basename={config.repositoryName}>
          <Router />
        </BrowserRouter>
      </Suspense>
    </SWRConfig>
  );
};
