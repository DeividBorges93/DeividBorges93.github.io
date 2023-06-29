import Header from "../components/Header"
import '../css/pages/home.css';
import LogoDeivid from '../assets/logo-deivid.png';

export default function Home() {
  return (
    <div>
      <Header /> 
          <div className="div-logo-home">
            <img src={LogoDeivid} alt="logo-deivid" className="logo-img-home" />
          </div>
    </div>
  )
};