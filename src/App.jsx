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
          <Route path='/' element={<ItemListContainer user="Bienvenido CoderUser" />} />
          <Route path='/Category/:idCategory' element={<ItemListContainer user="Bienvenido CoderUser" />} />
          <Route path='/product/:idProd' elemnt={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
