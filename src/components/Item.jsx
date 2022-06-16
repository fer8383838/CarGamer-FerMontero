import {Link} from 'react-router-dom';

export default function Item({ id, title, price, index, img }) {

    function onAdd(x) {
        alert(`Agregaste ${x} productos al carrito`);
      }

    return (
        <>
            <div className="col-2 text-center aling-items-center" key={id}>
                <h3>Item {index}</h3>
                <p>id: {id}</p>
                <p>title: {title}</p>
                <p>price: {price}</p>
                <Link to={"/item/"+id}><img src={img} alt="img" /></Link>
            </div>
        </>
    )
}