import { Helmet } from "react-helmet-async";
import { useLiff } from "@/hooks/useLiff";
import { buildAppTitle } from "@/utils/string";

export type TopPageViewProps = {
  idToken?: string;
};

export const TopPageView = ({ idToken }: TopPageViewProps): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{buildAppTitle("LINE ミニアプリの検証")}</title>
      </Helmet>

      <div className="px-5">LINE ミニアプリの検証用サイト</div>
      <div className="px-5">idToken: {idToken}</div>
    </>
  );
};

export const TopPage = (): JSX.Element => {
  const { idToken } = useLiff();

  return <TopPageView idToken={idToken} />;
};
