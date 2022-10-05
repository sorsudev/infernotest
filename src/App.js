import { Component } from 'inferno';
import Calendar from './components/widgets/calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
