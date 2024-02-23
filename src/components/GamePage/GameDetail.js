import "./GameDetail.css";
import GameNotFound from "./404";
import { useEffect } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";
import useGameDataContext from "../../customHooks/useGameDataContext";
import GameDetailNav from "./GameDetailNav";
import ScreenshotSection from "./ScreenshotSection";
import GameOverview from "./GameOverview";
import Animation from "../../scripts/Animation";
const { WavyText } = Animation;

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
      <div className="overlay"></div>
      <section className="game-detail">
        {(detailLoading && screenshotsLoading) ? (
          <WavyText text={"Loading..."} />
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
