import React from "react";
import img from './assets/images/icon-spock.svg';
import { usePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { SpockStyle } from "./assets/styled-main";

const Spock = () => {

    const { setPlay, setEnemy } = usePlay()
    const { changePage, button } = useChangePage()

    function handlePlay() {
        setPlay(4) //papel
        setEnemy(Math.floor(Math.random() * 5))
        changePage('/dispute')
    }

    return(
        <SpockStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </SpockStyle>
    )
}

export default Spock