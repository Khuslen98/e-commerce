
import './App.css';
import './components/CustomerService'
import CustomerService from './components/CustomerService';
import CustomerService1 from './components/CustomerLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between">
        <CustomerService />
        <CustomerService1 />
      </header>
      <div>
        <nav className='navBar1'>
          <div className='d-flex justify-content-between'>
            <Navbar1 />
            <Navbar2 />
          </div>
          <div className='navBar2 d-flex justify-content-between'>
            <MainMenu />
            <h3 className='fundReturn'>30 days return</h3>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
