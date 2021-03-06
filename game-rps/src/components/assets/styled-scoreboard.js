import styled from "styled-components";

export const ScoreStyle = styled.div`
    width: 100%;
    border: 0.2rem solid hsl(217, 16%, 45%);
    padding: 1rem;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-left: 0.8rem;
    }

`

export const Score = styled.div`
    display: flex;
    flex-direction: column;
    background: #fefefe;
    width: 23%;
    height: 90%;
    border-radius: 12px;
    margin-right: 0.8rem;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.20);

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