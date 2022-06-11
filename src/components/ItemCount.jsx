import { useState } from "react"

export default function ItemCount({ stock, initial, onAdd }) {

    const [x, setX] = useState(initial)
    return (
        <>
        <br />
            <h3>Stock {stock}</h3>
            <h3>Cantidad {x}</h3>
            <button onClick={()=> {setX(x+1)}}>+</button>
            <button onClick={()=> { x > 1 ? setX(x-1) : alert('no fastidies')}}>-</button><br />
            <button type="button" class="btn btn-primary btn-lg"
            onClick={()=> { x < 5 ? alert(`Se han agregado ${x} productos`) : alert('no hay stock')}}>
                Agregar Carrito
            </button>
        </>
    )
}