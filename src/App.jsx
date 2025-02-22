import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="bgApp">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Todas las camisetas a tu alcance!"}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Hola, bienvenido"}/>} />
          <Route path="/item/:itemId" element={<ItemDetailsContainer/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
