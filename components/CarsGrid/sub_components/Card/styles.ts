import styled from "styled-components";
import theme from "../../../../global/theme";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 29rem;
  height: 100%;
  max-height: 22rem;
  background-color: ${theme.colors.gray_1};
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;
