import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Orlando Carnate's 3D Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Renderings</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/Tradeshows">Tradeshows & Exhibits</a>
                            <a className="dropdown-item" href="/Architecture">Architecture</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item disabled" href="/">Animations</a>
                        </div>
                    </li>
                    <li className="nav-item"> <a className="nav-link disabled text-white">External Sites: </a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://carnate3d.wordpress.com" target="_blank"><i className="fab fa-wordpress"></i> Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://orlandocarnate.com" target="_blank"><i className="fas fa-globe"></i> Developer Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/orlando-carnate/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/orlandocarnate" target="_blank"><i className="fab fa-github"></i>GitHub</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar;