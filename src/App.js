import logo from './logo.png';
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
              width="100"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        {/*
        <Navbar.Menu>
            <Navbar.Segment align="end">
              <Navbar.Item as="div">
                <Field kind="group">
                  <Control>
                    <Button
                      as="a"
                      color="dark"
                      href="https://github.com/dfee/rbx"
                    >
                      <FaGithub />
                      <span> GitHub</span>
                    </Button>
                  </Control>
                </Field>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
          */}
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