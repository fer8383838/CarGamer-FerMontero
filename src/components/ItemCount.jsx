import { useState } from "react"

export default function ItemCount({ stock, initial, onAdd }) {

    const [x, setX] = useState(initial)
    return (
        <>
        <br />
            <h3>Stock {stock}</h3>
            <h3>Cantidad {x}</h3>
            <button onClick={()=> { x < 5 ? setX(x+1) : alert('no hhay stock')}}>+</button>
            <button onClick={()=> { x > 1 ? setX(x-1) : alert('no fastidies')}}>-</button>
        </>
    )
}