import React from "react";
import styled from "styled-components";


const RulesStyle = styled.div`
    display: flex;
    width: 90%;
    justify-content: flex-end;
    

    button {
        display: flex;
        background: transparent;
        color: #fefefe;
        border: 1px solid gray;
        padding: .6rem;
        border-radius: 10px;
        cursor: pointer;
        width: 8.6%;
        justify-content: center;
        text-align: center;
        font-family: 'Barlow Semi Condensed', sans-serif;
        letter-spacing: 0.2rem;
    }
`


const Rules = () => {
    return(
        <RulesStyle>
            <button>RULES</button>
        </RulesStyle>
    )
}

export default Rules