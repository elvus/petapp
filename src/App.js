import logo from './logo.png';
import './App.css';
import "rbx/index.css";
import { Navbar, Content, Column, Section } from "rbx";
import { FaGithub } from 'react-icons/fa';
import InfoContainer from './componentes/pets';
import {useState, useEffect} from 'react';

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
      fetch("http://127.0.0.1:5000/api/tweets")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
        )
  }, [])


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
          <Column.Group>
            {
              items.map(i => {
                return(
                  <Column size={4}>
                    <InfoContainer text={i.tweet} img={i.pics.length > 0 ? i.pics[0].media : "https://bulma.io/images/placeholders/1280x960.png"} />
                  </Column>
                )
              })
            }
          </Column.Group>
        </Content>
      </Section>
    </Content>
  );
}

export default App;
