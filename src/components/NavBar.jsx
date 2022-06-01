import CarWidget from "./CarWidget";


function NavBar() {

    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">CarGamer</a>
                        </li>
                        <li class="nav-item">
                            <CarWidget/>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Producto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br /><br />


        </>
    );
}

export default NavBar;