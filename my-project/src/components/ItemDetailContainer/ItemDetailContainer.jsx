import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    consultarBDD().then(productos => {
        const prod = productos.find(product => product.id === 1)
        setProducto(prod);
    })
  }, []);

  return (
    <div className="border ">
        <ItemDetail producto={producto} />
    </div>
    );
};

export default ItemDetailContainer;
