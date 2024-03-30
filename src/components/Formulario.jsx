import React, { useState } from 'react';

const Formulario = ({ mensaje, setMensaje }) => { // Agregamos mensaje y setMensaje como props
  const [nombre, setNombre] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [contrasena, setContrasena] = useState(''); 
  const [confirmarContrasena, setConfirmarContrasena] = useState(''); 
  

  const handleNombreChange = (e) => {
    setNombre(e.target.value); 
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  }

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value); 
  }

  const handleConfirmarContrasenaChange = (e) => {
    setConfirmarContrasena(e.target.value); 
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Verificar campos vacíos
    if (nombre === '' || email === '' || contrasena === '' || confirmarContrasena === '') {
      setMensaje('Por favor, complete todos los campos.'); // Actualizar mensaje de error
    } else {
      setMensaje('¡Registro exitoso!'); // Actualizar mensaje de éxito
      // Aquí se agregaría la lógica para enviar el formulario
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input para el nombre */}
      <input type="text" className="form-control mb-2" value={nombre} onChange={handleNombreChange} placeholder="Nombre" />
      {/* Input para el email */}
      <input type="email" className="form-control mb-2" value={email} onChange={handleEmailChange} placeholder="Email" />
      {/* Input para la contraseña */}
      <input type="password" className="form-control mb-2" value={contrasena} onChange={handleContrasenaChange} placeholder="Contraseña" />
      {/* Input para confirmar la contraseña */}
      <input type="password" className="form-control mb-2" value={confirmarContrasena} onChange={handleConfirmarContrasenaChange} placeholder="Confirmar Contraseña" />
      {/* Botón para enviar el formulario */}
      <button type="submit" className='btn btn-success'>Registrarse</button>
    </form>
  );
}

export default Formulario;

