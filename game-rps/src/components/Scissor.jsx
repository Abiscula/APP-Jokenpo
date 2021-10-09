import React from "react";
import img from './assets/images/icon-scissors.svg';
import { usePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { ScissorStyle } from "./assets/styled-main";

const Scissor = () => {

    const { setPlay, setEnemy } = usePlay()
    const { changePage, button } = useChangePage()

    function handlePlay() {
        setPlay(0) //scissor
        setEnemy(Math.floor(Math.random() * 3))
        changePage('/dispute')
    }

    return(
        <ScissorStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </ScissorStyle>
    )
}

export default Scissor