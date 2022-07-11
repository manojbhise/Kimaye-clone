import './App.css';
import NavbarPage from './components/NavbarPage';
import Footer from './components/Footer';
import { OurStory } from './pages/OurStory';
import { Whykimaye } from './pages/Whykimaye';
import { Route, Routes } from 'react-router-dom';
import Address from './pages/Address';
import Home from './other pages/Home';
import Login from './other pages/Login';
import Cart from './other pages/Cart';
import About from './other pages/About';
import Nav from './other pages/Nav';
import { GrowDetails } from './grow page/GrowDetails';
import MainHome from './pages/MainHome';

function App() {


  return (
    <div>
        <NavbarPage />

        <Routes>
          <Route path='' element={<MainHome />} />
          <Route path='allfruits' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='fruitcombos' element={<About />} />
          <Route path='gifts' element={<Nav />} />
          <Route path='ourstory' element={<OurStory />} />
          <Route path='whykimaye' element={<Whykimaye />} />
          <Route path='grow' element={<GrowDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='address' element={<Address />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
