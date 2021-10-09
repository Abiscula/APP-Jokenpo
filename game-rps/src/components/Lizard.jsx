import React from "react";
import img from './assets/images/icon-lizard.svg';
import { usePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { LizardStyle } from "./assets/styled-main";

const Lizard = () => {

    const { setPlay, setEnemy } = usePlay()
    const { changePage, button } = useChangePage()

    function handlePlay() {
        setPlay(3) //papel
        setEnemy(Math.floor(Math.random() * 3))
        changePage('/dispute')
    }

    return(
        <LizardStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </LizardStyle>
    )
}

export default Lizard