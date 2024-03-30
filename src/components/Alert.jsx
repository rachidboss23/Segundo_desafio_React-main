import React from 'react';

const Alert = ({ mensaje, tipo }) => { // Recibe el mensaje y el tipo como props
  return (
    <div className={`alert ${tipo}`}>
      {mensaje} {/* Muestra el mensaje recibido como prop */}
    </div>
  );
}

export default Alert;
