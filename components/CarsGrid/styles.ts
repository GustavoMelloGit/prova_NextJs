import styled from "styled-components";
import theme from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;

export const CarGrid = styled.div`
  display: grid;
  justify-content: center;
  height: 100%;
  max-width: ${theme.sizes.layout_max_width}rem;
  grid-template-columns: repeat(auto-fit, minmax(0, 270px));
  gap: 2rem;

  /* @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;
