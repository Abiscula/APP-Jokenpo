import React from "react";
import styled from "styled-components";
import Paper from "./Paper";
import Scissor from "./Scissor";
import triangle from './styles/images/bg-triangle.svg'
import Rock from './Rock'


const ButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: 55%;

    .triangle {
        z-index: -1;
        width: 65%;
        margin-left: 18%;
        margin-top: -15%;
    }

    span {
        margin-top: 5%;
        display: flex;
        justify-content: space-between;
    }

    span:nth-child(3) {
        display: flex;
        justify-content: center;
        margin-top: -30%;
    }
`


const Buttons = () => {
    return(
        <ButtonsArea>
            <span>
                <Paper />
                <Scissor />
            </span>
            <img className="triangle" src={triangle} />
            <span>
                <Rock />
            </span>
        </ButtonsArea>
    )
}

export default Buttons