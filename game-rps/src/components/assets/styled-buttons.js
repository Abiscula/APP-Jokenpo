import styled from "styled-components";

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: 55%;

    .triangle {
        z-index: -1;
        width: 65%;
        margin-left: 18%;
        margin-top: -15%;
    }

    span {
        margin-top: 5%;
        display: flex;
        justify-content: space-between;
    }

    span:nth-child(3) {
        display: flex;
        justify-content: center;
        margin-top: -30%;
    }
`

export const PaperStyle = styled.div`
    display: flex;
    width: ${({button}) => (button === 1 ? '160px' : '210px')};
    height: ${({button}) => (button === 1 ? '160px' : '210px')};
    background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));;
    border-radius: 150px;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 -7px 0 rgba(0, 0, 0, 0.30), 0 5px 0 rgba(0, 0, 0, 0.15);

    Button {
        border: none;
        cursor: pointer;
        width: ${({button}) => (button === 1 ? '125px' : '160px')};
        height: ${({button}) => (button === 1 ? '125px' : '160px')};
        display: flex;
        background: white;
        border-radius: 80px;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 5px 0 rgba(0, 0, 0, 0.15)
    }

    img {
        width: 43%;
    }
`

export const RockStyle = styled(PaperStyle)`
    background: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
`

export const ScissorStyle = styled(PaperStyle)`
    background: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
`