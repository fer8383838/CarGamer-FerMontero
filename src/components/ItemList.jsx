import Item from "./Item";
import { MiContext } from "../context/CartContext";
import { useState } from "react";

export default function ItemList({ items }) {

    const [darkMode, setDarkMode] = useState(MiContext)
    console.log(items)
    return (
        <>

            <h2>ItemList</h2>
            <button onClick={() => setDarkMode(!darkMode)}>DARKMODE</button>  
            <div className="container">

                <div style={{ background: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }} className="row justify-content-between">{items.map((e, index) => (
                    
                    <>
                        
                        <Item key={e.id} id={e.id} title={e.title} price={e.price} index={index + 1} img={e.img} />
                    </>

                ))}</div>
            </div>

        </>
    )
}