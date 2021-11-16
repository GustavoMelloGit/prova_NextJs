import { CloseButton, ModalContainer } from "./styles";

interface IModal {
  setModalVisible: () => void;
}
export default function Modal(props: IModal) {
  return (
    <ModalContainer>
      <CloseButton onClick={props.setModalVisible} />
      <ul>
        <li>Sign in</li>
        <li>Sign up</li>
        <li>Filter</li>
      </ul>
    </ModalContainer>
  );
}
