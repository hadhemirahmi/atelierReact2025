import { NavLink } from "react-router-dom";

function Navbar({ isAuthenticated, onLogout }) {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://m.media-amazon.com/images/I/71KsMJoEY-L.png" alt="" height={70}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/services">
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        {isAuthenticated ? (
                            <li className="nav-item">
                                <button onClick={onLogout} className="btn btn-light">
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/login">
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;