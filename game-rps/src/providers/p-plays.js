import React, { createContext, useContext, useEffect, useState } from "react";

const PlayContext = createContext()

export const PlayProvider = ({children}) => {
    const [play, setPlay] = useState('') //0- paper / 1- scissor / 2- rock
    const [enemy, setEnemy] = useState('')

    return(
        <PlayContext.Provider value={{play, setPlay, enemy, setEnemy}}>
            {children}
        </PlayContext.Provider>
    )
}

export const usePlay = () => useContext(PlayContext)