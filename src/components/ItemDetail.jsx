import { useState } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  
  function onAdd(x) {
    alert(`Agregaste ${x} productos al carrito`);
    setTimeout(() => {
      
    }, 2000);
  }
  const [producto, setProducto] = useState(item)
  return (
    <>
      <h2>ItemDetail</h2>
      <div className="container">
        <div className="row justify-content-between">
          <h3>{JSON.stringify(item)}</h3>
          <h3>Id: {producto.id}</h3>
          <h3>Producto: {producto.title}</h3>
          <h3>Precio: {producto.price}</h3>
          <div>
          <img src={producto.img} alt="img" />
          </div>
          {/* <h3>id: {item.id}</h3>
          <h3>title: {item.title}</h3>
          <h3>price: {item.price}</h3>
          <img src={item.img} /> */}
          <div>
          <ItemCount stock={5} onAdd={onAdd}     />
          </div>
        </div>
      </div>
    </>
  );
}