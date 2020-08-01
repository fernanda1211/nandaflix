import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/nandaflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} className="Logo" alt="nandaflix"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
