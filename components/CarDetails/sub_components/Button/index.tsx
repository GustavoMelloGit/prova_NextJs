import { ButtonContainer } from "./styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface IButton {
  text: string;
  onClick: () => void;
  filled?: boolean;
  arrowToLeft?: boolean;
}
export default function CarDetailsButton(props: IButton) {
  const { text, filled = false, arrowToLeft = false, onClick } = props;
  if (arrowToLeft) {
    return (
      <ButtonContainer onClick={onClick} filled={filled}>
        <BsArrowLeft size={22} />
        {text}
      </ButtonContainer>
    );
  }
  return (
    <ButtonContainer filled={filled}>
      {text} <BsArrowRight size={22} />
    </ButtonContainer>
  );
}
