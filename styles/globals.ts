import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: #F7F7F7;
        font-family: "Arimo";
    }
    *{
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    ul{
        list-style: none;
        display: inline-flex;
        li:not(:last-child){
            margin-right: 4rem;
        }
    }
`;

export default GlobalStyles;
