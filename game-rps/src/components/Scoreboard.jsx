import React from "react";
import styled from "styled-components";
import { usePlay } from "../providers/p-plays";

const ScoreStyle = styled.div`
    width: 100%;
    border: 0.2rem solid hsl(217, 16%, 45%);
    padding: 1rem;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        display: flex;
        font-weight: 700;
        margin-left: 0.8rem;
        margin-top: 0.8rem;
        margin-bottom: -1.2rem;
    }

    h1:nth-child(3) {
        margin-bottom: 0.8rem;
    }
`

const Score = styled.div`
    display: flex;
    flex-direction: column;
    background: #fefefe;
    width: 23%;
    height: 90%;
    border-radius: 12px;
    margin-right: 0.8rem;
    align-items: center;
    justify-content: center;
    

    h2 {
        color: hsl(229, 64%, 46%);
        font-size: 1.3rem;
        letter-spacing: 0.18rem;
        margin-bottom: 0rem;
    }

    span {
        color: hsl(214, 47%, 23%);
        font-size: 4rem;
        font-weight: 700;
    }
`


const Scoreboard = () => {

    const {win} = usePlay()

    return(
        <ScoreStyle>
            <Title>
                <h1>ROCK</h1>
                <h1>PAPER</h1>
                <h1>SCISSORS</h1>
            </Title>
            <Score>
                <h2>SCORE</h2>
                <span>{win}</span>
            </Score>
        </ScoreStyle>
    )
}

export default Scoreboard