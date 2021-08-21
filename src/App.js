import logo from './logo.svg';
import './App.css';
import "rbx/index.css";
import { Navbar, Content, Section } from "rbx";
import { FaGithub } from 'react-icons/fa';
import InfoContainer from './componentes/pets';

function App() {
  return (
    <Content>
      <Navbar color="info">
        <Navbar.Brand>
          <Navbar.Item href="https://bulma.io">
            <img
              src={logo}
              alt="Bulma: Free, open source, & modern CSS framework based on Flexbox"
            />
            <span> Busca Patitas</span>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item href="#" active={true}>Adopta</Navbar.Item>
            <Navbar.Item href="#">Encuentra</Navbar.Item>
            <Navbar.Item href="#">Ayuda</Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Section>
        <Content>
          <InfoContainer/>
        </Content>
      </Section>
    </Content>
  );
}

export default App;