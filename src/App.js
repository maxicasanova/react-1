import './App.css';
import MyNavBar from './Components/NavBar/MyNavBar';
import Home from './Components/Home/Home';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart'
import CartContextProvider from './Components/Context/CartContextProvider';
import OrderForm from './Components/Forms/OrderForm';
import OrderConfirm from './Components/Orders/OrderConfirm';
import OrderWithProblems from './Components/Orders/OrderWithProblems';


function App() {
  return (
      <>
      <CartContextProvider>
        <BrowserRouter>
          <MyNavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/all" element={<ItemListContainer />} />
            <Route exact path="/highlights" element={<ItemListContainer filter={'highlights'} />} />
            <Route exact path="/sales" element={<ItemListContainer filter={'sales'} />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/order/:orderId" element={<OrderConfirm />} />
            <Route exact path="/order/problems" element={<OrderWithProblems />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<OrderForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
      </>
  );
}

export default App;
