
//Generar CARD producto 
const Item = ({producto}) => {
    return (
        <>
            <div className="border">
                <img src="..." alt="" />
                <div>
                    <p className="border">{producto.nombre}</p>
                    <p className="border">{producto.marca}</p>
                    <span className="border">$ {producto.precio}</span>
                </div>
                <button>Ver Detalle</button>
            </div>
        </>
    );
}

export default Item;
