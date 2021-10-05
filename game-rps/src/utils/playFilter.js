import React from "react"
import Paper from "../components/Paper"
import Scissor from "../components/Scissor"
import Rock from "../components/Rock"

const playFilter = (play) => { //recebe a jogada como parametro e retorna o componente correspondente

    const Choices = {
        0: <Paper />,
        1: <Scissor />,
        2: <Rock />
    }

    return Choices[play]
}


export default playFilter