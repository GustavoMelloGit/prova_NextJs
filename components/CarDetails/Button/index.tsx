import { ButtonContainer } from "./styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface IButton {
  text: string;
  filled?: boolean;
  arrowToLeft?: boolean;
}
export default function CarDetailsButton(props: IButton) {
  const { text, filled = false, arrowToLeft = false } = props;
  if (arrowToLeft) {
    return (
      <ButtonContainer filled={filled}>
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
