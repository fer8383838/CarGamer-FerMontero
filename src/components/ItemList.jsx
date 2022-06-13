import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Item from "./Item";

const MOCK_ITEMS = [
    {
        id: 1,
        title: "hola",
        price: 10,
        img: "https://via.placeholder.com/64",
    },
    {
        id: 2,
        tittle: "hola",
        price: 20,
        img: "https://via.placeholder.com/64",
    },
    {
        id: 3,
        tittle: "hola",
        price: 30,
        img: "https://via.placeholder.com/64",
    },
];

export default function ItemList({ items }) {

    useEffect(() => {
        const getItems = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(MOCK_ITEMS);
                }, 2000);
            });
        };

        getItems()
            .then((res) => {
                setItems(res);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    console.log(items)
    return (
        <>
            <h1>ItemListContainer</h1>
            <ItemList items={items} />
        </>
    )
}