import "./App.css";
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido!"} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
