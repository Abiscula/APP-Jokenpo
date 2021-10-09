import React from "react";
import img from './assets/images/icon-rock.svg';
import { usePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { RockStyle } from "./assets/styled-main";

const Rock = () => {

    const { setPlay, setEnemy } = usePlay()
    const { changePage, button } = useChangePage()

    function handlePlay() {
        setPlay(2) //rock
        setEnemy(Math.floor(Math.random() * 3))
        changePage('/dispute')
    }

    return(
        <RockStyle button={button}>
            <button onClick={handlePlay}><img src={img} /></button>
        </RockStyle>
    )
}

export default Rock