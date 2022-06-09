import Item from "./Item";
export default function ItemList( {items} ) {
    console.log(items)
    return (
        <>
            <h2>ItemList</h2>
            <div>{items.map((e, index) => (
            <>
            <Item id={e.id} title={e.title} price={e.price} index={index+1} img={e.img}/>
            </>
            ))}</div>
        </>
    )
}