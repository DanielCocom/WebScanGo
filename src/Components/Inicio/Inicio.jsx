import React, { useState } from "react";

import "./Inicio.css";

const Inicio = ({ children }) => {
  return (
    // <div className="container">
    <>
      <header className="header">
        <div>
          <img src="" alt="ScanGoLogo" />
        </div>
        <h1>ScanAndGo</h1>
        <nav>
          <ul>
            <div>
                <img src="" alt="UserLogo" />
            </div>
            <li>
              <a href="pagina_de_inicio_de_sesion.html">Iniciar sesión</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
      {/* // </div> */}
    </>
  );
};

export default Inicio;
