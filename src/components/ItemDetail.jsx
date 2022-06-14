export default function ItemDetail({ item }) {
    return (
        <>
            <h2>ItemDetail</h2>
            <div className="container">
                <div className="row justify-content-between">{item.map((e, index) => (
                    <>
                        <h3>id: {e.id}</h3> 
                        <h3>title: {e.title}</h3>
                        <h3>price: {e.price}</h3>
                        <h3>index: {index + 1}</h3>
                        <img src={e.img}/> 
                    </>
                ))}</div>
            </div>
        </>
    )
}