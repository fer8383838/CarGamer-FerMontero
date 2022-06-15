import { Link } from "react-router-dom"
import carrito from '../img/carrito.png'

export default function CarWidget() {
  return (
    <>
      <Link to="/"><img src={carrito} height="30px" width="30px"></img></Link>
      
    </>
  )
}