import "./GameDetail.css";
import GameNotFound from "./404";
import { useEffect } from "react";
import useApiHandler from "../customHooks/useApiHandler";
import useGameDataContext from "../customHooks/useGameDataContext";
import GameDetailNav from "./GameDetailNav";
import ScreenshotSection from "./ScreenshotSection";
import GameOverview from "./GameOverview";
import LoadingComponent from "./LoadingComponent";

const GameDetail = () => {
  const { gameId, RAWG_API_KEY } = useGameDataContext();

  const screenshotUrl = `https://api.rawg.io/api/games/${gameId}/screenshots?key=${RAWG_API_KEY}&page_size=5`;

  const {
    data: screenshotData,
    loading: screenshotsLoading,
    refetch: newScreenshots,
  } = useApiHandler(screenshotUrl);

  const {
    data: detailData,
    loading: detailLoading,
    error: detailError,
    refetch: newDetail,
    setError: setDetailError,
  } = useApiHandler(
    `https://api.rawg.io/api/games/${gameId}?key=${RAWG_API_KEY}`
  );

  useEffect(() => {
    newDetail(`https://api.rawg.io/api/games/${gameId}?key=${RAWG_API_KEY}`);
    newScreenshots(
      `https://api.rawg.io/api/games/${gameId}/screenshots?key=${RAWG_API_KEY}&page_size=5`
    );
  }, [gameId]);

  return (
    <>
      <section className="game-detail">
        {(detailLoading && screenshotsLoading) ? (
          <LoadingComponent />
        ) : (
          <>
            {detailError && <GameNotFound setError={setDetailError} />}
            {detailData && (
              <>
                <GameDetailNav name={detailData.name} />
                <section className="game-detail-content">
                  <ScreenshotSection
                    screenshotData={screenshotData}
                    screenshotsLoading={screenshotsLoading}
                  />
                  <GameOverview detailData={detailData} />
                </section>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default GameDetail;
