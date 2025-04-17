export type Config = {
  stageName: "DEV" | "STG" | "PRD" | "LOCAL" | "TEST";
  liffId: string;
  mockedApi: boolean; //  LIFF SDKのモックを使うかどうか
  repositoryName: string;
};
