import { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface IActions extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  border?: boolean;
}

export default function Actions(props: IActions) {
  const { text, border = false, ...rest } = props;

  return (
    <li>
      <Button {...rest} border={border}>
        {text}
      </Button>
    </li>
  );
}
