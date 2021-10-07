import React from "react";
import img from './assets/images/icon-rock.svg';
import { usePlay } from "../providers/p-plays";
import { usePage } from "../providers/p-pages";
import { RockStyle } from "./assets/styled-buttons";

const Rock = () => {

    const { setPlay, button, setEnemy } = usePlay()
    const { setPage } = usePage()

    function handlePlay() {
        setPlay(2) //rock
        setEnemy(Math.floor(Math.random() * 3))
        setPage(true)
    }

    return(
        <RockStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </RockStyle>
    )
}

export default Rock