import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount stock={5} initial={1} />

    </div>
  );
}

export default App;
