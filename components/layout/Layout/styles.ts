import styled from "styled-components";
import theme from "../../../global/theme";

export const Container = styled.main`
  max-width: 100vw;
  max-height: 100vh;
  section {
    padding-top: ${theme.sizes.header_height + 3}rem;
    background-color: white;
    height: 100vh;
  }
`;
