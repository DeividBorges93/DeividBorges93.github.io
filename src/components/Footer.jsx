import '../css/components/footer.css';
import LogoDeivid from '../assets/logo-deivid-lateral.png';

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container-footer">
        <div className="text-dev-by">
          <p>Desenvolvido por:</p>
          <a href="https://deividborges93.github.io" target='blank' rel="noopener noreferrer" className="link-my-portfolio">
            <img src={LogoDeivid} alt="Logo deivid borges" className="logo-deivid" />
          </a>
        </div>
      </div>
    </div>
  )
}