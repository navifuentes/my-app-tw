//Generar CARD producto
const Item = ({ producto }) => {
  return (
    <>
      <div className="border px-2">
        <img src={`../img/${producto.img}`} className="rounded-lg w-auto" alt="" />
        <div className="flex flex-col items-center px-1 bg-gray-200">
          <p className="border">{producto.nombre}</p>
          <p className="border">{producto.marca}</p>
          <span className="border">$ {producto.precio}</span>
          <button className="border rounded-lg px-2 bg-gray-400">Ver Detalle</button>
        </div>
      </div>
    </>
  );
};

export default Item;
