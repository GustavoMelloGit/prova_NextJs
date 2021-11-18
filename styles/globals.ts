import { createGlobalStyle } from "styled-components";
import theme from "../global/theme";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: #F7F7F7;
        font-family: ${theme.fonts.primary};
    }
    *{
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        @media screen and (max-width: ${theme.sizes.normal}px) {
            font-size: 55%;
        }
        @media screen and (max-width: ${theme.sizes.small_big}px) {
            font-size: 50%;
        }
        @media screen and (max-width: ${theme.sizes.small_medium}px) {
            font-size: 40%;
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
