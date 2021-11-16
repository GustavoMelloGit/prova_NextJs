import styled from "styled-components";
import theme from "../../../../../global/theme";
import { AiOutlineClose } from "react-icons/ai";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100vw;
  padding: 2rem 4rem;

  position: absolute;
  background-color: white;
  z-index: 20;

  ul {
    display: block;
    text-align: center;

    li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4rem;
    }
    li {
      font-size: 2.5rem;
      font-family: ${theme.fonts.primary};
    }
  }
`;

export const CloseButton = styled(AiOutlineClose)`
  align-self: flex-end;
  width: 3rem;
  height: 3rem;
  fill: ${theme.colors.blue};
`;
