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
            <p className="paragraph">Beleza essa cercada de água, tanto mar como rios e cachoeiras, e estar em contato com a água é algo mágico para mim. É aonde sinto minhas energias recarregando.</p>
            <br />
            <p className="paragraph">Me sinto um ser meio hibrído (kkkkk), ou adaptável pode-se assim dizer, pois consigo em um dia
            maravilhoso de sol preferir ficar em casa codando, estudando sem nenhum problema, quanto posso sair em um dia de chuva a noite
            para a praia invés de preferir ficar em casa assistindo um filme.</p>
            <br />
            <p className="paragraph">E isso se reflete na minha vida profissional também, conseguindo me adaptar facilmente a pessoas
            e lugares diferentes e/ou novos. Entre meus amigos sou conhecido por ser justo, o diplomata, aquele que consegue fazer o intermédio entre dois lados, ou mais.</p>
            <br />
            <p className="paragraph">Sou formado como desenvolvedor fullstack desde 2022 pela <a className="about-me-text" rel="noopener noreferrer" target="blank" href="https://www.betrybe.com/" >Trybe</a>.</p>
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