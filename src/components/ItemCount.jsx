
export default function ItemCount({ stock, onAdd, cant, setCant }) {

    function handleSumClick() {
        if (cant < stock) {
            setCant(cant + 1);
        }
    }
    function handleSubstractClick() {
        if (cant !== 0) {
          setCant(cant - 1);
        }
      }
      function handleAddToCartClick() {
        if (cant > 0) {
          onAdd(cant);
        }
      }
      
    return (
        <>
            <br />

            <h3>Stock {stock}</h3>
            <h3>Cantidad {cant}</h3>
            <button type="button" className="btn btn-secondary" onClick={() => { handleSubstractClick() }}>-</button>
            <button type="button" className="btn btn-secondary" onClick={() => { handleSumClick() }}>+</button><br />
            <button type="button" className="btn btn-primary"
                onClick={() => { handleAddToCartClick() }}>
                Agregar Carrito
            </button>
            
        </>
    )
}