const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className="border bg-green-300">
            <div>
                <img src="" alt="" />
            </div>
            <div className="borde">
                <p>{item.nombre}</p>
                <p>Modelo: {item.modelo}</p>
                <p>Marca: {item.marca}</p>
                <span>precio : $ {item.precio}</span>
                <p>stock : {item.stock}</p>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemDetail;
