import emailjs from '@emailjs/browser';
import { useState } from "react";
import '../css/components/sendEmail.css';
import sendButton from '../assets/send-button.png';
import logoLinkedin from '../assets/logo-linkedin.png';
import logoGithub from '../assets/icons8-github-50.png';


export default function SendEmail() {
  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: fromName,
      message,
      email,
    }

    emailjs.send('service_auccfzj', 'template_9cpi9j2', templateParams, 'gkWSGqGXoMlgokgu5')

    setFromName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container-contacts">
      <div className="div-contatcs">
        <p className="contacts-title">Contato...</p>
        <div className="div-send-email">
          <div className="form-div-send-email">
            <form onSubmit={sendEmail}>
              <p className="form-title">Envie uma mensagem...</p>
              <label htmlFor='user_name' >
                Name
                <input
                  type="text"
                  name="user_name"
                  id='user_name'
                  onChange={(e) => setFromName(e.target.value)}
                  value={fromName}
                  placeholder='Escreva seu nome...'
                  />
              </label>
              <label htmlFor='user_email'>
                Email
                <input
                  type="email"
                  name="user_email"
                  id='user_email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder='Escreva seu email...'
                  />
              </label>
              <label htmlFor='message'>
                Message
                <textarea
                  name="message"
                  id='message'
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder='Escreva sua mensagem...'
                  />
              </label>
              <button type="submit" className='send-button'>
                <img src={sendButton} alt="send button icon" className="send-button-icon" />
              </button>
            </form>
            <div className="div-icons">
              <a href='https://www.linkedin.com/in/deivid-borges/' target='blank' className="link-linkedin" rel="noopener noreferrer">
                <img src={logoLinkedin} alt="" className="icons icon-linkedin" />
              </a>
              <a href='https://github.com/DeividBorges93' target='blank' className="link-github" rel="noopener noreferrer">
                <img src={logoGithub} alt="" className="icons icon-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}