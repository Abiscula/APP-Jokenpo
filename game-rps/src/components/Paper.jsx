import React from "react";
import img from './assets/images/icon-paper.svg';
import { useHandlePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { PaperStyle } from "./assets/styled-main";

const Paper = () => {

    const { button } = useChangePage()
    const { handlePlay } = useHandlePlay()


    return(
        <PaperStyle button={button}>
            <button onClick={() => handlePlay(1)}><img src={img} /></button>
        </PaperStyle>
    )
}

export default Paper