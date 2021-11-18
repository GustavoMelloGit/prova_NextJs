import styled from "styled-components";
import theme from "@global/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${theme.sizes.layout_max_width}rem;
  height: fit-content;

  .arrow {
    min-height: 4rem;
    min-width: 4rem;
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
  height: 20rem;
  max-width: 50rem;

  @media screen and (max-width: ${theme.sizes.small_big}px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: ${theme.colors.gray_3};
  height: 70%;
  min-height: 5rem;
  width: 90%;
  max-width: 30rem;
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

export const CarouselWrapper = styled.div`
  height: 100%;
  width: 90%;
  max-width: ${theme.sizes.layout_max_width - 8}rem;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  height: 120%;
  width: 120%;
`;
