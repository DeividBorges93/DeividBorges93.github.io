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

    const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

    emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, templateParams, REACT_APP_USER_ID)

    setFromName('');
    setMessage('');
    setEmail('');
  };

  const getAndCheckValues = () => {
    const submitButton = document.getElementById('send-button');
    const inputName = document.getElementById('user-name');
    const inputEmail = document.getElementById('user-email');
    const inputMessage = document.getElementById('message');

    const { value: name} = inputName;
    const { value: emailValue} = inputEmail;
    const { value: messageValue} = inputMessage;

    const isValid = name.length >= 3 &&
    name !== null &&
    name !== '' &&
    messageValue.length >= 15 &&
    messageValue !== null &&
    messageValue !== '' &&
    emailValue.length >= 6 &&
    emailValue !== null &&
    emailValue !== '' &&
    emailValue.includes('@');

    if (isValid) (submitButton.disabled = false)
    else (submitButton.disabled = true);

    setEmail(emailValue);
    setFromName(name);
    setMessage(messageValue);
  }

  return (
    <div className="container-contacts">
      <div className="div-contatcs">
        <div className="div-send-email">
          <div className="form-div-send-email">
            <form onSubmit={sendEmail}>
              <p className="form-title">Envie uma mensagem...</p>
              <label htmlFor='user-name' >
                Nome
                <input
                  type="text"
                  name="user-name"
                  id='user-name'
                  onChange={getAndCheckValues}
                  value={fromName}
                  placeholder='Escreva seu nome...'
                  />
              </label>
              <label htmlFor='user-email'>
                Email
                <input
                  type="email"
                  name="user-email"
                  id='user-email'
                  onChange={getAndCheckValues}
                  value={email}
                  placeholder='Escreva seu email...'
                  />
              </label>
              <label htmlFor='message'>
                Mensagem
                <textarea
                  name="message"
                  id='message'
                  onChange={getAndCheckValues}
                  value={message}
                  placeholder='Escreva sua mensagem...'
                  />
              </label>
              <button type="submit" className='send-button' id='send-button' disabled>
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