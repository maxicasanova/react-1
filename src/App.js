import './App.css';
import MyNavBar from './Components/NavBar/MyNavBar';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import item1 from './utils/detalleProducto';
// import Prueba1 from './Components/pruebas/Prueba1';

function App() {
  return (
      <>
        <BrowserRouter>
          <MyNavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            {/* <Prueba1 /> */}
          </Routes>
        </BrowserRouter>
        <ItemDetailContainer item={item1} />
        <Footer />
      </>
      
  );
}

export default App;
