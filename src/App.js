import logo from './logo.svg';
import './App.css';
import "rbx/index.css";
import { Navbar, Content } from "rbx";
import ListaPet from './componentes/pets';
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
            <Link className="navbar-item" to="/">
              <img
                src={logo}
                alt="Bulma: Free, open source, & modern CSS framework based on Flexbox"
              />
              <span>Busca Patitas</span>
            </Link>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Segment align="start">
              <Link className="navbar-item" to="/adopta">Adopta</Link>
              <Link className="navbar-item" to="/encuentra">Encuentra</Link>
              <Link className="navbar-item" to="/ayuda">Ayuda</Link>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>
      </Content>
      <Switch>
        <Route exact path="/">
          a
        </Route>
        <Route key="adopta" path="/adopta">
          <ListaPet url='adopcion'/>
        </Route>
        <Route key="encuentra" path="/encuentra">
          <ListaPet url='perdido'/>
        </Route>
        <Route key="ayuda" path="/ayuda">
          <ListaPet url='ayuda'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;