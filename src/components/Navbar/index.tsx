import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid container-menu">
        <Link to="/" className="nav-log-text offset-xl-1">
          <h4>Carros Top</h4>
        </Link>
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
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" activeClassName="active">
                CATÁLOGO
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
