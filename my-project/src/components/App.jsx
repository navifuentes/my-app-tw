import "./App.css";
import Navbar from "./_navbar/_navbar";
import ItemListContainer from "./_itemListContainer/_itemListContainer";

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido!"}/>
    </>
  );
}

export default App;
