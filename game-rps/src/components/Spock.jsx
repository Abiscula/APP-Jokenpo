import React from "react";
import img from './assets/images/icon-spock.svg';
import { useHandlePlay } from "../providers/p-plays";
import { useChangePage } from "../providers/page";
import { SpockStyle } from "./assets/styled-main";

const Spock = () => {

    const { handlePlay } = useHandlePlay()
    const {  button } = useChangePage()

    return(
        <SpockStyle button={button}>
            <button onClick={() => handlePlay(4)}><img src={img} /></button>
        </SpockStyle>
    )
}

export default Spock