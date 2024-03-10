import React, {  useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import sound from "../Assets/cellbox_sound.wav"



const CellBox = ({ Num, cellArray, mainArray, setMainArray , randomColor , Scores , TotalGameLives , setTotalGameLives , setScores}) => {

  const [cellValue, setCellValue] = useState(null);
  const [playerLives , setPlayerLives] = useState(2)
  
  

  const playClickSound = () => {
    new Audio(sound).play()
  };


  const handleselectedCellBox = (cellnum) => {
      playClickSound()
    if (mainArray[0] === cellnum) {
      setCellValue("X");
      setMainArray((prev) => prev.filter((mynum) => mynum !== cellnum));
      setScores((prev) => prev + 100)
    }else{
      if(TotalGameLives === 0){
        return
      }else {
        if(TotalGameLives > 0){
          setTotalGameLives((prev) =>  prev - 1)
          toast("1 Lives Loose !", { autoClose: 400 });
        }
        
      } 
    }
  };


  return (
    <>
      <div
        className={
          cellValue ? "cellbox-cover-wrapper add-bg" : "cellbox-cover-wrapper"
        }
        style={{
          backgroundColor : randomColor
        }}
        onClick={() => handleselectedCellBox(Num)}
      >
        {cellValue ? <h2>{cellValue}</h2> : <h2>{Num}</h2>}
      </div>

      
    </>
  );
};

export default CellBox;
