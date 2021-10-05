import styled from "styled-components";

export const Result = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 9%;
    margin-bottom: 9%;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin-bottom: 30%;
    }

    .again {
        padding: 0.9rem;
        border-radius: 12px;
        width: 65%;
        border: none;
        cursor: pointer;
        color: hsl(214, 47%, 23%);
        font-weight: bold;
    }

    .again:hover {
        color: red;
    }

    .resultAgain {
        margin-top: 8%;
        display: flex;
        flex-direction: column;
        width: 100%;

        h3 {
            margin-bottom: 4%;
            font-size: 3.2rem;
        }
    }

`