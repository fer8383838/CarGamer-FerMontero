import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
