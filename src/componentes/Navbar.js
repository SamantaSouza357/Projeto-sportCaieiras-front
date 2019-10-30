import React from 'react';
import './Navbar.scss';



const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="nomeProjeto">
             <a href="">SportCaieiras</a>
        </div>
       <a href="">Cadastre-se</a>
       <a href="">Esportes</a>
       <a href="">Patrocinadores</a>
    </div>
  );
}

export default Navbar;
