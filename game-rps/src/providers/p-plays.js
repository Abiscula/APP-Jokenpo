import React, { createContext, useContext, useState } from "react";

const PlayContext = createContext()

export const PlayProvider = ({children}) => {
    const [play, setPlay] = useState('') //0- paper / 1- scissor / 2- rock
    const [enemy, setEnemy] = useState('') //estado que recebe jogada do computador
    const [score, setScore] = useState('') //estado que recebe o resultado (string)
    const [button, setButton] = useState(1) //altera style do botao
    const [points, setPoints] = useState(0) //estado que recebe os pontos (placar)
    
    return(
        <PlayContext.Provider value={{play, setPlay, enemy, setEnemy, button, setButton, score, setScore, points, setPoints}}>
            {children}
        </PlayContext.Provider>
    )
}

export const usePlay = () => useContext(PlayContext)