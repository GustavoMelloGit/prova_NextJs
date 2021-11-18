import styled from "styled-components";
import theme from "@global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: ${theme.sizes.header_height + 3}rem 10rem 6rem 10rem;

  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;

  @media screen and (max-width: ${theme.sizes.mobile_medium}px) {
    padding: ${theme.sizes.header_height + 3}rem 3rem 3rem 3rem;
  }
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
    text-align: center;
  }
  h1 {
    font-size: 5rem;
  }
  span {
    font-size: 3rem;
    font-weight: lighter;
    text-transform: capitalize;
  }

  @media screen and (max-width: ${theme.sizes.small_big}px) {
    flex-direction: column;

    .color {
      align-self: flex-end;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: auto;
  width: 40vw;
  min-width: 300px;
  min-height: 30rem;
`;
