import React, { Fragment, useEffect } from "react";
import { Container } from "../components/assets/styled-common";
import Scoreboard from '../components/Scoreboard'
import Rules from  '../components/Rules'
import PlayFilter from "../utils/playFilter";
import playResult from "../utils/playResult";
import { usePlay } from "../providers/p-plays";
import { Result } from '../components/assets/styled-dispute'
import { useChangePage } from "../providers/page";


const Dispute = () => {
    const { changePage, setButton } = useChangePage()
    const { play, enemy, score, setScore, setPoints, points} = usePlay()
    const result = playResult(play, enemy) //resultado da comparação (retorna string)
    
    useEffect(() => { //Chama uma nova jogada do computador toda vez que o usuario joga
        setButton(2) // estado para alterar tamanho do botao
        setScore(result) //adiciona resultado no estado
        if(result === 'YOU WIN') {
            setPoints(points+1)
            window.localStorage.setItem('pontos', points+1)
        } else if(result === 'YOU LOSE') {
            if(points != 0) {
                setPoints(points-1)
                window.localStorage.setItem('pontos', points-1)
            } 
        }
    }, [setScore, setPoints])

    function handleAgain() {
        changePage('/')
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