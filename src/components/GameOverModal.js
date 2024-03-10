import GameOver from "../Assets/game-over.png"

function GameOverModal({Scores}) {
  
    const playAgain = () =>{
        window.location.reload();
      }

  return (
    <>
      <div className="game-over-modal" >
            <img src={GameOver}></img>
        <div className='game-over-content-box'>
            <h5>Your Score</h5>
            <p>{Scores}</p>

            <div className='game-over-btns-wrapper'>
                <button onClick={playAgain}>Play Again</button>
            </div>

        </div>
      </div>
    </>
  );
}

export default GameOverModal;