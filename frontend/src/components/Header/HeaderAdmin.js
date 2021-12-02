import "../css/main.css";
import "../css/formatoHome.css";
import "../plugins/fontawesome-free/css/all.min.css";
import "../dist/css/adminlte.min.css";

import { Link } from "react-router-dom";

const Header = () => {
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark gradient">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home">
                {" "}
                <a id="axis" className="nav-link">
                  AXIS <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home">
                {" "}
                <a className="nav-link">
                  Actualizar información{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home">
                {" "}
                <a className="nav-link">
                  Ver ususarios registrados{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home">
                {" "}
                <a className="nav-link">
                  Ver proyectos registrados{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home">
                {" "}
                <a className="nav-link">
                  Aceptar usuarios/proyectos{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home">
                {" "}
                <a className="nav-link">
                  Notificaciones <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav navbar-right ">
            <li className="nav">
              <Link to="/login">
                <a id="logout" className="nav-link" onClick={logoutHandler}>
                  Logout
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
