import React from "react";
import styled from "styled-components";
import img from './assets/images/icon-rock.svg'
import { usePlay } from "../providers/p-plays";

const RockStyle = styled.div`
    display: flex;
    width: 160px;
    height: 160px;
    background: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
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


const Rock = () => {

    const { setPlay } = usePlay()

    return(
        <RockStyle>
            <button onClick={() => setPlay('rock')}><img src={img} /></button>
        </RockStyle>
    )
}

export default Rock