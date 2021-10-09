import React from "react"
import Paper from "../components/Paper"
import Scissor from "../components/Scissor"
import Rock from "../components/Rock"
import Lizard from '../components/Lizard'
import Spock from '../components/Spock'

const playFilter = (play) => { //recebe a jogada como parametro e retorna o componente correspondente

    // 0-scissor / 1-paper / 2-rock / 3-lizard / 4-spock

    const Choices = {
        0: <Scissor />,
        1: <Paper />,
        2: <Rock />,
        3: <Lizard />,
        4: <Spock />
    }

    return Choices[play]
}


export default playFilter