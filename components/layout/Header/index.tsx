//Utils
import { useState } from "react";
import { useRouter } from "next/router";
//Styles
import { Content, Navbar, NavButton, NavMenu } from "./styles";
//Components
import Modal from "./sub_components/Modal";
import Button from "./sub_components/Actions";
import Filter from "./sub_components/Filter";

export default function Header(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  function handleLogoClicked(): void {
    router.push("/");
  }
  function handleChangeModalVisible(): void {
    setModalVisible((prev) => !prev);
  }
  return (
    <>
      <Navbar>
        <Content>
          <h1 onClick={handleLogoClicked}>
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
