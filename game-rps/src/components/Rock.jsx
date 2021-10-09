import React from "react";
import img from './assets/images/icon-rock.svg';
import { useHandlePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { RockStyle } from "./assets/styled-main";

const Rock = () => {

    const { handlePlay } = useHandlePlay()
    const { button } = useChangePage()


    return(
        <RockStyle button={button}>
            <button onClick={() => handlePlay(2)}><img src={img} /></button>
        </RockStyle>
    )
}

export default Rock