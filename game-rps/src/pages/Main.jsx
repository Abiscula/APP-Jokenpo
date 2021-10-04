import React, { Fragment } from "react";
import { Container } from "../components/assets/styled-common";
import Scoreboard from '../components/Scoreboard'
import Buttons from  '../components/Buttons'
import Rules from  '../components/Rules'



const Main = () => {
    return(
        <Fragment>
            <Container>
                <Scoreboard/>
                <Buttons/>
            </Container>
            <Rules/>
        </Fragment>
    )
}

export default Main