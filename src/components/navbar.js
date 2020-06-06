import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="./">Orlando Carnate's 3D Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Renderings</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/Tradeshows">Tradeshows & Exhibits</Link>
                            <Link className="dropdown-item" to="/Architecture">Architecture</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item disabled" to="/">Animations</Link>
                        </div>
                    </li>
                    <li className="nav-item"> <a className="nav-link disabled text-white">External Sites: </a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.youtube.com/playlist?list=PLv0bey_3GrtIx5w71fSIR25fJ38iyN_11" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i> Animations</a>
                    </li>
                    <li className="nav-item d-none">
                        <a className="nav-link" href="https://blog.orlandocarnate.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-wordpress"></i> Blog</a>
                    </li>
                    <li className="nav-item d-none">
                        <a className="nav-link" href="https://orlandocarnate.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i> Developer Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/orlando-carnate/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/orlandocarnate" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>GitHub</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar;
