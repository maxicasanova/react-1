import './App.css';
import MyNavBar from './Components/NavBar/MyNavBar';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import SobreMi from './Components/sobreMi/SobreMi';
// import Prueba1 from './Components/pruebas/Prueba1';

function App() {
  return (
      <>
        <BrowserRouter>
          <MyNavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/sobreMi" element={<SobreMi />} />
            {/* <Prueba1 /> */}
          </Routes>
        <Footer />
        </BrowserRouter>
      </>
  );
}

export default App;
