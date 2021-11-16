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
        @media (max-width: 1024px) {
            font-size: 55%;
        }
        @media (max-width: 768px) {
            font-size: 50%;
        }
    }
    ul{
        list-style: none;
        display: inline-flex;
        padding: 0;
        li:not(:last-child){
            margin-right: 4rem;
        }
    }
    h1, h2, h3, h4, h5, h6{
        margin: 0;
    }
`;

export default GlobalStyles;
