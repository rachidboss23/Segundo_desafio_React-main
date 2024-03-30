import React from 'react';

const SocialButton = ( {icono} ) => { // Recibe el icono como prop
  const style={
    border:'solid 1px black',
    padding:'5%',
    width:'18%', 
    borderRadius: '100%'
  }
  return (
    <div style={style}>

      <i  className={icono}></i> {/* Aquí se mostraría el icono */}
    </div>
     
    
  );
}

export default SocialButton;
