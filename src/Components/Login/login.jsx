import React, { useState } from "react";
import axios from "axios";
import logoImagen from "/src/assets/logo_scanGo.png";

const Login = () => {
  const [nombre, setUsername] = useState("");
  const [contraseña, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://walmart.somee.com/publish/v1/Administrador/IniciarSesion", {
        nombre,
        contraseña,
      });
      // Manejar la respuesta de la API
      console.log(response.data);
    } catch (error) {
      setError(
        "Error de inicio de sesión. Por favor, verifica tus credenciales."
      );
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <>
      <div>
        <div>
          <img src={logoImagen} alt="scanGoIcon" />
        </div>
        <h2>Bienvenido</h2>

        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="usuario"
            value={nombre}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="contraseña"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </>
  );
};

export default Login;
