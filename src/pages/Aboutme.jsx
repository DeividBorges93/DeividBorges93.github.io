import Header from "../components/Header"
import '../css/pages/aboutme.css';

export default function AboutMe() {
  return (
    <div>
      <Header /> 
        <div className="div-about-me">
          <div className="text-div-about-me">
            <p className="about-me-title">Sobre mim...</p>
            <div className="about-me-text">
              <p className="paragraph">Olá, me chamo Deivid, sou residente de Palhoça-SC. Conhecida como a cidade bela por natureza.</p>
              <p className="paragraph">E como não poderia ser diferente, por sempre ter vivido pertodo mar sou um amante das águas,
                sempre que possível busco estar em contato com o mar, rio, cachoeira. É aonde sinto minhas energias recarregando.</p>
              <br />
              <p className="paragraph">Me sinto um ser meio hibrído (kkkkk), ou adaptável pode-se assim dizer, pois consigo em um dia
              maravilhoso de sol preferir ficar em casa codando, estudando sem nenhum problema, quanto posso sair em um dia de chuva a noite
              para a praia invés de preferir ficar em casa assistindo um filme.</p>
              <p className="paragraph">Sou formado como desenvolvedor fullstack desde 2022 pela escola <a className="about-me-text" href="https://www.betrybe.com/" >Trybe</a>.</p>
              <br />
              <p className="paragraph">As principais ferramentas que trabalho são:</p>
              <p className="paragraph">JavaScript | TypeScript | Python | NodeJs</p>
              <p className="paragraph">HTML5 | CSS3 | REACT | REDUX </p>
              <p className="paragraph">Docker | Tailwind | MySQL</p>
              <p className="paragraph">MongoDB | PostgreSQL</p>
              <p className="paragraph">Sequelize | Prisma</p>
            </div>
          </div>
        </div>
    </div>
  )
};