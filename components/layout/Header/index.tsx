import Filter from "./sub_components/Filter";
import { Content, Navbar } from "./styles";
import Button from "./sub_components/Actions";

export default function Header(): JSX.Element {
  return (
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
      </Content>
    </Navbar>
  );
}
