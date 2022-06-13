import ItemCount from "./ItemCount";

export default function Item({ id, title, price, index, img }) {

    function onAdd(x) {
        alert(`Agregaste ${x} productos al carrito`);
      }

    return (
        <>
            <div className="col-4" key={id}>
                <h3>Item {index}</h3>
                <p>id: {id}</p>
                <p>title: {title}</p>
                <p>price: {price}</p>
                <img src={img} alt="img" />
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </>
    )
}