import React from "react";
import img from './assets/images/icon-scissors.svg';
import { useHandlePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { ScissorStyle } from "./assets/styled-main";

const Scissor = () => {

    const { handlePlay } = useHandlePlay()
    const { button } = useChangePage()

    return(
        <ScissorStyle button={button}>
            <button onClick={() => handlePlay(0)}><img src={img} /></button>
        </ScissorStyle>
    )
}

export default Scissor