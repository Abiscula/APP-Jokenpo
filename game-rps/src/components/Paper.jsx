import React from "react";
import img from './assets/images/icon-paper.svg';
import { usePlay } from "../providers/p-plays";
import { usePage } from "../providers/p-pages";
import { PaperStyle } from "./assets/styled-buttons";

const Paper = () => {

    const { setPlay, button } = usePlay()
    const { setPage } = usePage()

    function handlePlay() {
        setPlay(0) //paper
        setPage(true)
    }

    return(
        <PaperStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </PaperStyle>
    )
}

export default Paper