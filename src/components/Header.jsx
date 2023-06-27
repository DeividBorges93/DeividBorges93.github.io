import '../css/components/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link className='link-menu' to='/inicio'>Início</Link>
        <Link className='link-menu' to='/sobremim'>Sobre mim</Link>
        <Link className='link-menu' to='/projetos'>Projetos</Link>
        <Link className='link-menu' to='/contato'>Contato</Link>
      </div>
    </header>
  )
}