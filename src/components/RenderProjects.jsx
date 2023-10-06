import { useState, useEffect } from 'react';

import LoginProjectImage from '../assets/projects-images/login-register-frontend/tela-login-project-image.png';
import EndPointsImageLogin from '../assets/projects-images/login-register-backend/end-point-login-backend.png';
import HomePageUirapuru from '../assets/projects-images/uirapurulive-frontend/home-page-uirapuru.png';
import HomePixelArte from '../assets/projects-images/pixel-arte-frontend/pixel-arte-2.png';
import WeWorking from '../assets/projects-images/we-working/we-working.png';
import '../css/components/renderProjects.css';

export default function RenderProjects() {
  const objProjects = [
    {
      id: 1,
      hrefDeploy: 'https://github.com/DeividBorges93/register-and-login-frontend',
      hrefRepository: 'https://github.com/DeividBorges93/register-and-login-frontend',
      src: [LoginProjectImage,],
      title: 'Registro e Login de usuário - frontend',
      linkRepo: 'acesse o repositório',
      description: [
        'Sistema frontend de login e registro de usuário completo.',
        'Projeto feito em Reactjs usando o vite, e TypeScript.',
        'Validação de dados, botão mostrar senha, validação de usuário.'
      ],
    },
    {
      id: 2,
      hrefDeploy: 'https://github.com/DeividBorges93/register-and-login-backend',
      hrefRepository: 'https://github.com/DeividBorges93/register-and-login-backend',
      src: [EndPointsImageLogin,],
      title: 'Registro e Login de usuário - backend',
      linkRepo: 'acesse o repositório',
      description: [
        'Sistema backend de login e registro de usuário completo.',
        'Projeto feito em Nodejs e TypeScript.',
        'Banco de dados Postgresql e ORM Prisma.',
        'Validação de dados, validação de usuário.'
      ],
    },
    {
      id: 3,
      hrefDeploy: 'https://uirapurulive.com.br/',
      hrefRepository: 'https://github.com/DeividBorges93/uirapuru-live',
      src: [HomePageUirapuru,],
      title: 'Projeto Uirapuru Live',
      linkRepo: 'acesse o repositório',
      description: [
        'Site para o projeto artistico Uirapuru.',
        'Projeto feito em HTML, CSS e Javascript.',
        'Single page aplication',
        'CSS puro',
      ],
    },
    {
      id: 4,
      hrefDeploy: 'https://project-pixel-art-beta.vercel.app/',
      hrefRepository: 'https://github.com/DeividBorges93/project-pixel-art',
      src: [HomePixelArte,],
      title: 'Projeto Pixel Arte',
      linkRepo: 'acesse o repositório',
      description: [
        'Crie sua própria pixel arte...',
        'Projeto feito em Javascript, HTML e CSS.',
        'CSS puro',
      ],
    },
    {
      id: 5,
      hrefDeploy: '',
      hrefRepository: '',
      src: [WeWorking,],
      title: 'Projetos futuros...',
      linkRepo: 'estamos trabalhando...',
      description: [
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      ],
    },
    // {
    //   id: 6,
    //   hrefDeploy: 'https://github.com/DeividBorges93/register-and-login-backend',
    //   hrefRepository: 'https://github.com/DeividBorges93/register-and-login-backend',
    //   src: [EndPointsImageLogin,],
    //   title: 'CÓPIIIIAAA!!!!',
    //   linkRepo: 'acesse o repositório',
    //   description: [
    //     'Sistema backend de login e registro de usuário completo.',
    //     'Projeto feito em Nodejs e TypeScript.',
    //     'Banco de dados Postgresql e ORM Prisma.',
    //     'Validação de dados, validação de usuário.'
    //   ],
    // },
    // {
    //   id: 7,
    //   hrefDeploy: 'https://uirapurulive.com.br/',
    //   hrefRepository: 'https://github.com/DeividBorges93/uirapuru-live',
    //   src: [HomePageUirapuru,],
    //   title: 'CÓPIIIIAAA!!!!',
    //   linkRepo: 'acesse o repositório',
    //   description: [
    //     'Site para o projeto artistico Uirapuru.',
    //     'Projeto feito em HTML, CSS e Javascript.',
    //     'Single page aplication',
    //     'CSS puro',
    //   ],
    // },
    // {
    //   id: 8,
    //   hrefDeploy: 'https://project-pixel-art-beta.vercel.app/',
    //   hrefRepository: 'https://github.com/DeividBorges93/project-pixel-art',
    //   src: [HomePixelArte,],
    //   title: 'CÓPIIIIAAA!!!!',
    //   linkRepo: 'acesse o repositório',
    //   description: [
    //     'Crie sua própria pixel arte...',
    //     'Projeto feito em Javascript, HTML e CSS.',
    //     'CSS puro',
    //   ],
    // },
    // {
    //   id: 9,
    //   hrefDeploy: 'https://github.com/DeividBorges93/register-and-login-backend',
    //   hrefRepository: 'https://github.com/DeividBorges93/register-and-login-backend',
    //   src: [EndPointsImageLogin,],
    //   title: 'CÓPIIIIAAA!!!!',
    //   linkRepo: 'acesse o repositório',
    //   description: [
    //     'Sistema backend de login e registro de usuário completo.',
    //     'Projeto feito em Nodejs e TypeScript.',
    //     'Banco de dados Postgresql e ORM Prisma.',
    //     'Validação de dados, validação de usuário.'
    //   ],
    // },
    // {
    //   id: 10,
    //   hrefDeploy: 'https://uirapurulive.com.br/',
    //   hrefRepository: 'https://github.com/DeividBorges93/uirapuru-live',
    //   src: [HomePageUirapuru,],
    //   title: 'CÓPIIIIAAA!!!!',
    //   linkRepo: 'acesse o repositório',
    //   description: [
    //     'Site para o projeto artistico Uirapuru.',
    //     'Projeto feito em HTML, CSS e Javascript.',
    //     'Single page aplication',
    //     'CSS puro',
    //   ],
    // },
    // {
    //   id: 11,
    //   hrefDeploy: 'https://project-pixel-art-beta.vercel.app/',
    //   hrefRepository: 'https://github.com/DeividBorges93/project-pixel-art',
    //   src: [HomePixelArte,],
    //   title: 'CÓPIIIIAAA!!!!',
    //   linkRepo: 'acesse o repositório',
    //   description: [
    //     'Crie sua própria pixel arte...',
    //     'Projeto feito em Javascript, HTML e CSS.',
    //     'CSS puro',
    //   ],
    // }
  ];

  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaTela(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const nextProject = () => {
    if (startIndex + itemsPerPage < objProjects.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const prevProject = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    } else {
      setStartIndex(Math.floor(objProjects.length / itemsPerPage) * itemsPerPage);
    }
  };

  const isMobile = larguraDaTela <= 768;

  return (
    <div className='container-projects' id='content'>
        <div className="card-container">
          <button type='button' className="arrow left-arrow" onClick={prevProject}>
            &#9664;
          </button>
          {isMobile ? (
            <div className="render-projects-mobile">
            {objProjects.map((project) => (
              <div key={project.id} className="card-projects">
                <div className="container-project-image" id={project.title}>
                  <img src={project.src} alt={project.title} className='project-image' />
                </div>
                <div className="container-project-tile">
                  <a href={project.hrefDeploy} target='blank' rel='noopener noreferrer' className="link-deploy-project">
                    <p className="project-title">{project.title}</p>
                  </a>
                  <a href={project.hrefRepository} target='blank' className="link-repository-project" rel="noopener noreferrer">
                    <p className="project-link">{project.linkRepo}</p>
                  </a>
                </div>
                <div className="description">
                  {project.description.map((description) => (
                    <p>{description}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          ): (
            <div className="render-projects">
            {objProjects.slice(startIndex, startIndex + itemsPerPage).map((project) => (
              <div
              key={project.id}
              className="card-projects"
              >
                <div className="container-project-image" id={project.title}>
                  <img src={project.src} alt={project.title} className='project-image' />
                </div>
                <div className="container-project-tile">
                  <a href={project.hrefDeploy} target='blank' rel='noopener noreferrer' className="link-deploy-project">
                    <p className="project-title">{project.title}</p>
                  </a>
                  <a href={project.hrefRepository} target='blank' className="link-repository-project" rel="noopener noreferrer">
                    <p className="project-link">{project.linkRepo}</p>
                  </a>
                </div>
                <div className="description">
                  {project.description.map((description) => (
                    <p>{description}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          )}
          <button type='button' className="arrow right-arrow" onClick={nextProject}>
            &#9654;
          </button>
        </div>
    </div>
  );
}
