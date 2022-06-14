import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  

  return (
    <div>
      <NavBar/>
      <ItemListContainer/><br/><br/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
