import React, { createContext , useState } from 'react'

export const AppContext = createContext();


const ContextProvider = ({children}) => {
    const [Timer , setTimer] = useState(0);
    const [Scores , setScores] = useState(0);

  return (
    <AppContext.Provider value={{Timer , setTimer , setScores ,Scores }}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider;  