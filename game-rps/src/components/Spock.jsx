import React from "react";
import img from './assets/images/icon-spock.svg';
import { usePlay } from "../providers/p-plays";
import { usePage } from "../providers/p-pages";
import { SpockStyle } from "./assets/styled-buttons";

const Spock = () => {

    const { setPlay, button, setEnemy } = usePlay()
    const { setPage } = usePage()

    function handlePlay() {
        setPlay(4) //papel
        setEnemy(Math.floor(Math.random() * 5))
        setPage(true)
    }

    return(
        <SpockStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </SpockStyle>
    )
}

export default Spock