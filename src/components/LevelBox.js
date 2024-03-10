import React from 'react'

const LevelBox = ({level , selectedLevel ,  setSelectedLevel}) => {

    const handleSelectedLevel = (game_level) =>{
        setSelectedLevel(game_level)
    }

  return (
    <>
        <div className={selectedLevel === level ? "active-level-box level-box" : "level-box" }
            onClick = {() =>handleSelectedLevel(level)}
        >
            {level}
        </div>
    </>
  )
}

export default LevelBox