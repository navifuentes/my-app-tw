import { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < 10) setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  return (
    <>
      <button className="border bg-sky-500 px-2" onClick={() => sumar()}>
        +
      </button>
      <div className="border bg-sky-100 inline px-2 ">{contador}</div>
      <button className="border  inline bg-sky-500 px-2" onClick={() => restar()}>
        -
      </button>
      <button className="border bg-sky-500 ml-2 px-2">Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
