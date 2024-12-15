import React, { useRef } from 'react';
import '../css/components/header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const containerHeaderRef = useRef(null);
  let showSidebar = false;

  const toogleSideBar = () => {
    showSidebar = !showSidebar;
    const containerHeader = containerHeaderRef.current;
    const content = document.getElementById('content');

    if (showSidebar) {
      containerHeader.style.marginLeft = '0vw';
      containerHeader.style.animationName = 'showSidebar';
      content.style.filter = 'blur(2px)';
      content.style.pointerEvents = 'none';
      content.style.cursor = 'default';
    } else {
      containerHeader.style.marginLeft = '-100vw';
      containerHeader.style.animationName = '';
      content.style.filter = 'none';
      content.style.pointerEvents = '';
      content.style.cursor = '';
    }
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && showSidebar) {
      toogleSideBar();
    }
  })

  return (
    <div  className='header' id='header'>
      <button onClick={toogleSideBar} type='button' className="btn-menu-hamburguer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div className="container-header" id='container-header' ref={containerHeaderRef}>
        <div className="close-menu">
          <button onClick={toogleSideBar} type='button' className="btn-menu-hamburguer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
        <div className="links-menu">
          
          
          
          
          <div className="options-menu">
            <NavLink
              className="link-menu"
              activeclassname="active"
              to='/inicio'
            >
              Início
            </NavLink>
          </div>
          <div className="options-menu">
            <NavLink
              className="link-menu"
              activeclassname="active"
              to='/sobremim'
            >
              Sobre mim
            </NavLink>
          </div>
          <div className="options-menu">
            <NavLink
              className="link-menu"
              activeclassname="active"
              to='/contato'
            >
              Contato
            </NavLink>
          </div>
          <div className="options-menu">
            <NavLink
              className="link-menu"
              activeclassname="active"
              to='/projetos'
            >
              Projetos
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
}
