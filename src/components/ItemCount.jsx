import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function ItemCount({ stock, onAdd }) {
    const [cant, setCant] = useState(1)

    function handleSumClick() {
        if (cant < stock) {
            setCant(cant + 1);
        }
    }
    function handleSubstractClick() {
        if (cant !== 0) {
          setCant(cant - 1);
        }
      }
      function handleAddToCartClick() {
        if (cant > 0) {
          onAdd(cant);
        }
      }
      
    return (
        <>
            <br />

            <h3>Stock {stock}</h3>
            <h3>Cantidad {cant}</h3>
            <button type="button" className="btn btn-secondary" onClick={() => { handleSubstractClick() }}>-</button>
            <button type="button" className="btn btn-secondary" onClick={() => { handleSumClick() }}>+</button><br />
            <Link to={"/cart"}>
              <button type="button" className="btn btn-primary"
                onClick={() => { handleAddToCartClick() }}>
                Agregar Carrito
            </button></Link>
            
        </>
    )
}