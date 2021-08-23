import logo from './logo.svg';
import './App.css';
import "rbx/index.css";
import { Navbar, Content } from "rbx";
import Adopta from './componentes/pets';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Content>
        <Navbar color="info">
          <Navbar.Brand>
            <Navbar.Item href="/">
              <img
                src={logo}
                alt="Bulma: Free, open source, & modern CSS framework based on Flexbox"
              />
              <span>Busca Patitas</span>
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Segment align="start">
              <Link className="navbar-item" to="/adopta">Adopta</Link>
              <Navbar.Item href="#">Encuentra</Navbar.Item>
              <Navbar.Item href="#">Ayuda</Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>
      </Content>
      <Switch>
        <Route path="/adopta">
          <Adopta />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;