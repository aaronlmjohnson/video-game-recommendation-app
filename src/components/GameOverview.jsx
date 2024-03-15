import { useState } from "react";
import GameDetailList from "./GameDetailList";

const GameOverview = ({ detailData}) => {

    const limitDescription = (description)=>{
        const strArr = description.split('.' || '?' || '!');
        return [strArr[0], strArr[1], strArr[2]].join('.').slice(0, 300) +"...";
    }

  return (
    <aside className="game-details-section">
      <img
        className="game-details-section-img"
        src={detailData.background_image}
        alt={detailData.name}
      />
      <p>{limitDescription(detailData.description_raw)}</p>
      <GameDetailList properties={detailData} />
    </aside>
  );
};

export default GameOverview;
