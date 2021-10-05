import React, { Fragment, useEffect } from "react";
import { Container } from "../components/assets/styled-common";
import Scoreboard from '../components/Scoreboard'
import Rules from  '../components/Rules'
import PlayFilter from "../utils/playFilter";
import playResult from "../utils/playResult";
import { usePlay } from "../providers/p-plays";
import { Result } from '../components/assets/styled-dispute'
import { usePage } from "../providers/p-pages";
import PlayScore from "../utils/playScore";



const Dispute = () => {
    const { setButton } = usePlay()
    const { setPage } = usePage()
    const { play, enemy, setEnemy, score, setScore } = usePlay()

    setScore(playResult(play, enemy)) //resultado

    useEffect(() => { //Chama uma nova jogada do computador toda vez que o usuario joga
        setEnemy(Math.floor(Math.random() * 3))
        setButton(2) // estado para alterar tamanho do botao
    }, [setEnemy, setButton])

    function handleAgain() {
        setPage(false)
        setButton(1)
    }
    

    return(
        <Fragment>
            <Container>
                <Scoreboard/>
                <Result>
                    <span>
                        <h2>YOU PICKED</h2>
                        {PlayFilter(play)}
                    </span>

                    <span className="resultAgain">
                        <h3>{score}</h3>
                        <button className="again" onClick={handleAgain}>PLAY AGAIN</button>
                    </span>

                    <span>
                        <h2>THE HOUSE PICKED</h2>
                        {PlayFilter(enemy)}
                    </span>
                </Result>
            </Container>

            <Rules/>
        </Fragment>
    )
}

export default Dispute