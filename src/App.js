import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {

  function onAdd(x) {
    alert(`Agregaste ${x} productos al carrito`);
  }

  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>

    </div>
  );
}

export default App;
