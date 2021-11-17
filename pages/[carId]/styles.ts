import styled from "styled-components";
import theme from "../../global/theme";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${theme.sizes.header_height + 3}rem 9rem 0 9rem;

  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
`;

export const CarInfo = styled.div`
  display: flex;
  align-self: flex-start;
  .image {
    width: 10rem;
    height: 9rem;
    margin-right: 2rem;
  }
  h1 {
    text-transform: capitalize;
    font-size: 3.5rem;
  }
  span {
    font-weight: lighter;
    font-size: 3rem;
  }
`;

export const CarHero = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  .color {
    align-self: flex-start;
  }
  h1 {
    font-size: 5rem;
  }
  span {
    font-size: 3rem;
    font-weight: lighter;
  }
`;

export const ImageWrapper = styled.div`
  height: auto;
  width: 40vw;
  min-width: 30rem;
  min-height: 30rem;
`;
