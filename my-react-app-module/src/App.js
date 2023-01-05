
import './App.css';
import './components/CustomerService'
import CustomerService from './components/CustomerService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Truck } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header d-flex">
        <div className="Customer-service">
            <CustomerService/>
            <p><Truck/></p>
        </div>
=======
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
>>>>>>> f7ded32f3e477debbe230135195d0d42b11de3f6
      </header>
    </div>
  );
}

export default App;
