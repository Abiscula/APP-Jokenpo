import React from "react";
import img from './assets/images/icon-paper.svg';
import { usePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { PaperStyle } from "./assets/styled-main";

const Paper = () => {

    const { setPlay, setEnemy } = usePlay()
    const { changePage, button } = useChangePage()

    function handlePlay() {
        setPlay(1) //papel
        setEnemy(Math.floor(Math.random() * 3))
        changePage('/dispute')

    }

    return(
        <PaperStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </PaperStyle>
    )
}

export default Paper