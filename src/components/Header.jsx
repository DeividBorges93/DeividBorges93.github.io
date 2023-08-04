import React, { useState } from 'react';
import '../css/components/header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const handleMouseEnter = () => {
    setHeaderVisible(true);
  };

  const handleMouseLeave = () => {
    setHeaderVisible(false);
  };

  return (
    <div
      className={`header ${isHeaderVisible ? '' : 'hidden'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
