import React, { Fragment } from "react";
import Scoreboard from '../components/Scoreboard'
import Rules from  '../components/Rules'
import Paper from "../components/Paper";
import Scissor from "../components/Scissor";
import Rock from '../components/Rock';
import Spock from "../components/Spock";
import Lizard from "../components/Lizard";
import pentagon from '../components/assets/images/bg-pentagon.svg';
import { Container } from "../components/assets/styled-common";
import { ButtonsArea } from "../components/assets/styled-main";

const Main = () => {

    return(
        <Fragment>
            <Container>
                <Scoreboard/>
                <ButtonsArea>
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
            </Container>
            <Rules/>
        </Fragment>
    )
}

export default Main