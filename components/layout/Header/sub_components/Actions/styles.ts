import styled from "styled-components";
import theme from "../../../../../global/theme";

interface Props {
  border?: boolean;
}
export const Button = styled.button<Props>`
  padding: 0.4rem 1.6rem;
  color: ${theme.colors.blue};
  background-color: transparent;
  border: ${({ border }) =>
    border ? `thin solid ${theme.colors.blue}` : "none"};
  border-radius: 10px;

  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.Bold};
  font-size: 1.4rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 0.6;
  }
`;
