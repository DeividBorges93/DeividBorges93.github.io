import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav id="menu">
        <Link to='/inicio'>Início</Link>
        <Link to='/sobremim'>Sobre mim</Link>
        <Link to='/projetos'>Projetos</Link>
        <Link to='/contato'>Contato</Link>
      </nav>
    </header>
  )
}