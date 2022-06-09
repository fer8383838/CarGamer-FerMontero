import CarWidget from "./CarWidget";


function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">CarGamer</a>
                        </li>
                        <li className="nav-item">
                            <CarWidget/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Producto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br /><br />


        </>
    );
}

export default NavBar;