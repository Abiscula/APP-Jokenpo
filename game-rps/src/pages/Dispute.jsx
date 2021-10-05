import React, { Fragment, useEffect } from "react";
import { Container } from "../components/assets/styled-common";
import Scoreboard from '../components/Scoreboard'
import Rules from  '../components/Rules'
import PlayFilter from "../utils/playFilter";
import { usePlay } from "../providers/p-plays";
import { Result } from '../components/assets/styled-dispute'
import { usePage } from "../providers/p-pages";



const Dispute = () => {
    const { setPage } = usePage()
    const { play, enemy, setEnemy } = usePlay()

    useEffect(() => { //Chama uma nova jogada do computador toda vez que o usuario joga
        setEnemy(Math.floor(Math.random() * 3))
    }, [])
    
    return(
        <Fragment>
            <Container>
                <Scoreboard/>
                <Result>
                    {PlayFilter(play)} {/* Passa a jogada como parametro */}
                    <button onClick={() => setPage(false)}>PLAY AGAIN</button>
                    {PlayFilter(enemy)} {/* Passa o random como parametro */}
                </Result>
            </Container>

            <Rules/>
        </Fragment>
    )
}

export default Dispute