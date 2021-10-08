import React from "react";
import img from './assets/images/icon-lizard.svg';
import { usePlay } from "../providers/p-plays";
import { usePage } from "../providers/p-pages";
import { LizardStyle } from "./assets/styled-buttons";

const Lizard = () => {

    const { setPlay, button, setEnemy } = usePlay()
    const { setPage } = usePage()

    function handlePlay() {
        setPlay(3) //papel
        setEnemy(Math.floor(Math.random() * 3))
        setPage(true)
    }

    return(
        <LizardStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </LizardStyle>
    )
}

export default Lizard