import React, { useEffect } from 'react'

const GameScore = ({Scores}) => {

  useEffect(() =>{
    console.log(Scores)
  },[Scores])

  return (
    <>
        <div className="game-score-main-wrapper">
            <div className="game-cover-wrapper">
                <h5>Game Score</h5>
                <p>{Scores}</p>
            </div>
        </div>
    </>
  )
}

export default GameScore