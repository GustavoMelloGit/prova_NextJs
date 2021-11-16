import styled from "styled-components";
import theme from "../../../global/theme";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  height: ${theme.sizes.header_height}rem;
  width: 100vw;
  padding: 0 12rem;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #0000001a;
  opacity: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: ${theme.sizes.layout_max_width}rem;
  h1 {
    font-size: 3rem;
    margin: 0;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.SemiBold};
    text-transform: uppercase;

    span {
      font-weight: ${theme.fontWeights.light};
      text-transform: none;
    }
  }
`;
