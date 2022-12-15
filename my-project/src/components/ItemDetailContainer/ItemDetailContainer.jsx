import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    consultarBDD("../json/productos.json").then((productos) => {
      const prod = productos.find((product) => product.id === 1);
      setProducto(prod);
    });
  }, []);

  return (
    <div className="border ">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
