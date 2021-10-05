import React from "react";
import Paper from "./Paper";
import Scissor from "./Scissor";
import Rock from './Rock';
import triangle from './assets/images/bg-triangle.svg';
import { ButtonsArea } from "./assets/styled-buttons";

const Buttons = () => {
    return(
        <ButtonsArea >
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