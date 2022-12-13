import Item from "../Item/Item";
//Modificar mi array de Objetos
const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <>
            {productList.map(product => <Item key={product.id} producto ={product}/>)}
        </>
    );
}

export default ItemList;
