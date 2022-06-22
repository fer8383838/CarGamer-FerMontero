import Item from "./Item";
import { useState } from "react";

export default function ItemList({ items }) {

    console.log(items)
    return (
        <>

            <h2>ItemList</h2>
            <div className="container">

                <div className="row justify-content-between">{items.map((e, index) => (
                    
                    <>
                        
                        <Item key={e.id} id={e.id} title={e.title} price={e.price} index={index + 1} img={e.img} />
                    </>

                ))}</div>
            </div>

        </>
    )
}