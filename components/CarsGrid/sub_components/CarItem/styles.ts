import styled from "styled-components";
import theme from "@global/theme";

export const CarItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 1rem 2rem;

  h2 {
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.light};
  }
  img {
    width: 100%;
    max-height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.Bold};
  }
`;

export const CarPrice = styled.span`
  align-self: flex-end;
  font-size: 2rem;
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.Bold};
  sup {
    font-size: 0.7em;
  }
  span {
    font-weight: lighter;
    font-size: 0.7em;
  }
`;
