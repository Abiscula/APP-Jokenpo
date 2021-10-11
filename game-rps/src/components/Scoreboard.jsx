import React from "react";
import titleIMG from '../components/assets/images/logo-bonus.svg'
import { ScoreStyle, Score } from "./assets/styled-scoreboard";

const Scoreboard = () => {
    
    const localPoints = window.localStorage.getItem('pontos')

    return(
        <ScoreStyle>

                <img src={titleIMG} />
            <Score>
                <h2>SCORE</h2> 
                <span>{localPoints || 0}</span>
            </Score>
        </ScoreStyle>
    )
}

export default Scoreboard