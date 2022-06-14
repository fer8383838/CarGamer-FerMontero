import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const MOCK_ITEMS = [
  {
    id: 1,
    title: "hola",
    price: 10,
    img: "https://via.placeholder.com/64",
  }
];

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItem = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(MOCK_ITEMS);
        }, 2000);
      });
    };

    getItem()
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>ItemDetailContainer</h1>
      <ItemDetail item={item} />
    </>
  );
}