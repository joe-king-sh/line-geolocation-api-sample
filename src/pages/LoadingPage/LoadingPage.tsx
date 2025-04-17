import { Helmet } from "react-helmet-async";
import { Spinner } from "@/components/Spinner";
import { buildAppTitle } from "@/utils/string";

export const LoadingPage = () => (
  <>
    <Helmet>
      <title>{buildAppTitle("読み込み中")}</title>
    </Helmet>
    <div className="flex size-full items-center justify-center">
      <Spinner />
    </div>
  </>
);
