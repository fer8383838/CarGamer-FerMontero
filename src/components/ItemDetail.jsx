import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  function onAdd(x) {
    alert(`Agregaste ${x} productos al carrito`);
  }

  return (
    <>
      <h2>ItemDetail</h2>
      <div className="container">
        <div className="row justify-content-between">
          <h3>id: {item.id}</h3>
          <h3>title: {item.title}</h3>
          <h3>price: {item.price}</h3>
          <img src={item.img} />
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
}