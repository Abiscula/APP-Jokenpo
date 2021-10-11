import React, { createContext, createRef, useContext, useState } from "react";
import { useChangePage } from "./page";

const PlayContext = createContext()

export const PlayProvider = ({children}) => {
    const [play, setPlay] = useState('') // 0-scissor / 1-paper / 2-rock / 3-lizard / 4-spock
    const [enemy, setEnemy] = useState('') //estado que recebe jogada do computador
    const [score, setScore] = useState('') //estado que recebe o resultado (string)
    const [points, setPoints] = useState(window.localStorage.getItem('pontos')) //estado que recebe os pontos (placar)
    
    return(
        <PlayContext.Provider value={{play, setPlay, enemy, setEnemy, score, setScore, points, setPoints}}>
            {children}
        </PlayContext.Provider>
    )
}

export const usePlay = () => useContext(PlayContext)

export const useHandlePlay = () => {
    const {setEnemy, setPlay} = useContext(PlayContext)
    const { changePage } = useChangePage()

    function handlePlay(n) {
        setPlay(n) //papel
        setEnemy(Math.floor(Math.random() * 3))
        changePage('/dispute')
    }

    return {
        setEnemy,
        setPlay,
        handlePlay
    }
}