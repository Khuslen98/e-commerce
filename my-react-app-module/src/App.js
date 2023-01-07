import './App.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import './components/CustomerService';
import CustomerService from './components/CustomerService';
import CustomerService1 from './components/CustomerLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import MainMenu from './components/MainMenu';
import CarouselData0 from './components/Carousel';

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
            <h4 className='fundReturn'>30 days return</h4>
          </div>
        </nav>
        <div>
          <AliceCarousel>
            <CarouselData0 />
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}

export default App;
