import React from "react";
import Paper from "./Paper";
import Scissor from "./Scissor";
import Rock from './Rock';
import pentagon from './assets/images/bg-pentagon.svg';
import { ButtonsArea } from "./assets/styled-buttons";
import Spock from "./Spock";
import Lizard from "./Lizard";

const Buttons = () => {
    return(
        <ButtonsArea >
            <span>
                <Scissor />
            </span>
            <span>
                <Spock />
                <Paper /> 
            </span>
            <img className="pentagon" src={pentagon} />
            <span>
                <Lizard />
                <Rock />
            </span>
        </ButtonsArea>
    )
}

export default Buttons