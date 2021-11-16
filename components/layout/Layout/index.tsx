import Header from "../Header";
import { Container } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <section>{children}</section>
    </Container>
  );
};

export default Layout;
