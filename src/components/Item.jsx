export default function Item({ id, title, price, index, img }) {
    return (
        <>
            <h3>Item {index}</h3>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>price: {price}</p>
            <img src={img} alt="img" />
        </>
    )
}