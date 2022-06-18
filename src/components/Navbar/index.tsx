import "bootstrap/js/src/collapse.js";
import "./styles.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid container-menu">
        <a href="link" className="nav-log-text offset-xl-1">
          <h4>Carros Top</h4>
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrotop-navbar"
          aria-controls="carrotop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="carrotop-navbar">
          <ul className="navbar-nav offset-xl-7 main-menu">
            <li>
              <a href="link" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="link">CATÁLOGO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
