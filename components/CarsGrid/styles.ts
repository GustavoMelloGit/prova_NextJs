import styled from "styled-components";
import theme from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CarGrid = styled.div`
  width: ${theme.sizes.layout_max_width}rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 5rem;
  row-gap: 2rem;
`;
