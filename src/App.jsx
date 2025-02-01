import { useState } from 'react'
import viteLogo from '/vite.svg'

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <div className='App'>
        <NavBar/>
        <ItemListContainer saludo="Bienvenido a la tienda"/>
      </div>
    </>
  )
}

export default App;
