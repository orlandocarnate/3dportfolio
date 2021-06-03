import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="./">
        Orlando Carnate
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item d-none">
            <Link
              className="nav-link"
              href="https://blog.orlandocarnate.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-wordpress"></i> Blog
            </Link>
          </li>
          <li className="nav-item d-none">
            <Link
              className="nav-link"
              href="https://orlandocarnate.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i> Developer Portfolio
            </Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link text-white" to="/Threejs">
                Three.js Projects
              </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white" to="/VRTours">
                Virtual Tours
              </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white" to="/Architecture">
                Architecture
              </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/Tradeshows">
              Tradeshows & Exhibits
            </Link>
          </li>
          <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  href="https://www.youtube.com/playlist?list=PLv0bey_3GrtIx5w71fSIR25fJ38iyN_11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i> Animations
                </Link>
              </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              href="https://www.linkedin.com/in/orlando-carnate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              href="https://github.com/orlandocarnate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
