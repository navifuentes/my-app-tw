import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { consultarBDD } from "../../assets/funciones";
//Consultar Base de Datos
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarBDD().then((productList) => {
      const cardProductos = ItemList({ productList });
      setProductos(cardProductos);
    });
  }, []);

  // SI agrego array vacio [] se ejecuta cuando sucedan cambios en la BDD
  // [propiedad] cuando se modifica un objeto interno del array
  return (
    <>
      <div className="border flex bg-sky-200">{productos}</div>
    </>
  );
};

export default ItemListContainer;
