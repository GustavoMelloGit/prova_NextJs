import styled from "styled-components";
import theme from "../../../../../global/theme";

export const Container = styled.div`
  height: 3.2rem;
  width: 35%;
  max-width: 54rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 100px;
  background-color: ${theme.colors.gray_2};
  padding-left: 3rem;
`;

export const SearchWrapper = styled.button`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.white};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 3px 15px #00000014;
  opacity: 1;
  cursor: pointer;
`;

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.Regular};
  color: ${theme.colors.gray_4};
  font-size: 1.3rem;

  svg {
    margin-right: 0.5rem;
  }
`;
