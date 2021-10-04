import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        
        background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        height: 100vh;
        font-family: 'Barlow Semi Condensed', sans-serif;
        color: #fefefe;
        display: flex;
        flex-direction: column;
        margin: 5% auto;
    }
`