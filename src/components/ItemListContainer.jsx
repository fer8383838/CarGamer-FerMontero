import ItemList from "./ItemList";
export default function ItemListContainer() {
  const items = [{
    id: 1,
    title: "hola",
    price: 10,
    img: "https://via.placeholder.com/64"
  },
  {
    id: 2,
    tittle: "hola",
    price: 20,
    img: "https://via.placeholder.com/64"
  },
  {
    id: 3,
    tittle: "hola",
    price: 30,
    img: "https://via.placeholder.com/64"
  }]

  return (
    <>
      <h1>ItemListContainer</h1>
      <ItemList items={items} />
    </>
  )
}