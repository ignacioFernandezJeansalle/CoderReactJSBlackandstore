import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import OtraPagina from "./components/OtraPagina/OtraPagina";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetingMessage="Bienvenidos a la mejor tienda BLACK de todos los tiempos!!" />} />
          <Route path="/otraPagina" element={<OtraPagina />} />
        </Routes>
      </BrowserRouter>
      {/* <main>
        <ItemListContainer greetingMessage="Bienvenidos a la mejor tienda BLACK de todos los tiempos!!" />
      </main> */}
    </>
  );
}

export default App;
