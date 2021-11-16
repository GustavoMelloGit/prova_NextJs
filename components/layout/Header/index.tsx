import Filter from "./sub_components/Filter";
import { Content, Navbar, NavButton, NavMenu } from "./styles";
import Button from "./sub_components/Actions";
import Modal from "./sub_components/Modal";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  function handleChangeModalVisible(): void {
    setModalVisible((prev) => !prev);
  }
  return (
    <>
      <Navbar>
        <Content>
          <h1>
            Exotic <span>cars</span>
          </h1>
          <Filter />
          <ul>
            <Button text="Sign up" />
            <Button text="Sign in" border />
          </ul>
          <NavButton onClick={handleChangeModalVisible} />
          <NavMenu />
        </Content>
      </Navbar>
      {modalVisible && <Modal setModalVisible={handleChangeModalVisible} />}
    </>
  );
}
