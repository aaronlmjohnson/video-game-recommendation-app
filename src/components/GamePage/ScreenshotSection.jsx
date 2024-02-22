import { useState } from "react";
import ScreenshotCarousel from "../ScreenshotCarousel/ScreenshotCarousel";

const ScreenshotSection = ({ screenshotData, screenshotsLoading }) => {
  const [mainScreenshot, setMainScreenshot] = useState(null);

  return (
    <section className="screenshot-section">
      {screenshotData && screenshotData.results.length > 1 && (
        <img src={mainScreenshot} alt="#" />
      )}
      <ScreenshotCarousel
        mainScreenshot={mainScreenshot}
        setMainScreenshot={setMainScreenshot}
        screenshotData={screenshotData}
        screenshots={screenshotsLoading}
      />
    </section>
  );
};

export default ScreenshotSection;
