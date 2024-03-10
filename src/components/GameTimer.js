import React, { useContext , useEffect } from "react";
import TimerBanner from "../Assets/timer-banner.png";


const GameTimer = ({ isActiveScreen2 , Timer}) => {

  return (
    <>
      <div className="game-timer-cover-wrapper">
        <div className="timer-content-box">
          <h5>Time slot</h5>

          {!isActiveScreen2 ? (
            <div className="timer-banner">
              <img src={TimerBanner}></img>
            </div>
          ) : (
            <div className="timer-box">
              <h3>{Timer}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameTimer;
