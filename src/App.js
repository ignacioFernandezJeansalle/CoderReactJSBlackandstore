import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./App.css";

function App() {
  return (
    <div className="App-mod">
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greetingMessage="Bienvenidos a la mejor tienda BLACK de todos los tiempos!!" />
      </main>
    </div>
  );
}

export default App;
