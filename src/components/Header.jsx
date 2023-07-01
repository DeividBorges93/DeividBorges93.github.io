import React, { useState } from 'react';
import '../css/components/header.css';
import { Link } from 'react-router-dom';

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
        <Link className={`link-menu ${isHeaderVisible ? '' : 'hidden'}`} to='/inicio'>Início</Link>
        <Link className={`link-menu ${isHeaderVisible ? '' : 'hidden'}`} to='/sobremim'>Sobre mim</Link>
        <Link className={`link-menu ${isHeaderVisible ? '' : 'hidden'}`} to='/contato'>Contato</Link>
        <Link className={`link-menu ${isHeaderVisible ? '' : 'hidden'}`} to='/projetos'>Projetos</Link>
      </div>
    </div>
  );
}
