import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categoria from "./components/Categoria";

function App() {

  

  return (
    <div>
      
      {/* <ItemDetailContainer/> */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:id" element={<Categoria />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
