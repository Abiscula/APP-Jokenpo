import React from "react";
import styled from "styled-components";
import img from './assets/images/icon-paper.svg'
import { usePlay } from "../providers/p-plays";

const PaperStyle = styled.div`
    display: flex;
    width: 160px;
    height: 160px;
    background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));;
    border-radius: 80px;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 -7px 0 rgba(0, 0, 0, 0.30), 0 5px 0 rgba(0, 0, 0, 0.15);

    Button {
        border: none;
        cursor: pointer;
        width: 125px;
        height: 125px;
        display: flex;
        background: white;
        border-radius: 80px;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 5px 0 rgba(0, 0, 0, 0.15)
    }


`


const Paper = () => {

    const { setPlay } = usePlay()

    return(
        <PaperStyle>
            <button onClick={() => setPlay('paper')}><img src={img} /></button>
        </PaperStyle>
    )
}

export default Paper