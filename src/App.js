import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState , useMemo } from "react";
import GameInstruction from "./components/GameInstruction";
import banner from "./Assets/Banner.jpg";
import CellBox from "./components/CellBox";
import { getRandomColor } from "./utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Levels } from "./constants";
import LevelBox from "./components/LevelBox";
import GameTimer from "./components/GameTimer";
import GameScore from "./components/GameScore";
import GameLives from "./components/GameLives";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GameOverModal from "./components/GameOverModal";



const App = () => {
  const [isActiveScreen1, setScreen1Active] = useState(false);
  const [isActiveScreen2, setScreen2Active] = useState(false);
  const [cellArray, setCellArray] = useState([]);
  const [mainArray, setMainArray] = useState([]);
  const [isGameStart , setGameStart] = useState(false);
  const [ selectedLevel , setSelectedLevel] =  useState(1);
  const [Timer , setTimer] = useState(0)
  const [Scores , setScores] = useState(0);
  const [TotalGameLives , setTotalGameLives] = useState(2);
  const [countNumber , setCountNumber] = useState(30)
  const [isGameOver , setGameOver] =  useState(false)


  useEffect(() => {
    setTimeout(() => {
      setScreen1Active(true);
    }, 150);
  }, []);

  const handleStartGame = () => {
    setTimeout(() => {
      setScreen1Active(false);
      setGameStart(true)
      setScreen2Active(true);
    }, 100);
  };

  useEffect(() => {
    const newArray = Array.from(
      { length: countNumber },
      (_, index) => index + 1
    );
    setCellArray(newArray);
    setMainArray(newArray);
  }, [countNumber]);

  useEffect(() =>{
    const intervalId = setInterval(() => {
      if(Timer > 0){
        setTimer((prev) => (prev > 0 ? prev - 1 : 0)); // Check if Timer is greater than 0 before decrementing
      }
    }, 1000);

    if(TotalGameLives === 0){
      clearInterval(intervalId)

    }

    return () => clearInterval(intervalId)
  },[isGameStart , setTimer , TotalGameLives])


  useEffect(() =>{
    setTimer(() =>{
      if(selectedLevel === Levels[selectedLevel-1]?.id){
        return Levels[selectedLevel-1].value
      }  
    })

  },[selectedLevel])

  useEffect(() =>{
    console.log(Levels[0]);
  },[])

  useEffect(() =>{
    function renderGameOver(){
      if(TotalGameLives === 0){
        setGameOver(true)
        setScreen2Active(false)
        console.log("working")
      }
    }
    renderGameOver()
  },[TotalGameLives])

  useEffect(() =>{
    if(isActiveScreen2 && Timer === 0){
      setGameOver(true)
      setScreen2Active(false)
    }
  },[Timer])



  const ScreenBox = useMemo(() => {
    let cellBoxes = [];
    for (let i = 0; i < countNumber; i++) {
      const randomColor = getRandomColor();
      cellBoxes.push(
        <CellBox
          key={i}
          Num={i + 1}
          cellArray={cellArray}
          mainArray={mainArray}
          setMainArray={setMainArray}
          randomColor={randomColor}
          Scores={Scores}
          setScores={setScores}
          TotalGameLives={TotalGameLives} 
          setTotalGameLives ={setTotalGameLives}

          
        />
      );
    }

    for (let i = cellBoxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cellBoxes[i], cellBoxes[j]] = [cellBoxes[j], cellBoxes[i]];
    }
    return cellBoxes;
  }, [mainArray , TotalGameLives]);

  

  return (
    <div className="App">
      <div className="main-game-cover">
        <div className="row">
          <div className="col-lg-3">
            {!isGameOver && (
              <GameScore setScores={setScores} Scores={Scores}/>
            )}
            
            {isActiveScreen2 && (
              <GameLives TotalGameLives={TotalGameLives}/>
            )}
          </div>
          <div className="col-lg-6">
            <div className="game-main-wrapper-cover">
              <div
                className={
                  isActiveScreen1
                    ? "screen1-main-cover active-wrapper"
                    : "screen1-main-cover"
                }
              >
                <div className="header-game-title">
                  <h2>Table Schulte Game</h2>
                </div>
                <div className="game-start-content">
                  <img className="game-banner" src={banner} alt="banner"></img>
                  <p>Please Select Level 😍</p>
                  <div className="level-box-cover">
                      {Levels.map((item_levels) =>{
                        return (
                          <LevelBox  level={item_levels.id} 
                          selectedLevel={selectedLevel} 
                          setSelectedLevel={setSelectedLevel}/>
                        )
                      })}
                  </div>
                 {selectedLevel && (
                    <button className="btn-custom" onClick={handleStartGame}>
                      Start Game
                    </button>
                 )}
                  
                </div>
              </div>
              <div
                className={
                  isActiveScreen2
                    ? "screen2-wrapper active-wrapper"
                    : "screen2-wrapper"
                }
              >
                <div className="screen-content-box">
                  <h5>Screen 2</h5>
                  <div className="cellbox-main-cover-wrapper">
                    {ScreenBox}
                  </div>
                </div>
              </div>
              <div className={`game-over-main-cover-wrapper ${isGameOver ? "show-game-over" : ""}`}>
                  <GameOverModal Scores={Scores}/>
                </div>
            </div>
            
          </div>
          <div className="col-lg-3 py-4">
                <div className="game-side-section">
                      <GameInstruction />
                      <GameTimer isActiveScreen2={isActiveScreen2} Timer={Timer}/>
                </div>
          </div>
        </div>
      </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        
    </div>
    
  );
}




export default App;
