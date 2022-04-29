import './App.css';
import MyNavBar from './Components/NavBar/MyNavBar';
import Home from './Components/Home/Home';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import SobreMi from './Components/sobreMi/SobreMi';
import Cart from './Components/Cart/Cart'
import CartContextProvider from './Components/Context/CartContextProvider';

// pensar un contexto spinner;

function App() {
  return (
      <>
      <CartContextProvider>
        <BrowserRouter>
          <MyNavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/sobreMi" element={<SobreMi />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
      </>
  );
}

export default App;
