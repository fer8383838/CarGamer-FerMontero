import { Link } from "react-router-dom"
import CarWidget from "./CarWidget";


function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">CarGamer</Link>
                        </li>
                        <li className="nav-item">
                            <CarWidget/>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/GPU" className="nav-link">Categoria1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/CPU" className="nav-link">Categoria2</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br /><br />


        </>
    );
}

export default NavBar;