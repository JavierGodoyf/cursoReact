import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="Nuestros Productos" />} />
          <Route path='/Category/:idCategory' element={<ItemListContainer saludo="Nuestros Productos" />} />
          <Route path='/product/:idProd' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
