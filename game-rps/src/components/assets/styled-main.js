import styled from "styled-components";

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: 80%;

    .pentagon {
        display: flex;
        align-self: center;
        z-index: -1;
        width: 80%;
        margin-top: -43%;
    }

    span:first-child {
        margin-top: 5%;
        display: flex;
        justify-content: center;
    }

    span:nth-child(2) {
        display: flex;
        justify-content: space-between;
    }

    span:nth-child(4) {
        display: flex;
        justify-content: space-around;
        margin-top: -17%;
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

    button:hover {
        transform: rotate(45deg);
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

export const LizardStyle = styled(PaperStyle)`
    background: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
`

export const SpockStyle = styled(PaperStyle)`
    background: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
`