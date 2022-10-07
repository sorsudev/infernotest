import { Component } from 'inferno';
import { BrowserRouter, Route, Switch } from 'inferno-router';
import Calendar from './components/widgets/calendar';
import { New as NewClient } from './components/client';
import Navbar from './components/widgets/nav';
import './css/nav.css'
import './css/forms.css'
import './css/grid.css'
import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/servicios" component={Calendar} />
          <Route path="/clientes/nuevo" component={NewClient} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
