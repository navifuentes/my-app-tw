const ItemDetail = ({ producto }) => {
  console.log(producto);
  return (
    <div className="flex flex-row py-4 mx-auto w-1/4 bg-sky-200 items-center">
      <div className="w-3/4 mx-1">
        <img
          src={`../img/${producto.img}`}
          className="rounded-lg w-auto"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <div>Nombre: {producto.nombre}</div>
        <div>Marca: {producto.marca}</div>
        <div>$ {producto.precio}</div>
        <div>Stock: {producto.stock}</div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
