import styled from "styled-components";
import theme from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  padding-top: ${theme.sizes.header_height + 3}rem;
  display: flex;
  justify-content: center;
`;

export const CarGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: ${theme.sizes.layout_max_width}rem;
  grid-template-columns: repeat(auto-fit, minmax(0, 270px));
  gap: 2rem;
`;
