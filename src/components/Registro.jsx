import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = () => {
  const iconos = {
    facebook: 'bi bi-facebook',
    git: 'bi bi-github',
    linkdin: 'bi bi-linkedin'
  };

  // Estado para manejar el mensaje de éxito o error
  const [mensaje, setMensaje] = useState('');

  return (
    <>
      <div className="registro">
        <h1>Crea una cuenta</h1>
        <div style={{display:'flex', justifyContent:'space-evenly' }}>
          <SocialButton icono={iconos.facebook} />
          <SocialButton icono={iconos.git} />
          <SocialButton icono={iconos.linkdin} />
        </div>
        <p>O usa tu email para registrarte</p>
        {/* Formulario con el nuevo estado y función para manejar el mensaje */}
        <Formulario mensaje={mensaje} setMensaje={setMensaje} />
        {/* Alerta para mostrar el mensaje */}
        <Alert mensaje={mensaje} tipo={mensaje ? 'danger' : 'success'} /> 
      </div>
    </>
  );
};

export default Registro;

