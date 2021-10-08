import React from "react";
import img from './assets/images/icon-scissors.svg';
import { usePlay } from "../providers/p-plays";
import { usePage } from "../providers/p-pages";
import { ScissorStyle } from "./assets/styled-buttons";

const Scissor = () => {

    const { setPlay, button, setEnemy } = usePlay()
    const { setPage } = usePage()

    function handlePlay() {
        setPlay(0) //scissor
        setEnemy(Math.floor(Math.random() * 3))
        setPage(true)
    }

    return(
        <ScissorStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </ScissorStyle>
    )
}

export default Scissor