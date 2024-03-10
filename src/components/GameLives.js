import React, { useEffect } from 'react'

const GameLives = ({TotalGameLives}) => {

    useEffect(() =>{
        console.log(TotalGameLives)
    },[TotalGameLives])


  return (
    <>
        <div className="game-score-main-wrapper">
            <div className="game-cover-wrapper">
                <h5>Total Game Lives</h5>
                <p>{TotalGameLives}</p>
            </div>
        </div>
    </>
  )
}

export default GameLives