import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Orlando Carnate's 3D Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://orlandocarnate.com">Developer Page<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://carnate3d.wordpress.com">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/orlando-carnate/">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/orlandocarnate">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar;
