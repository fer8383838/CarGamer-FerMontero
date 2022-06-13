import { useState } from "react"

export default function ItemCount({ stock, initial, onAdd }) {

    const [x, setX] = useState(initial)

    function handleSumClick() {
        if (x < stock) {
            setX(x + 1);
        }
    }
    function handleSubstractClick() {
        if (x !== 0) {
          setX(x - 1);
        }
      }
      function handleAddToCartClick() {
        if (x > 0) {
          onAdd(x);
        }
      }
    return (
        <>
            <br />
            <h3>Stock {stock}</h3>
            <h3>Cantidad {x}</h3>
            <button onClick={() => { handleSubstractClick() }}>-</button>
            <button onClick={() => { handleSumClick() }}>+</button><br />
            <button type="button" className="btn btn-primary btn-lg"
                onClick={() => { handleAddToCartClick() }}>
                Agregar Carrito
            </button>
        </>
    )
}