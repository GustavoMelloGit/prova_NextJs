import styled from "styled-components";
import theme from "../../../global/theme";

interface Props {
  filled: boolean;
}
export const ButtonContainer = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  min-width: 130px;
  height: 4rem;
  min-height: 32px;

  border-radius: 25px;
  background: ${(props) => (props.filled ? "#313136" : "transparent")};
  color: ${(props) => (props.filled ? "#fff" : "#313136")};
  border: ${(props) => (props.filled ? "none" : "thin solid #313136")};
  font-family: ${theme.fonts.primary};
  font-weight: lighter;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;
