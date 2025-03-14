import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContextProvider} from "./context/CartContext";
import './App.css'
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
      <div className="bgApp">
        <BrowserRouter>
          <CartContextProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Todas las camisetas a tu alcance!"}/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path="/item/:itemId" element={<ItemDetailsContainer/>} />
              <Route path="/cart" element={<CartContainer/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </div>
  )
}

export default App;
