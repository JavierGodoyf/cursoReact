import NavbarComp from "./components/Navbar/Navbar"; // Renombrado para evitar conflicto de nombres
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Nuestros Productos" />} />
        <Route path='/category/:idCategory' element={<ItemListContainer saludo="Nuestros Productos" />} />
        <Route path='/product/:idProd' element={<ItemDetail />} />
        <Route path='/checkout' element={<Checkout />} /> {/* Ruta para Checkout */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
