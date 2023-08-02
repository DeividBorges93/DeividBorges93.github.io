
import LoginProjectImage from '../assets/projects-images/login-register-frontend/tela-login-project-image.png';
import EndPointsImageLogin from '../assets/projects-images/login-register-backend/end-point-login-backend.png';
import '../css/components/renderProjects.css';

export default function RenderImages() {
  const objProjects = [
    {
      href: 'https://github.com/DeividBorges93/register-and-login-frontend',
      src: [LoginProjectImage,],
      title: 'Registro e Login de usuário - frontend',
      description: [
        'Projeto feito em Reactjs usando o vite, e TypeScript.',
        'Sistema frontend de login e registro de usuário completo.',
        'Validação de dados, botão mostrar senha, validação de usuário.'
      ],
    },
    {
      href: 'https://github.com/DeividBorges93/register-and-login-backend',
      src: [EndPointsImageLogin,],
      title: 'Registro e Login de usuário - backend',
      description: [
        'Projeto feito em Nodejs e TypeScript.',
        'Banco de dados Postgresql e ORM Prisma.',
        'Sistema backend de login e registro de usuário completo.',
        'Validação de dados, validação de usuário.'
      ],
    }
  ]
  return (
    <div>
      <div className="render-projects">
        {objProjects.map((project) => (
          <div className="card-projects">
            <div className="container-project-image" id={project.title}>
              <img src={project.src} alt={project.title} className='project-image' />
            </div>
            <div className="container-project-tile">
              <a href={project.href} target='blank' className="link-project" rel="noopener noreferrer">
                  <p className="project-title">{project.title}</p>
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
    </div>
  );
}
