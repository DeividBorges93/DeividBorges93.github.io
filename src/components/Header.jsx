import React from 'react';
import '../css/components/header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      
      <div className="container-header">
        <NavLink
            className="link-menu"
            activeclassname="active"
            to='/inicio'
          >
            Início
          </NavLink>
          <NavLink
            className="link-menu"
            activeclassname="active"
            to='/sobremim'
          >
            Sobre mim
          </NavLink>
          <NavLink
            className="link-menu"
            activeclassname="active"
            to='/contato'
          >
            Contato
          </NavLink>
          <NavLink
            className="link-menu"
            activeclassname="active"
            to='/projetos'
          >
            Projetos
          </NavLink>
      </div>
    </div>
  );
}
