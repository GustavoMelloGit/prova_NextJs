import styled from "styled-components";
import theme from "../../global/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40rem;

  .arrow {
    height: 4rem;
    width: 4rem;
    fill: #313136;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25rem;
`;

export const Content = styled.div`
  position: relative;
  background-color: ${theme.colors.gray_3};
  height: 20rem;
  width: 30rem;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &.selected {
    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;
  }
  &.not_selected {
    transform: scale(0.8) translateY(30px);
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  height: 40rem;
  width: 40rem;
`;
