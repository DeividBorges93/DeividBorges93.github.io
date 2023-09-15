import logoHtml5 from '../assets/stacks-icons/html-5.png';
import logoCss3 from '../assets/stacks-icons/icons8-css3-48.png';
import logoDocker from '../assets/stacks-icons/icons8-docker-48.png';
import logoMongodb from '../assets/stacks-icons/icons8-mongodb-48.png';
import logoMysql from '../assets/stacks-icons/icons8-mysql-50.png';
import logoNodejs from '../assets/stacks-icons/icons8-nodejs-32.png';
import logoPostgresql from '../assets/stacks-icons/icons8-postgresql-48.png';
import logoPrisma from '../assets/stacks-icons/icons8-prisma-orm-48.png';
import logoPython from '../assets/stacks-icons/icons8-python-50.png';
import logoRedux from '../assets/stacks-icons/icons8-redux-50.png';
import logoTypescript from '../assets/stacks-icons/icons8-typescript-50.png';
import logoJavaScript from '../assets/stacks-icons/js.png';
import logoReact from '../assets/stacks-icons/icons8-react-native-68.png';

import logoDeivid from '../assets/ezgif.com-optimize.gif';

import '../css/components/renderImage.css';

export default function RenderImages() {
  const objLogosStacks = [
    {
      name: 'nodejs',
      href: 'https://nodejs.org/',
      src: logoNodejs,
    },
    {
      name: 'type-script',
      href: 'https://www.typescriptlang.org/',
      src: logoTypescript,
    },
    {
      name: 'java-script',
      href: 'https://www.javascript.com/',
      src: logoJavaScript,
    },
    {
      name: 'reactjs',
      href: 'https://react.dev/',
      src: logoReact,
    },
    {
      name: 'html5',
      href: 'https://html5.org/',
      src: logoHtml5,
    },
    {
      name: 'css3',
      href: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      src: logoCss3,
    },
    {
      name: 'mysql',
      href: 'https://www.mysql.com/',
      src: logoMysql,
    },
    {
      name: 'docker',
      href: 'https://www.docker.com/',
      src: logoDocker,
    },
    {
      name: 'mongodb',
      href: 'https://www.mongodb.com/',
      src: logoMongodb,
    },
    {
      name: 'postgresql',
      href: 'https://www.postgresql.org/',
      src: logoPostgresql,
    },
    {
      name: 'prisma',
      href: 'https://www.prisma.io/docs',
      src: logoPrisma,
    },
    {
      name: 'python',
      href: 'https://www.python.org/',
      src: logoPython, 
    },
    {
      name: 'redux',
      href: 'https://redux.js.org/',
      src: logoRedux,
    },
  ]

  return (
    <div className='container-home-page' id='content'>
      <div className="div-logo-home">
        <img src={logoDeivid} alt="logo-deivid" className="logo-img-home" />
      </div>
      <div className="render-images">
        {objLogosStacks.map((icon) => (
          <div className="div-icon-image" id={icon.name}>
            <a href={icon.href} target='blank' className="link-stacks" rel="noopener noreferrer">
              <img src={icon.src} alt="stacks icon" className="stack-logo" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
