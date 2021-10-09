import React from "react";
import img from './assets/images/icon-lizard.svg';
import { useHandlePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { LizardStyle } from "./assets/styled-main";

const Lizard = () => {

    const { handlePlay } = useHandlePlay()
    const { button } = useChangePage()


    return(
        <LizardStyle button={button}>
            <button onClick={() => handlePlay(3)}><img src={img} /></button>
        </LizardStyle>
    )
}

export default Lizard