import React from "react";
import img from './assets/images/icon-scissors.svg';
import { usePlay } from "../providers/p-plays";
import { usePage } from "../providers/p-pages";
import { ScissorStyle } from "./assets/styled-buttons";

const Scissor = () => {

    const { setPlay } = usePlay()
    const { setPage } = usePage()

    function handlePlay() {
        setPlay(1) //scissor
        setPage(true)
    }

    return(
        <ScissorStyle>
            <button onClick={handlePlay}><img src={img} /></button>
        </ScissorStyle>
    )
}

export default Scissor