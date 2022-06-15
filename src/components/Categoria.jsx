import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { MOCK_ITEMS } from "./ItemListContainer";

export default function Categoria() {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {
        console.log(id)
        if (id == 1) {
            setProducto(MOCK_ITEMS.map((e, index) => {
                index < 2
                return e
            }))
        } else if (id == 2) {
            // http://localhost:3000/categoria/1 
            setProducto(MOCK_ITEMS.map((e, index) => {
                index > 1
                return e
            }))
        }
    }, [id])

    return (
        <>
            <h2>Categoria</h2>
            <div>{producto && <div>{JSON.stringify(producto)}</div>}</div>
        </>

    )
}