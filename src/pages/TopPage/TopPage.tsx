import { Helmet } from "react-helmet-async";
import { useLiff } from "@/hooks/useLiff";
import { buildAppTitle } from "@/utils/string";
import { useState } from "react";

export type TopPageViewProps = {
  idToken?: string;
  latitude?: number;
  longitude?: number;
  locationError?: string;
  isLoading: boolean;
  onGetLocation: () => void;
};

export const TopPageView = ({
  idToken,
  latitude,
  longitude,
  locationError,
  isLoading,
  onGetLocation,
}: TopPageViewProps): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{buildAppTitle("LINE ミニアプリの検証")}</title>
      </Helmet>

      <div className="px-5">LINE ミニアプリの検証用サイト</div>
      <div className="px-5">idToken: {idToken}</div>

      <div className="px-5 mt-4">
        <h2 className="text-lg font-bold mb-2">位置情報</h2>
        <button
          type="button"
          onClick={onGetLocation}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3"
          disabled={isLoading}
        >
          {isLoading ? "取得中..." : "位置情報を取得"}
        </button>

        {locationError ? (
          <div className="text-red-500">{locationError}</div>
        ) : latitude && longitude ? (
          <div>
            <div>緯度: {latitude}</div>
            <div>経度: {longitude}</div>
          </div>
        ) : isLoading ? (
          <div>位置情報を取得中...</div>
        ) : null}
      </div>
    </>
  );
};

export const TopPage = (): JSX.Element => {
  const { idToken } = useLiff();
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [locationError, setLocationError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetLocation = () => {
    setIsLoading(true);
    setLocationError(undefined);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setIsLoading(false);
        },
        (error) => {
          let errorMessage = "位置情報の取得に失敗しました";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "位置情報へのアクセスが拒否されました";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "位置情報が利用できません";
              break;
            case error.TIMEOUT:
              errorMessage = "位置情報の取得がタイムアウトしました";
              break;
          }
          setLocationError(errorMessage);
          setIsLoading(false);
        }
      );
    } else {
      setLocationError("お使いのブラウザは位置情報に対応していません");
      setIsLoading(false);
    }
  };

  return (
    <TopPageView
      idToken={idToken}
      latitude={latitude}
      longitude={longitude}
      locationError={locationError}
      isLoading={isLoading}
      onGetLocation={handleGetLocation}
    />
  );
};
