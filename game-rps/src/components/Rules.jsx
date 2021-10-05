import React, { useState, Fragment} from "react";
import styled from "styled-components";
import img from '../components/assets/images/image-rules.svg'
import {ReactComponent as Close} from '../components/assets/images/icon-close.svg'

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

const RulesIMG = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 35%;
        background-color: #fefefe;
        padding: 3%;
        border-radius: 15px;
    }

    span {
        display: flex;
        width: 100%;
        margin-top: -3%;
        margin-bottom: 10%;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        display: flex;
        color: hsl(214, 47%, 23%);
        font-size: 1.8rem;
        font-weight: bold;
        margin-top: -1%;
        
    }

    img {
        display: flex;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }
`


const Rules = () => {

    const [rules, setRules] = useState()

    return(
        <Fragment>
            <RulesStyle>
                <button onClick={() => setRules(true)}>RULES</button>
            </RulesStyle>
            {rules&&
            <RulesIMG>
                <div>
                    <span>
                        <h2>RULES</h2>
                        <button onClick={() => setRules(false)}><Close/></button>
                    </span>
                    <img src={img} />
                </div>
            </RulesIMG>
            }
        </Fragment>
    )
}

export default Rules