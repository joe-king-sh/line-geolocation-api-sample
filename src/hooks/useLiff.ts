import liff from "@line/liff";
import LiffMockPlugin from "@line/liff-mock";
import { useEffect } from "react";
import useSWRImmutable from "swr/immutable";
import { config } from "@/config";

export const useLiff = () => {
  const { data: initialized = false, mutate: setInitialized } =
    useSWRImmutable<boolean>("liffInitialized", null);

  useEffect(() => {
    const init = async () => {
      if (initialized) return;

      if (config.mockedApi) {
        // LIFF SDKをモックする
        liff.use(new LiffMockPlugin());
      }

      await liff
        .init({
          liffId: config.liffId,
          withLoginOnExternalBrowser: true,
          // @ts-expect-error mockのフィールドがTSで定義されていないエラーがでるので無視
          mock: config.mockedApi,
        })
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        .catch((error) => console.log({ error }, "useLiff liff.init() error"));

      await setInitialized(true);
    };

    void init();
  }, [initialized, setInitialized]);

  const idToken = initialized ? (liff.getIDToken() ?? undefined) : undefined;

  return { initialized, idToken };
};
