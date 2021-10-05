import React, { createContext, useContext, useEffect, useState } from "react";

const PlayContext = createContext()

export const PlayProvider = ({children}) => {
    const [play, setPlay] = useState('') //0- paper / 1- scissor / 2- rock
    const [enemy, setEnemy] = useState('') //estado que recebe jogada do computador
    const [score, setScore] = useState('') //estado que recebe score
    const [button, setButton] = useState(1) //altera style do botao

    return(
        <PlayContext.Provider value={{play, setPlay, enemy, setEnemy, button, setButton, score, setScore}}>
            {children}
        </PlayContext.Provider>
    )
}

export const usePlay = () => useContext(PlayContext)