import { useState, useEffect } from "react";
import axios from "axios";
import "../css/main.css";
import "../css/formatoHome.css";
import "../plugins/fontawesome-free/css/all.min.css";
import "../dist/css/adminlte.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = ({ history }) => {
  const [error, setError] = useState("");
  const [homeData, setHomeData] = useState("");

  useEffect(() => {
    const fetchHomeDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/home", config);
        setHomeData(data.data);
        console.log(homeData);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchHomeDate();
  }, [history]);

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>
      <Header />
      <div>
        <body className="bg-light">
          <div className="container-fluid flex-column p-0 h-100">
            <Header
            //isLoggedIn={isLoggedIn}
            //setLogin={setLogin}
            //setValidate={setValidate}
            />
            <div className="proyectTitle d-flex justify-content-center">
              <h1 className="text-center p-3 pt-4 text-dark">
                SOBRE LOS AUTORES...
              </h1>
            </div>
            <div className="text-center px-5">
              El proyecto de "Titulo del proyecto" hace parte del desarrollo del
              curso dictado por el Ministerio de Tecnologías de la Información y
              la Comunicación (MINTIC). Los autores que han desarrolado este
              sistema de gestión de proyectos son:
            </div>
            <div className="proyect-authors flex-column">
              <div className="up-authors row mt-4 mb-5 w-100 ">
                <div className="col-lg-2 mx-auto">
                  <div className="text-center">
                    <svg
                      className="bd-placeholder-img rounded-circle m-1"
                      width="140"
                      height="140"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 140x140"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#777"></rect>
                      <text x="50%" y="50%" fill="#777" dy=".3em">
                        140x140
                      </text>
                    </svg>
                    <h3 className="text-center">Andres Coronado</h3>
                    <span>e-mail: coronadoandresfelipe@gmail.com</span>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="text-center">
                    <svg
                      className="bd-placeholder-img rounded-circle m-1"
                      width="140"
                      height="140"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 140x140"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#777"></rect>
                      <text x="50%" y="50%" fill="#777" dy=".3em">
                        140x140
                      </text>
                    </svg>
                    <h3 className="text-center">Julian Ortiz</h3>
                    <span>e-mail: Julianortizvillar@hotmail.com</span>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="text-center">
                    <svg
                      className="bd-placeholder-img rounded-circle m-1"
                      width="140"
                      height="140"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 140x140"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#777"></rect>
                      <text x="50%" y="50%" fill="#777" dy=".3em">
                        140x140
                      </text>
                    </svg>
                    <h3 className="text-center">Juan carlos Valderrama</h3>
                    <span>e-mail: juancavalde@gmail.com</span>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="text-center">
                    <svg
                      className="bd-placeholder-img rounded-circle m-1"
                      width="140"
                      height="140"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 140x140"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#777"></rect>
                      <text x="50%" y="50%" fill="#777" dy=".3em">
                        140x140
                      </text>
                    </svg>
                    <h3 className="text-center">Kevin Sebastian Barrera</h3>
                    <span>e-mail: kbarrerac@unal.edu.co</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
      <Footer></Footer>
    </div>
    //</div>
  );
};

export default Home;
