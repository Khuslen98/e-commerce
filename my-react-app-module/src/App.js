
import './App.css';
import './components/CustomerService'
import CustomerService from './components/CustomerService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Truck } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div/>
      </header>
    </div>
  );
}

export default App;
