import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const MOCK_ITEMS = [
  {
    id: 1,
    title: "hola",
    price: 10,
    img: "https://via.placeholder.com/64",
  },
];

export default function ItemDetailContainer() {
  const itemId = 1;
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getItems = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(MOCK_ITEMS);
        }, 2000);
      });
    };

    getItems()
      .then((items) => {
        const producto = items.find((producto) => producto.id === itemId);

        setItem(producto);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [itemId]);

  return (
    <>
      <h1>ItemDetailContainer</h1>
      {isLoading ? (
        "Cargando detalle del producto ..."
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
}