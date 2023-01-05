
import './App.css';
import './components/CustomerService'
import CustomerService from './components/CustomerService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Truck } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex">
        <div className="Customer-service">
            <CustomerService/>
            <p><Truck/></p>
        </div>
      </header>
    </div>
  );
}

export default App;
