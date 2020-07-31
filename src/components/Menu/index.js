import React from 'react';
import Logo from '../../assets/img/nandaflix.png';
import './Menu.css';
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu() {

  return (
      <nav className="Menu">
          <a href="/">
            <img src={Logo} className="Logo" alt="nandaflix"/>
          </a> 

      <Button as="a" className="ButtonLink" href="/">
           Novo Vídeo 
      </Button>

        
      </nav>
  );
}

export default Menu;